"use strict";(self.webpackChunkheyanai_navigation=self.webpackChunkheyanai_navigation||[]).push([[43],{51042:function(N,C,e){var p=e(1413),v=e(67294),T=e(42110),r=e(98615),E=function(g,c){return v.createElement(r.Z,(0,p.Z)((0,p.Z)({},g),{},{ref:c,icon:T.Z}))};E.displayName="PlusOutlined",C.Z=v.forwardRef(E)},64317:function(N,C,e){var p=e(1413),v=e(91),T=e(22270),r=e(67294),E=e(66758),s=e(97556),g=e(85893),c=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],m=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],f=r.forwardRef(function(l,O){var B=l.fieldProps,W=l.children,D=l.params,R=l.proFieldProps,F=l.mode,A=l.valueEnum,d=l.request,G=l.showSearch,Z=l.options,z=(0,v.Z)(l,c),U=(0,r.useContext)(E.Z);return(0,g.jsx)(s.Z,(0,p.Z)((0,p.Z)({valueEnum:(0,T.h)(A),request:d,params:D,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,p.Z)({options:Z,mode:F,showSearch:G,getPopupContainer:U.getPopupContainer},B),ref:O,proFieldProps:R},z),{},{children:W}))}),P=r.forwardRef(function(l,O){var B=l.fieldProps,W=l.children,D=l.params,R=l.proFieldProps,F=l.mode,A=l.valueEnum,d=l.request,G=l.options,Z=(0,v.Z)(l,m),z=(0,p.Z)({options:G,mode:F||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},B),U=(0,r.useContext)(E.Z);return(0,g.jsx)(s.Z,(0,p.Z)((0,p.Z)({valueEnum:(0,T.h)(A),request:d,params:D,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,p.Z)({getPopupContainer:U.getPopupContainer},z),ref:O,proFieldProps:R},Z),{},{children:W}))}),S=f,h=P,I=S;I.SearchSelect=h,I.displayName="ProFormComponent",C.Z=I},5966:function(N,C,e){var p=e(1413),v=e(91),T=e(67294),r=e(97556),E=e(85893),s=["fieldProps","proFieldProps"],g=["fieldProps","proFieldProps"],c="text",m=function(h){var I=h.fieldProps,l=h.proFieldProps,O=(0,v.Z)(h,s);return(0,E.jsx)(r.Z,(0,p.Z)({valueType:c,fieldProps:I,filedConfig:{valueType:c},proFieldProps:l},O))},f=function(h){var I=h.fieldProps,l=h.proFieldProps,O=(0,v.Z)(h,g);return(0,E.jsx)(r.Z,(0,p.Z)({valueType:"password",fieldProps:I,proFieldProps:l,filedConfig:{valueType:c}},O))},P=m;P.Password=f,P.displayName="ProFormComponent",C.Z=P},89512:function(N,C,e){e.d(C,{v:function(){return E}});var p=e(80854),v=e(86738),T=e(71577),r=e(85893);function E(s){var g,c,m,f,P=(0,p.useIntl)();return(0,r.jsx)(v.Z,{title:(g=s.title)!==null&&g!==void 0?g:P.formatMessage({id:"app.remove.confirm.title",defaultMessage:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417?"}),description:(c=s.title)!==null&&c!==void 0?c:P.formatMessage({id:"app.remove.confirm.description",defaultMessage:"\u5220\u9664\u6B64\u9879"}),okButtonProps:{loading:s.loading},getPopupContainer:s.getPopupContainer,onConfirm:function(){var h;return s==null||(h=s.onClick)===null||h===void 0?void 0:h.call(s)},children:!s.children&&(0,r.jsx)(T.ZP,{type:(m=s.type)!==null&&m!==void 0?m:"link",size:(f=s.size)!==null&&f!==void 0?f:"small",disabled:s.disabled,children:(0,r.jsx)(p.FormattedMessage,{id:"app.remove",defaultMessage:"\u5220\u9664"})})})}},12372:function(N,C,e){e.r(C),e.d(C,{default:function(){return Y}});var p=e(97857),v=e.n(p),T=e(13769),r=e.n(T),E=e(89512),s=e(84140),g=e(69851),c=e(90930),m=e(9455),f=e(80854),P=e(71577),S=e(80129),h=e.n(S),I=e(67294),l=e(5574),O=e.n(l),B=e(51042),W=e(37476),D=e(5966),R=e(64317),F=e(12029),A=e(54689),d=e(85893);function G(M){var V=F.Z.useForm(),j=O()(V,1),_=j[0],u=(0,f.useIntl)();return(0,d.jsxs)(W.Y,{title:(0,d.jsx)(f.FormattedMessage,{id:"pages.device-manage.label.device.add",defaultMessage:"\u6DFB\u52A0\u6807\u7B7E"}),layout:"horizontal",form:_,labelCol:{xs:6},wrapperCol:{xs:16},width:550,onFinish:function(y){return(0,s.x2)(v()(v()({},y),{},{name:y.name,deviceId:y.deviceId})).then(function($){var b;return(b=M.refresh)===null||b===void 0||b.call(M),$.code===g.OK&&A.Z.success({message:u.formatMessage({id:"app.add.success",defaultMessage:"\u65B0\u5EFA\u6210\u529F"})}),$.code===g.OK})},modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")}},trigger:(0,d.jsxs)(P.ZP,{type:"primary",children:[(0,d.jsx)(B.Z,{}),u.formatMessage({id:"app.action.add",defaultMessage:"\u6DFB\u52A0"})]}),children:[(0,d.jsx)(D.Z,{width:"lg",name:"deviceId",label:u.formatMessage({id:"pages.device-manage.label.device.deviceId",defaultMessage:"\u8BBE\u5907ID"}),rules:[{required:!0,message:u.formatMessage({id:"pages.device-manage.label.device.deviceId.required.failure",defaultMessage:"\u8BBE\u5907ID\u5FC5\u586B"})},{pattern:/^[0-9a-fA-F,]+$/,message:u.formatMessage({id:"pages.device-manage.label.device.mac.hex.failure",defaultMessage:"\u7269\u7406\u5730\u5740\u5FC5\u586B"})}]}),(0,d.jsx)(D.Z,{width:"lg",name:"name",label:u.formatMessage({id:"pages.device-manage.base-station.device.name",defaultMessage:"\u540D\u79F0"})}),(0,d.jsx)(R.Z,{name:"type",label:u.formatMessage({id:"pages.device-manage.label.type",defaultMessage:"\u7C7B\u578B"}),initialValue:"Equipment",valueEnum:{Equipment:u.formatMessage({id:"pages.device-manage.label.type.equipment",defaultMessage:"\u8BBE\u5907"}),Personnel:u.formatMessage({id:"pages.device-manage.label.type.personnel",defaultMessage:"\u4EBA\u5458"}),Vehicle:u.formatMessage({id:"pages.device-manage.label.type.vehicle",defaultMessage:"\u5DE5\u5177"}),Stuff:u.formatMessage({id:"pages.device-manage.label.type.stuff",defaultMessage:"\u6750\u6599"})},rules:[{required:!0,message:u.formatMessage({id:"pages.device-manage.label.type.required.failure",defaultMessage:"\u7C7B\u578B\u5FC5\u586B"})}]})]})}var Z=e(491);function z(M){var V=F.Z.useForm(),j=O()(V,1),_=j[0],u=(0,f.useIntl)(),K=(0,f.useRequest)(Z.as,{manual:!0,formatResult:function(n){var t,i;return(t=n.data)===null||t===void 0||(i=t.items)===null||i===void 0?void 0:i.map(function(o){return{label:o.name,value:o.fenceId}})}}),y=K.run,$=K.data;return I.useEffect(function(){y({current:"1",size:"100"})},[]),(0,d.jsxs)(W.Y,{title:(0,d.jsx)(f.FormattedMessage,{id:"pages.device-manage.label.device.edit",defaultMessage:"\u7F16\u8F91"}),layout:"horizontal",form:_,labelCol:{xs:6},wrapperCol:{xs:16},width:550,onFinish:function(n){var t=n.name,i=n.type,o=n.fenceIds;return(0,s.Ig)({deviceId:M.record.deviceId},{name:t,type:i,fenceIds:o}).then(function(a){var x;return a.code===g.OK&&A.Z.success({message:u.formatMessage({id:"app.edit.success",defaultMessage:"\u66F4\u65B0\u6210\u529F"})}),(x=M.refresh)===null||x===void 0||x.call(M),a.code===g.OK})},modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")}},trigger:(0,d.jsx)(P.ZP,{type:"link",size:"small",children:u.formatMessage({id:"app.edit",defaultMessage:"\u66F4\u65B0\u6807\u7B7E"})}),children:[(0,d.jsx)(D.Z,{width:"lg",name:"deviceId",fieldProps:{disabled:!0},initialValue:M.record.deviceId,label:u.formatMessage({id:"pages.device-manage.base-station.device.code",defaultMessage:"\u7F16\u53F7"}),rules:[{required:!1}]}),(0,d.jsx)(D.Z,{width:"lg",name:"name",initialValue:M.record.name,label:u.formatMessage({id:"pages.device-manage.base-station.device.name",defaultMessage:"\u540D\u79F0"})}),(0,d.jsx)(R.Z,{name:"type",label:u.formatMessage({id:"pages.device-manage.label.type",defaultMessage:"\u7C7B\u578B"}),initialValue:M.record.type,valueEnum:{Equipment:u.formatMessage({id:"pages.device-manage.label.type.equipment",defaultMessage:"\u8BBE\u5907"}),Personnel:u.formatMessage({id:"pages.device-manage.label.type.personnel",defaultMessage:"\u4EBA\u5458"}),Vehicle:u.formatMessage({id:"pages.device-manage.label.type.vehicle",defaultMessage:"\u5DE5\u5177"}),Stuff:u.formatMessage({id:"pages.device-manage.label.type.stuff",defaultMessage:"\u6750\u6599"})},rules:[{required:!0,message:u.formatMessage({id:"pages.device-manage.label.type.required.failure",defaultMessage:"\u7C7B\u578B\u5FC5\u586B"})}]}),(0,d.jsx)(R.Z,{name:"fenceIds",initialValue:M.record.fenceIds,label:u.formatMessage({id:"pages.device-manage.label.device.fence",defaultMessage:"\u7ED1\u5B9A\u56F4\u680F"}),options:$})]})}var U=["current","pageSize"];function Y(){var M=I.useRef(),V=(0,f.useModel)("messageSocket"),j=V.beacons,_=(0,f.useIntl)(),u=(0,f.useRequest)(s.Zc,{manual:!0,fetchKey:function(n){return n.deviceId}}),K=u.run,y=u.fetches,$=[{title:_.formatMessage({id:"pages.device-manage.base-station.device.code",defaultMessage:"\u7F16\u53F7"}),dataIndex:"deviceId",copyable:!0,ellipsis:!0},{title:_.formatMessage({id:"pages.device-manage.base-station.device.name",defaultMessage:"\u540D\u79F0"}),dataIndex:"name",copyable:!0,ellipsis:!0},{disable:!0,title:_.formatMessage({id:"pages.device-manage.base-station.device.type",defaultMessage:"\u7C7B\u578B"}),dataIndex:"type",search:!1,valueType:"select",renderFormItem:function(n,t){var i=t.defaultRender;return i(n)},valueEnum:{Equipment:_.formatMessage({id:"pages.device-manage.label.device.equipment",defaultMessage:"\u88C5\u5907"}),Personnel:_.formatMessage({id:"pages.device-manage.label.device.personnel",defaultMessage:"\u4EBA\u5458"}),Vehicle:_.formatMessage({id:"pages.device-manage.label.device.vehicle",defaultMessage:"\u8F66\u8F86"}),Stuff:_.formatMessage({id:"pages.device-manage.label.device.stuff",defaultMessage:"\u6750\u6599"})}},{title:_.formatMessage({id:"pages.device-manage.base-station.device.time",defaultMessage:"\u52A0\u5165\u65F6\u95F4"}),key:"updateTime",dataIndex:"updateTime",valueType:"dateTime",sorter:!0,hideInSearch:!0},{disable:!0,title:_.formatMessage({id:"pages.device-manage.base-station.device.state",defaultMessage:"\u72B6\u6001"}),dataIndex:"status",filters:!0,onFilter:!0,ellipsis:!0,valueType:"select",search:!1,valueEnum:{Bound:_.formatMessage({id:"pages.device-manage.label.device.bound",defaultMessage:"\u7ED1\u5B9A"}),Unbound:_.formatMessage({id:"pages.device-manage.label.device.unbound",defaultMessage:"\u672A\u7ED1\u5B9A"})}},{title:_.formatMessage({id:"app.action",defaultMessage:"\u64CD\u4F5C"}),valueType:"option",key:"option",render:function(n,t,i,o){var a;return(0,d.jsxs)(P.ZP.Group,{children:[(0,d.jsx)(z,{record:t,refresh:o==null?void 0:o.reload}),(j==null?void 0:j[t.deviceId])&&(0,d.jsx)(P.ZP,{hidden:!t.online,type:"link",size:"small",children:(0,d.jsx)(f.Link,{to:"/position-manage/real-time-location".concat(h().stringify({deviceId:t.deviceId,mapId:t.mapId},{addQueryPrefix:!0})),children:_.formatMessage({id:"app.view",defaultMessage:"\u67E5\u770B\u5730\u56FE"})})}),(0,d.jsx)(E.v,{disabled:!t.deviceId,onClick:function(){return K({deviceId:t.deviceId}).then(function(){return o==null?void 0:o.reload()})},loading:y==null||(a=y[t.deviceId])===null||a===void 0?void 0:a.loading})]})}}];return(0,d.jsx)(c._z,{childrenContentStyle:{padding:20},children:(0,d.jsx)(m.Z,{options:{setting:!1},actionRef:M,columns:$,request:function(n){var t=n.current,i=n.pageSize,o=r()(n,U);return(0,s.$h)(v()({current:""+t,size:""+i},o)).then(function(a){return(0,g.LF)(a)})},toolBarRender:function(n){return[(0,d.jsx)(G,{refresh:n==null?void 0:n.reload},"add")]}})})}},84140:function(N,C,e){e.d(C,{$h:function(){return I},Ig:function(){return W},TB:function(){return $},Um:function(){return _},WN:function(){return Y},Zc:function(){return R},_s:function(){return G},aL:function(){return K},bD:function(){return z},s_:function(){return V},uz:function(){return A},x2:function(){return O}});var p=e(13769),v=e.n(p),T=e(15009),r=e.n(T),E=e(97857),s=e.n(E),g=e(99289),c=e.n(g),m=e(80854),f=["deviceId"],P=["deviceId"],S=["gateway"],h=["gateway"];function I(n,t){return l.apply(this,arguments)}function l(){return l=c()(r()().mark(function n(t,i){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/v1/beacon",s()({method:"GET",params:s()({current:"1",size:"10"},t)},i||{})));case 1:case"end":return a.stop()}},n)})),l.apply(this,arguments)}function O(n,t){return B.apply(this,arguments)}function B(){return B=c()(r()().mark(function n(t,i){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/v1/beacon",s()({method:"POST",headers:{"Content-Type":"application/json"},data:t},i||{})));case 1:case"end":return a.stop()}},n)})),B.apply(this,arguments)}function W(n,t,i){return D.apply(this,arguments)}function D(){return D=c()(r()().mark(function n(t,i,o){var a,x;return r()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return a=t.deviceId,x=v()(t,f),L.abrupt("return",(0,m.request)("/api/v1/beacon/".concat(a),s()({method:"PUT",headers:{"Content-Type":"application/json"},params:s()({},x),data:i},o||{})));case 2:case"end":return L.stop()}},n)})),D.apply(this,arguments)}function R(n,t){return F.apply(this,arguments)}function F(){return F=c()(r()().mark(function n(t,i){var o,a;return r()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return o=t.deviceId,a=v()(t,P),w.abrupt("return",(0,m.request)("/api/v1/beacon/".concat(o),s()({method:"DELETE",params:s()({},a)},i||{})));case 2:case"end":return w.stop()}},n)})),F.apply(this,arguments)}function A(n,t){return d.apply(this,arguments)}function d(){return d=c()(r()().mark(function n(t,i){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/v1/gateway",s()({method:"GET",params:s()({current:"1",size:"10"},t)},i||{})));case 1:case"end":return a.stop()}},n)})),d.apply(this,arguments)}function G(n,t){return Z.apply(this,arguments)}function Z(){return Z=c()(r()().mark(function n(t,i){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/v1/gateway",s()({method:"POST",headers:{"Content-Type":"application/json"},data:t},i||{})));case 1:case"end":return a.stop()}},n)})),Z.apply(this,arguments)}function z(n,t){return U.apply(this,arguments)}function U(){return U=c()(r()().mark(function n(t,i){var o,a;return r()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return o=t.gateway,a=v()(t,S),w.abrupt("return",(0,m.request)("/api/v1/gateway/".concat(o),s()({method:"DELETE",params:s()({},a)},i||{})));case 2:case"end":return w.stop()}},n)})),U.apply(this,arguments)}function Y(n,t,i){return M.apply(this,arguments)}function M(){return M=c()(r()().mark(function n(t,i,o){var a,x;return r()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return a=t.gateway,x=v()(t,h),L.abrupt("return",(0,m.request)("/api/v1/gateway".concat(a),s()({method:"PUT",headers:{"Content-Type":"application/json"},params:s()({},x),data:i},o||{})));case 2:case"end":return L.stop()}},n)})),M.apply(this,arguments)}function V(n,t){return j.apply(this,arguments)}function j(){return j=c()(r()().mark(function n(t,i){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/v1/location",s()({method:"GET",params:s()({},t)},i||{})));case 1:case"end":return a.stop()}},n)})),j.apply(this,arguments)}function _(n,t){return u.apply(this,arguments)}function u(){return u=c()(r()().mark(function n(t,i){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/v1/status/beacon",s()({method:"GET",params:s()({},t)},i||{})));case 1:case"end":return a.stop()}},n)})),u.apply(this,arguments)}function K(n,t){return y.apply(this,arguments)}function y(){return y=c()(r()().mark(function n(t,i){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/v1/status/gateway",s()({method:"GET",params:s()({},t)},i||{})));case 1:case"end":return a.stop()}},n)})),y.apply(this,arguments)}function $(n,t){return b.apply(this,arguments)}function b(){return b=c()(r()().mark(function n(t,i){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/v1/unbound/beacon",s()({method:"GET",params:s()({},t)},i||{})));case 1:case"end":return a.stop()}},n)})),b.apply(this,arguments)}}}]);