"use strict";(self.webpackChunkheyanai_navigation=self.webpackChunkheyanai_navigation||[]).push([[138],{89512:function(B,E,e){e.d(E,{v:function(){return T}});var c=e(35312),u=e(86738),p=e(71577),m=e(85893);function T(t){var f,i,r,v,P=(0,c.useIntl)();return(0,m.jsx)(u.Z,{title:(f=t.title)!==null&&f!==void 0?f:P.formatMessage({id:"app.remove.confirm.title",defaultMessage:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417?"}),description:(i=t.title)!==null&&i!==void 0?i:P.formatMessage({id:"app.remove.confirm.description",defaultMessage:"\u5220\u9664\u6B64\u9879"}),okButtonProps:{loading:t.loading},getPopupContainer:t.getPopupContainer,onConfirm:function(){var g;return t==null||(g=t.onClick)===null||g===void 0?void 0:g.call(t)},children:!t.children&&(0,m.jsx)(p.ZP,{type:(r=t.type)!==null&&r!==void 0?r:"link",size:(v=t.size)!==null&&v!==void 0?v:"small",disabled:t.disabled,children:(0,m.jsx)(c.FormattedMessage,{id:"app.remove",defaultMessage:"\u5220\u9664"})})})}},3442:function(B,E,e){e.r(E),e.d(E,{default:function(){return z}});var c=e(97857),u=e.n(c),p=e(5574),m=e.n(p),T=e(13769),t=e.n(T),f=e(89512),i=e(59163),r=e(69851),v=e(90930),P=e(9455),O=e(35312),g=e(54689),W=e(71577),x=e(27484),h=e.n(x),L=e(76807),j=e(67294),M=e(85893),b=["createTime"],S=["current","pageSize"];function z(){var s=(0,O.useIntl)(),C=(0,j.useRef)(),Z=(0,O.useModel)("messageSocket"),y=Z.data;(0,j.useEffect)(function(){if(y){var d=JSON.parse(y);if(d.type==="Alarm"){var a;(a=C.current)===null||a===void 0||a.reload()}}},[y]);var R=(0,O.useRequest)(i.X8,{manual:!0,fetchKey:function(a){return a.alarmIds.join("-")},formatResult:function(a){return a},onSuccess:function(a){a.code===r.OK&&g.Z.success({message:s.formatMessage({id:"app.remove.success",defaultMessage:"\u5220\u9664\u6210\u529F"})})}}),N=R.run,I=R.fetches,$=[{title:s.formatMessage({id:"pages.system.warning-manage.board.fence",defaultMessage:"\u6807\u7B7E"}),dataIndex:"deviceId"},{title:s.formatMessage({id:"pages.system.warning-manage.board.content",defaultMessage:"\u5185\u5BB9"}),ellipsis:!0,dataIndex:"content"},{title:s.formatMessage({id:"pages.system.warning-manage.board.status",defaultMessage:"\u72B6\u6001"}),dataIndex:"status",valueEnum:{Unprocessed:{text:s.formatMessage({id:"pages.system.warning-manage.board.unprocessed",defaultMessage:"\u672A\u5904\u7406"}),status:"Error"},Processed:{text:s.formatMessage({id:"pages.system.warning-manage.board.processed",defaultMessage:"\u5DF2\u5904\u7406"}),status:"Success"},Ignored:{text:s.formatMessage({id:"pages.system.warning-manage.board.ignored",defaultMessage:"\u5FFD\u7565"}),status:"Default"}}},{title:s.formatMessage({id:"pages.system.warning-manage.board.type",defaultMessage:"\u7C7B\u578B"}),dataIndex:"type",valueEnum:{In:s.formatMessage({id:"pages.system.fence-manage.fence.type.in",defaultMessage:"\u8FDB\u5165"}),Out:s.formatMessage({id:"pages.system.fence-manage.fence.type.out",defaultMessage:"\u79BB\u5F00"})}},{title:s.formatMessage({id:"app.createTime",defaultMessage:"\u521B\u5EFA\u65F6\u95F4"}),dataIndex:"createTime",valueType:"dateTimeRange",render:function(a,n){return(0,r.ZN)(n.createTime)}},{title:s.formatMessage({id:"app.updateTime",defaultMessage:"\u66F4\u65B0\u65F6\u95F4"}),dataIndex:"updateTime",valueType:"dateTimeRange",search:!1,render:function(a,n){return(0,r.ZN)(n.createTime)}},{title:s.formatMessage({id:"app.action",defaultMessage:"\u64CD\u4F5C"}),valueType:"option",key:"option",render:function(a,n,l,_){var o;return(0,M.jsxs)(W.ZP.Group,{children:[(0,M.jsx)(L.t,{record:n,refresh:_==null?void 0:_.reload}),(0,M.jsx)(f.v,{disabled:!n.alarmId,onClick:function(){return N({alarmIds:[n.alarmId]}).then(function(){return _==null?void 0:_.reload()})},loading:I==null||(o=I[n.alarmId])===null||o===void 0?void 0:o.loading})]})}}];return(0,M.jsx)(v._z,{childrenContentStyle:{padding:20},children:(0,M.jsx)(P.Z,{options:{setting:!1},actionRef:C,columns:$,beforeSearchSubmit:function(a){var n,l,_=a.createTime,o=t()(a,b),D=_!=null?_:[],U=m()(D,2),K=U[0],A=U[1];return u()(u()({},o),{},{startTime:K?(n=h()(K))===null||n===void 0?void 0:n.unix():void 0,endTime:A?(l=h()(A))===null||l===void 0?void 0:l.unix():void 0})},rowKey:function(a){return a.alarmId+""},request:function(a){var n=a!=null?a:{},l=n.current,_=n.pageSize,o=t()(n,S);return(0,i.QP)(u()({current:l+"",size:_+""},o)).then(function(D){return(0,r.LF)(D)})}})})}}}]);
