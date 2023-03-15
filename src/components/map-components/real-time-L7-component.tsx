import arrow from '@/assets/images/arrow.svg';
import person from '@/assets/images/person.svg';
import stationImage from '@/assets/images/station.svg';
import warning from '@/assets/images/warning.svg';
import { green } from '@ant-design/colors';
import { ILayer, ImageLayer, Mapbox, metersToLngLat, PointLayer, Scene } from '@antv/l7';
import { Card } from 'antd';
import { isEmpty } from 'lodash';
import React from 'react';
import { convertCMtoL, scale } from './convert';

interface IProps {
  map?: string;
  width?: number;
  height?: number;
  rect: [number?, number?];

  /**
   * 基站内容
   *
   * @type {API.GatewayInfo[]}
   * @memberof IProps
   */
  stations?: API.GatewayInfo[];
  /**
   * 单个标签内容
   *
   * @type {API.AoaDataInfo[]}
   * @memberof IProps
   */
  locations?: API.AoaDataInfo[];
}

/**
 * 为了减少图层数，这里将总地图拆开为多个组件
 * 这里只展示实时标签位置
 * @param props
 * @returns
 */
export function RealTimeL7Component(props: IProps) {
  const [mapLength, mapWidth] = props.rect;
  const [loaded, setLoaded] = React.useState<boolean>();

  const mapContainer = React.useRef<HTMLDivElement>(null);
  const scene = React.useRef<Scene>();

  /** @type {*} 地图图片 图层 */
  const imageLayer = React.useRef<ImageLayer>();
  /** @type {*} 基站图层 */
  const stationLayer = React.useRef<ILayer>();

  /** @type {*} 实时位置 ‘点’图层 */
  const locationLayer = React.useRef<ILayer>();

  React.useEffect(() => {
    scene.current = new Scene({
      id: mapContainer.current!,
      map: new Mapbox({
        style: 'blank',
        center: [0, 0],
        pitch: 0,
        zoom: 20,
        // maxZoom: 20,
        minZoom: 18,
        // rotation: 19.313180925794313
      }),
    });
    scene.current.addImage('stationIcon', stationImage);
    scene.current.addImage('arrow', arrow);
    scene.current.addImage('personImage', person);
    scene.current.addImage('warning', warning);
    scene.current?.on('loaded', () => setLoaded(true));
  }, []);
  React.useEffect(() => {
    if (props.map && loaded && mapWidth && mapLength) {
      const maxRange = metersToLngLat([mapLength * scale, mapWidth * scale]);
      if (imageLayer.current) {
        imageLayer.current.setData(props.map!, {
          parser: { type: 'image', extent: [0, 0, ...maxRange] },
        });
        imageLayer.current.setIndex(0);
      } else {
        imageLayer.current = new ImageLayer({ zIndex: 0 });
        imageLayer.current.source(props.map!, {
          parser: { type: 'image', extent: [0, 0, ...maxRange] },
        });
        scene.current?.setCenter([maxRange[0] / 2, maxRange[1] / 2]);
        scene.current?.addLayer(imageLayer.current);
      }
    }
  }, [props.map, loaded, mapWidth, mapLength]);

  // 处理基站展示内容
  React.useEffect(() => {
    if (loaded && mapWidth && !isEmpty(props.stations)) {
      const source = (props.stations ?? [])?.map((item) => {
        const [lng, lat] = convertCMtoL([item.setX!, item.setY!], mapWidth);
        return { ...item, lng, lat };
      });
      if (stationLayer.current) {
        // scene.current?.removeLayer(stationLayer.current);
        // stationLayer.current.destroy();
        stationLayer.current.setData(source);
        stationLayer.current.setIndex(3);
      } else {
        stationLayer.current = new PointLayer({ zIndex: 3 })
          .source(source, {
            parser: { type: 'json', x: 'lng', y: 'lat', name: 'name' },
          })
          .shape('name', ['stationIcon'])
          .size(10);
        scene.current?.addLayer(stationLayer.current);
      }
    }
  }, [props.stations, loaded, mapWidth]);

  React.useEffect(() => {
    if (loaded && mapWidth) {
      const source = (props.locations ?? [])?.map((item) => {
        const [lng, lat] = convertCMtoL([item.posX!, item.posY!], mapWidth) ?? [];
        return { ...item, lng, lat };
      });

      if (!locationLayer.current) {
        if (!isEmpty(source)) {
          locationLayer.current = new PointLayer({
            name: 'real-time',
            zIndex: 3,
            layerType: 'fillImage',
          })
            .source(source, {
              parser: { type: 'json', x: 'lng', y: 'lat', name: 'name' },
            })
            .color(green[3])
            .size(15)
            .shape('personImage', ['personImage'])
            .animate(true);
          scene.current?.addLayer(locationLayer.current);
        }
      } else {
        if (isEmpty(props.locations)) {
          // 图层不能设置空数据 ，这里数据为空时直接隐藏图层
          locationLayer.current.hide();
        } else {
          if (!locationLayer.current.isVisible()) {
            locationLayer.current.show();
          }
          locationLayer.current.setData(source);
          locationLayer.current.setIndex(3);
        }
      }
    }
  }, [props.locations, loaded, mapWidth]);

  return (
    <React.Fragment>
      <Card bodyStyle={{ padding: 0 }}>
        <div id="map" ref={mapContainer} style={{ minHeight: props.height ?? 600 }}></div>
      </Card>
    </React.Fragment>
  );
}
