"use strict";(self.webpackChunkheyanai_navigation=self.webpackChunkheyanai_navigation||[]).push([[197],{92854:function(O,h,e){e.r(h),e.d(h,{default:function(){return z}});var j=e(5574),x=e.n(j),y=e(45499),d=e(67294),n=e(85893);function D(t){var r=d.useRef(null),a=d.useRef();return d.useEffect(function(){a.current=new y.by(r.current,{appendPadding:10,data:t.data,angleField:"count",colorField:"label",radius:1,innerRadius:.6,label:{type:"inner",offset:"-50%",content:"{value}",style:{textAlign:"center",fontSize:14}},interactions:[{type:"element-selected"},{type:"element-active"}],statistic:{title:!1,content:{style:{whiteSpace:"pre-wrap",overflow:"hidden",textOverflow:"ellipsis"}}}}),a.current.render()},[]),d.useEffect(function(){var u;(u=a.current)===null||u===void 0||u.changeData(t.data)},[t.data]),(0,n.jsx)("div",{ref:r,style:{height:600}})}var l=e(71466);function c(t){var r=d.useRef(null),a=d.useRef(),u=(0,l.q)(t.data);return d.useEffect(function(){a.current=new y.$Q(r.current,{data:u,xField:"frequency",yField:"deviceId",seriesField:"type",color:function(g){var o=g.type;return P()},legend:!1,maxBarWidth:30}),a.current.render()},[]),d.useEffect(function(){var i;(i=a.current)===null||i===void 0||i.changeData(u)},[t.data]),(0,n.jsx)("div",{ref:r,style:{height:600}})}function P(){for(var t="0123456789ABCDEF",r="#",a=0;a<6;a++)r+=t[Math.floor(Math.random()*16)];return r}var R=e(59163),T=e(35312),Z=e(90930),$=e(71230),C=e(15746),F=e(12029),M=e(15457),I=e(4393),b=e(27484),E=e.n(b),B=e(96486);function z(){var t,r,a=(0,T.useRequest)(R.QP,{manual:!0,formatResult:function(o){var s,f,v,m,p=(s=(f=o.data)===null||f===void 0?void 0:f.items)!==null&&s!==void 0?s:[],U=(0,B.chain)((v=(m=o.data)===null||m===void 0?void 0:m.items)!==null&&v!==void 0?v:[]).groupBy(function(A){return A.type}).map(function(A,S){return{label:S,count:A.length}}).value();return{barData:p,pieData:U}}}),u=a.run,i=a.data;return d.useEffect(function(){u({current:"1",size:"10000000",startTime:E()().startOf("day").unix(),endTime:E()().endOf("day").unix()})},[]),(0,n.jsx)(Z._z,{childrenContentStyle:{padding:20},children:(0,n.jsxs)($.Z,{children:[(0,n.jsx)(C.Z,{span:"24",children:(0,n.jsx)(F.Z,{onValuesChange:function(o){if(o.dateRanger){var s,f=(s=o.dateRanger)!==null&&s!==void 0?s:[],v=x()(f,2),m=v[0],p=v[1];u({current:"1",size:"10000000",startTime:m.unix(),endTime:p.unix()})}},children:(0,n.jsx)(F.Z.Item,{name:"dateRanger",children:(0,n.jsx)(M.Z.RangePicker,{disabledDate:function(o){return o&&o<E()().endOf("day").add(-1,"month").endOf("day")}})})})}),(0,n.jsx)(C.Z,{span:"12",children:(0,n.jsx)(I.Z,{children:(0,n.jsx)(c,{data:(t=i==null?void 0:i.barData)!==null&&t!==void 0?t:[]})})}),(0,n.jsx)(C.Z,{span:"12",children:(0,n.jsx)(I.Z,{children:(0,n.jsx)(D,{data:(r=i==null?void 0:i.pieData)!==null&&r!==void 0?r:[]})})})]})})}},71466:function(O,h,e){e.d(h,{q:function(){return y}});var j=e(5574),x=e.n(j);function y(d){var n={};d.forEach(function(l){l.deviceId!=null&&(l.deviceId in n?n[l.deviceId]++:n[l.deviceId]=1)});var D=Object.entries(n).map(function(l){var c=x()(l,2),P=c[0],R=c[1];return{deviceId:P,frequency:Number(R)}}).sort(function(l,c){return c.frequency-l.frequency});return D}}}]);
