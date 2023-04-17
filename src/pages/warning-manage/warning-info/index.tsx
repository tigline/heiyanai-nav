import { AlarmCategoryChart } from '@/pages/warning-manage/warning-info/components/AlarmCategory.chart';
import { AlarmPersonChart } from '@/pages/warning-manage/warning-info/components/AlarmPerson.chart';
import { pageAlarm } from '@/services/swagger/gaojingguanli';
import { useRequest } from '@@/exports';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import dayjs from 'dayjs';
import { chain } from 'lodash';
import React from 'react';

export default function Page() {
  const { run, data } = useRequest(pageAlarm, {
    manual: true,
    formatResult: (res) => {
      const barData = chain(res.data?.items ?? [])
        .groupBy((o) => o.name)
        .map((item, key) => {
          return { label: key, count: item.length };
        })
        .sortBy((o) => o.count)
        .reverse()
        .value();
      const pieData = chain(res.data?.items ?? [])
        .groupBy((o) => o.type)
        .map((item, key) => {
          return { label: key, count: item.length };
        })
        .value();
      return {
        barData,
        pieData,
      };
    },
  });
  React.useEffect(() => {
    run({
      current: '1',
      size: `10000000`,
      startTime: dayjs().add(-1, 'months').unix(),
      endTime: dayjs().unix(),
    });
  }, []);
  return (
    <PageContainer>
      <Row>
        <Col span="12">
          <Card>
            <AlarmPersonChart data={data?.barData ?? []} />
          </Card>
        </Col>
        <Col span="12">
          <Card>
            <AlarmCategoryChart data={data?.pieData ?? []} />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
}
