"use strict";(self.webpackChunkheyanai_navigation=self.webpackChunkheyanai_navigation||[]).push([[689],{51042:function(ee,F,a){var E=a(1413),M=a(67294),W=a(42110),s=a(98615),I=function(T,d){return M.createElement(s.Z,(0,E.Z)((0,E.Z)({},T),{},{ref:d,icon:W.Z}))};I.displayName="PlusOutlined",F.Z=M.forwardRef(I)},31199:function(ee,F,a){var E=a(1413),M=a(91),W=a(67294),s=a(86682),I=a(85893),r=["fieldProps","min","proFieldProps","max"],T=function(g,D){var w=g.fieldProps,b=g.min,U=g.proFieldProps,c=g.max,A=(0,M.Z)(g,r);return(0,I.jsx)(s.Z,(0,E.Z)({valueType:"digit",fieldProps:(0,E.Z)({min:b,max:c},w),ref:D,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:U},A))},d=W.forwardRef(T);F.Z=d},64317:function(ee,F,a){var E=a(1413),M=a(91),W=a(22270),s=a(67294),I=a(66758),r=a(86682),T=a(85893),d=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],f=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],g=s.forwardRef(function(c,A){var C=c.fieldProps,J=c.children,N=c.params,k=c.proFieldProps,G=c.mode,ae=c.valueEnum,V=c.request,te=c.showSearch,H=c.options,K=(0,M.Z)(c,d),X=(0,s.useContext)(I.Z);return(0,T.jsx)(r.Z,(0,E.Z)((0,E.Z)({valueEnum:(0,W.h)(ae),request:V,params:N,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,E.Z)({options:H,mode:G,showSearch:te,getPopupContainer:X.getPopupContainer},C),ref:A,proFieldProps:k},K),{},{children:J}))}),D=s.forwardRef(function(c,A){var C=c.fieldProps,J=c.children,N=c.params,k=c.proFieldProps,G=c.mode,ae=c.valueEnum,V=c.request,te=c.options,H=(0,M.Z)(c,f),K=(0,E.Z)({options:te,mode:G||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},C),X=(0,s.useContext)(I.Z);return(0,T.jsx)(r.Z,(0,E.Z)((0,E.Z)({valueEnum:(0,W.h)(ae),request:V,params:N,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,E.Z)({getPopupContainer:X.getPopupContainer},K),ref:A,proFieldProps:k},H),{},{children:J}))}),w=g,b=D,U=w;U.SearchSelect=b,U.displayName="ProFormComponent",F.Z=U},5966:function(ee,F,a){var E=a(1413),M=a(91),W=a(67294),s=a(86682),I=a(85893),r=["fieldProps","proFieldProps"],T=["fieldProps","proFieldProps"],d="text",f=function(b){var U=b.fieldProps,c=b.proFieldProps,A=(0,M.Z)(b,r);return(0,I.jsx)(s.Z,(0,E.Z)({valueType:d,fieldProps:U,filedConfig:{valueType:d},proFieldProps:c},A))},g=function(b){var U=b.fieldProps,c=b.proFieldProps,A=(0,M.Z)(b,T);return(0,I.jsx)(s.Z,(0,E.Z)({valueType:"password",fieldProps:U,proFieldProps:c,filedConfig:{valueType:d}},A))},D=f;D.Password=g,D.displayName="ProFormComponent",F.Z=D},89512:function(ee,F,a){a.d(F,{v:function(){return I}});var E=a(35312),M=a(86738),W=a(71577),s=a(85893);function I(r){var T,d,f,g,D=(0,E.useIntl)();return(0,s.jsx)(M.Z,{title:(T=r.title)!==null&&T!==void 0?T:D.formatMessage({id:"app.remove.confirm.title",defaultMessage:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417?"}),description:(d=r.title)!==null&&d!==void 0?d:D.formatMessage({id:"app.remove.confirm.description",defaultMessage:"\u5220\u9664\u6B64\u9879"}),okButtonProps:{loading:r.loading},getPopupContainer:r.getPopupContainer,onConfirm:function(){var b;return r==null||(b=r.onClick)===null||b===void 0?void 0:b.call(r)},children:!r.children&&(0,s.jsx)(W.ZP,{type:(f=r.type)!==null&&f!==void 0?f:"link",size:(g=r.size)!==null&&g!==void 0?g:"small",disabled:r.disabled,children:(0,s.jsx)(E.FormattedMessage,{id:"app.remove",defaultMessage:"\u5220\u9664"})})})}},23809:function(ee,F,a){a.d(F,{$:function(){return T}});var E=a(97857),M=a.n(E),W=a(64317),s=a(35312),I=a(67294),r=a(85893);function T(d){var f,g=(0,s.useIntl)(),D=(0,s.useModel)("mapModel"),w=D.run,b=D.options,U=D.loading,c=D.initialValue;return I.useEffect(function(){w()},[]),(0,r.jsx)(W.Z,M()(M()({},d),{},{rules:[{required:!0,message:g.formatMessage({id:"pages.device-manage.track.map.required",defaultMessage:"\u8BF7\u9009\u62E9\u5730\u56FE"})}],width:"lg",name:"mapId",style:{width:240},fieldProps:{loading:U},initialValue:(f=d.initialValue)!==null&&f!==void 0?f:c,options:b}))}},45622:function(ee,F,a){a.r(F),a.d(F,{default:function(){return be}});var E=a(97857),M=a.n(E),W=a(13769),s=a.n(W),I=a(5574),r=a.n(I),T=a(89512),d=a(84140),f=a(69851),g=a(35312),D=a(90930),w=a(9455),b=a(54689),U=a(62208),c=a(94184),A=a.n(c),C=a(67294),J=a(98787),N=a(45353),k=a(53124);function G(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}var ae=a(14747),V=a(98719),te=a(67968),H=a(45503);const K=(e,i,p)=>{const n=G(p);return{[`${e.componentCls}-${i}`]:{color:e[`color${p}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`]}}},X=e=>(0,V.Z)(e,(i,p)=>{let{textColor:n,lightBorderColor:l,lightColor:O,darkColor:x}=p;return{[`${e.componentCls}-${i}`]:{color:n,background:O,borderColor:l,"&-inverse":{color:e.colorTextLightSolid,background:x,borderColor:x},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),ue=e=>{const{paddingXXS:i,lineWidth:p,tagPaddingHorizontal:n,componentCls:l}=e,O=n-p,x=i-p;return{[l]:Object.assign(Object.assign({},(0,ae.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:O,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${l}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${l}-close-icon`]:{marginInlineStart:x,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${l}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${l}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:O}}),[`${l}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}};var ne=(0,te.Z)("Tag",e=>{const{fontSize:i,lineHeight:p,lineWidth:n,fontSizeIcon:l}=e,O=Math.round(i*p),x=e.fontSizeSM,R=O-n*2,v=e.colorFillQuaternary,_=e.colorText,h=(0,H.TS)(e,{tagFontSize:x,tagLineHeight:R,tagDefaultBg:v,tagDefaultColor:_,tagIconSize:l-2*n,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[ue(h),X(h),K(h,"success","Success"),K(h,"processing","Info"),K(h,"error","Error"),K(h,"warning","Warning")]}),de=function(e,i){var p={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&i.indexOf(n)<0&&(p[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)i.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(p[n[l]]=e[n[l]]);return p},ce=e=>{const{prefixCls:i,className:p,checked:n,onChange:l,onClick:O}=e,x=de(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:R}=C.useContext(k.E_),v=y=>{l==null||l(!n),O==null||O(y)},_=R("tag",i),[h,q]=ne(_),$=A()(_,{[`${_}-checkable`]:!0,[`${_}-checkable-checked`]:n},p,q);return h(C.createElement("span",Object.assign({},x,{className:$,onClick:v})))},oe=function(e,i){var p={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&i.indexOf(n)<0&&(p[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)i.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(p[n[l]]=e[n[l]]);return p};const me=(e,i)=>{const{prefixCls:p,className:n,rootClassName:l,style:O,children:x,icon:R,color:v,onClose:_,closeIcon:h,closable:q=!1,bordered:$=!0}=e,y=oe(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:S,direction:re}=C.useContext(k.E_),[Z,le]=C.useState(!0);C.useEffect(()=>{"visible"in y&&le(y.visible)},[y.visible]);const ge=(0,J.o2)(v)||(0,J.yT)(v),xe=Object.assign({backgroundColor:v&&!ge?v:void 0},O),z=S("tag",p),[Oe,je]=ne(z),Te=A()(z,{[`${z}-${v}`]:ge,[`${z}-has-color`]:v&&!ge,[`${z}-hidden`]:!Z,[`${z}-rtl`]:re==="rtl",[`${z}-borderless`]:!$},n,l,je),ve=fe=>{fe.stopPropagation(),_==null||_(fe),!fe.defaultPrevented&&le(!1)},De=C.useMemo(()=>q?h?C.createElement("span",{className:`${z}-close-icon`,onClick:ve},h):C.createElement(U.Z,{className:`${z}-close-icon`,onClick:ve}):null,[q,h,z,ve]),Ie=typeof y.onClick=="function"||x&&x.type==="a",he=R||null,Se=he?C.createElement(C.Fragment,null,he,C.createElement("span",null,x)):x,Pe=C.createElement("span",Object.assign({},y,{ref:i,className:Te,style:xe}),Se,De);return Oe(Ie?C.createElement(N.Z,null,Pe):Pe)},se=C.forwardRef(me);se.CheckableTag=ce;var pe=se,Y=a(71577),u=a(80129),o=a.n(u),P=a(51042),j=a(37476),t=a(12029),Q=a(23809),B=a(5966),L=a(31199),m=a(85893);function _e(e){var i,p,n,l,O,x,R,v,_,h=(0,g.useIntl)();return(0,m.jsxs)(C.Fragment,{children:[(0,m.jsx)(B.Z,{width:"lg",name:"name",initialValue:(i=e.record)===null||i===void 0?void 0:i.name,label:h.formatMessage({id:"pages.device-manage.label.device.name",defaultMessage:"\u8BBE\u7F6E\u540D\u79F0"})}),(0,m.jsx)(B.Z,{width:"lg",name:"gateway",fieldProps:{disabled:e.isEdit},initialValue:(p=e.record)===null||p===void 0?void 0:p.gateway,label:h.formatMessage({id:"pages.device-manage.label.device.deviceId",defaultMessage:"\u8BBE\u5907ID"})}),(0,m.jsx)(B.Z,{width:"lg",name:"productName",initialValue:(n=e.record)===null||n===void 0?void 0:n.productName,label:h.formatMessage({id:"pages.device-manage.label.device.productName",defaultMessage:"\u4EA7\u54C1\u540D\u79F0"})}),(0,m.jsx)(L.Z,{width:"lg",name:"setX",max:9999,initialValue:(l=e.record)===null||l===void 0?void 0:l.setX,fieldProps:{precision:2},label:h.formatMessage({id:"pages.device-manage.base-station.device.setX",defaultMessage:"\u57FA\u7AD9X\u5750\u6807"})}),(0,m.jsx)(L.Z,{width:"lg",name:"setY",max:9999,initialValue:(O=e.record)===null||O===void 0?void 0:O.setY,fieldProps:{precision:2},label:h.formatMessage({id:"pages.device-manage.base-station.device.setY",defaultMessage:"\u57FA\u7AD9Y\u5750\u6807"})}),(0,m.jsx)(L.Z,{width:"lg",name:"setZ",max:9999,initialValue:(x=e.record)===null||x===void 0?void 0:x.setZ,fieldProps:{precision:2},label:h.formatMessage({id:"pages.device-manage.base-station.device.setZ",defaultMessage:"\u57FA\u7AD9Z\u5750\u6807"})}),(0,m.jsx)(L.Z,{width:"lg",name:"angle",max:9999,initialValue:(R=e.record)===null||R===void 0?void 0:R.angle,fieldProps:{precision:2},label:h.formatMessage({id:"pages.device-manage.base-station.device.angle",defaultMessage:"\u57FA\u7AD9\u89D2\u5EA6"})}),(0,m.jsx)(B.Z,{width:"lg",name:"groupId",initialValue:(v=e.record)===null||v===void 0?void 0:v.groupId,label:h.formatMessage({id:"pages.device-manage.base-station.device.group",defaultMessage:"\u57FA\u7AD9\u5206\u7EC4"})}),(0,m.jsx)(Q.$,{label:h.formatMessage({id:"pages.device-manage.label.device.map",defaultMessage:"\u5730\u56FE"}),initialValue:(_=e.record)===null||_===void 0?void 0:_.mapId})]})}function ye(e){var i=t.Z.useForm(),p=r()(i,1),n=p[0],l=(0,g.useIntl)(),O=(0,g.useRequest)(d._s,{manual:!0,onSuccess:function(v){if(v){var _;b.Z.success({message:l.formatMessage({id:"app.add.success",defaultMessage:"\u65B0\u5EFA\u6210\u529F"})}),(_=e.refresh)===null||_===void 0||_.call(e)}}}),x=O.run;return(0,m.jsx)(j.Y,{title:(0,m.jsx)(g.FormattedMessage,{id:"pages.device-manage.base-station.device.add",defaultMessage:"\u6DFB\u52A0\u57FA\u7AD9"}),layout:"horizontal",form:n,labelCol:{xs:6},wrapperCol:{xs:16},onFinish:function(v){var _=r()(v.mapId,2),h=_[1];return x(M()(M()({},v),{},{mapId:h}))},modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")}},trigger:(0,m.jsxs)(Y.ZP,{type:"primary",children:[(0,m.jsx)(P.Z,{}),l.formatMessage({id:"app.action.add",defaultMessage:"\u65B0\u5EFA"})]}),children:(0,m.jsx)(_e,{isEdit:!1})})}var Ee=["mapId","name","groupId"];function Me(e){var i=t.Z.useForm(),p=r()(i,1),n=p[0],l=(0,g.useIntl)(),O=(0,g.useRequest)(d.WN,{manual:!0,onSuccess:function(v){if(v){var _;b.Z.success({message:l.formatMessage({id:"app.add.success",defaultMessage:"\u65B0\u5EFA\u6210\u529F"})}),(_=e.refresh)===null||_===void 0||_.call(e)}}}),x=O.run;return(0,m.jsx)(j.Y,{title:(0,m.jsx)(g.FormattedMessage,{id:"pages.device-manage.base-station.device.edit",defaultMessage:"\u7F16\u8F91\u57FA\u7AD9"}),layout:"horizontal",form:n,labelCol:{xs:6},wrapperCol:{xs:16},onFinish:function(v){var _=v.mapId,h=v.name,q=v.groupId,$=s()(v,Ee);return x({gateway:e.record.gateway},M()({mapId:_,name:h,group:q},$))},modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")}},trigger:(0,m.jsx)(Y.ZP,{type:"link",size:"small",children:l.formatMessage({id:"app.action.edit",defaultMessage:"\u7F16\u8F91"})}),children:(0,m.jsx)(_e,{record:e.record,isEdit:!0})})}var Ce=["current","pageSize"];function be(){var e=C.useRef(),i=(0,g.useIntl)(),p=C.useState([]),n=r()(p,2),l=n[0],O=n[1],x=(0,g.useRequest)(d.bD,{manual:!0,onSuccess:function(y){y&&b.Z.success({message:i.formatMessage({id:"app.remove.success",defaultMessage:"\u5220\u9664\u6210\u529F"})})}}),R=x.run,v=(0,g.useRequest)(function($){return Promise.resolve($)},{manual:!0,onSuccess:function(y){y&&b.Z.success({message:i.formatMessage({id:"app.remove.success",defaultMessage:"\u5220\u9664\u6210\u529F"})})}}),_=v.run,h=v.loading,q=[{title:i.formatMessage({id:"pages.device-manage.base-station.device.code",defaultMessage:"\u7F16\u53F7"}),dataIndex:"gateway",copyable:!0,ellipsis:!0,formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}},{title:i.formatMessage({id:"pages.device-manage.base-station.device.name",defaultMessage:"\u540D\u79F0"}),dataIndex:"name",copyable:!0,ellipsis:!0,formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}},{disable:!0,title:i.formatMessage({id:"pages.device-manage.base-station.device.type",defaultMessage:"\u7C7B\u578B"}),dataIndex:"type",search:!1,renderFormItem:function(y,S){var re=S.defaultRender;return re(y)},render:function(y,S){return(0,m.jsx)(pe,{children:S.type})}},{title:i.formatMessage({id:"pages.device-manage.base-station.device.time",defaultMessage:"\u52A0\u5165\u65F6\u95F4"}),key:"showTime",dataIndex:"updateTime",valueType:"dateTimeRange",sorter:!0,hideInSearch:!0,render:function(y,S){return(0,f.ZN)(S.updateTime)}},{disable:!0,title:i.formatMessage({id:"pages.device-manage.base-station.device.state",defaultMessage:"\u72B6\u6001"}),dataIndex:"status",filters:!0,onFilter:!0,ellipsis:!0,search:!1,valueType:"select",valueEnum:{Online:i.formatMessage({id:"pages.device-manage.base-station.device.status.online",defaultMessage:"\u5728\u7EBF"}),Offline:i.formatMessage({id:"pages.device-manage.base-station.device.status.offline",defaultMessage:"\u79BB\u7EBF"})}},{title:i.formatMessage({id:"app.action",defaultMessage:"\u64CD\u4F5C"}),valueType:"option",key:"option",render:function(y,S,re,Z){return(0,m.jsxs)(Y.ZP.Group,{children:[(0,m.jsx)(Me,{record:S,refresh:Z==null?void 0:Z.reload}),S.status==="Online"&&(0,m.jsx)(Y.ZP,{type:"link",size:"small",children:(0,m.jsx)(g.Link,{to:"/position-manage/real-time-location".concat(o().stringify({gateway:S.gateway,mapId:S.mapId},{addQueryPrefix:!0})),children:i.formatMessage({id:"app.view",defaultMessage:"\u67E5\u770B"})})}),(0,m.jsx)(T.v,{disabled:!S.gateway,onClick:function(){return R({gateway:S.gateway}).then(function(){return Z==null?void 0:Z.reload()})},title:i.formatMessage({id:"pages.searchTable.batchDeletion",defaultMessage:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417?"})})]})}}];return(0,m.jsx)(D._z,{childrenContentStyle:{padding:20},children:(0,m.jsx)(w.Z,{options:{setting:!1},actionRef:e,columns:q,request:function(y){var S=y.current,re=y.pageSize,Z=s()(y,Ce);return(0,d.uz)(M()({current:""+S,size:""+re},Z)).then(function(le){return(0,f.LF)(le)})},tableAlertRender:function(y){var S=y.selectedRowKeys;return(0,m.jsx)(T.v,{onClick:function(){return _({gateways:S.map(function(Z){return"".concat(Z)})}).then(function(){var Z;return(Z=e.current)===null||Z===void 0?void 0:Z.reload()})},loading:h,children:(0,m.jsx)(Y.ZP,{type:"link",children:(0,m.jsx)(g.FormattedMessage,{id:"pages.searchTable.batchDeletion",defaultMessage:"\u6279\u91CF\u5220\u9664"})})})},toolBarRender:function(y){return[(0,m.jsx)(ye,{refresh:y==null?void 0:y.reload},"add")]}})})}},84140:function(ee,F,a){a.d(F,{$h:function(){return U},Ig:function(){return J},TB:function(){return pe},Um:function(){return ce},WN:function(){return ue},Zc:function(){return k},_s:function(){return te},aL:function(){return me},bD:function(){return K},s_:function(){return de},uz:function(){return ae},x2:function(){return A}});var E=a(13769),M=a.n(E),W=a(15009),s=a.n(W),I=a(97857),r=a.n(I),T=a(99289),d=a.n(T),f=a(35312),g=["deviceId"],D=["deviceId"],w=["gateway"],b=["gateway"];function U(u,o){return c.apply(this,arguments)}function c(){return c=d()(s()().mark(function u(o,P){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,f.request)("/api/v1/beacon",r()({method:"GET",params:r()({current:"1",size:"10"},o)},P||{})));case 1:case"end":return t.stop()}},u)})),c.apply(this,arguments)}function A(u,o){return C.apply(this,arguments)}function C(){return C=d()(s()().mark(function u(o,P){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,f.request)("/api/v1/beacon",r()({method:"POST",headers:{"Content-Type":"application/json"},data:o},P||{})));case 1:case"end":return t.stop()}},u)})),C.apply(this,arguments)}function J(u,o,P){return N.apply(this,arguments)}function N(){return N=d()(s()().mark(function u(o,P,j){var t,Q;return s()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return t=o.deviceId,Q=M()(o,g),L.abrupt("return",(0,f.request)("/api/v1/beacon/".concat(t),r()({method:"PUT",headers:{"Content-Type":"application/json"},params:r()({},Q),data:P},j||{})));case 2:case"end":return L.stop()}},u)})),N.apply(this,arguments)}function k(u,o){return G.apply(this,arguments)}function G(){return G=d()(s()().mark(function u(o,P){var j,t;return s()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return j=o.deviceId,t=M()(o,D),B.abrupt("return",(0,f.request)("/api/v1/beacon/".concat(j),r()({method:"DELETE",params:r()({},t)},P||{})));case 2:case"end":return B.stop()}},u)})),G.apply(this,arguments)}function ae(u,o){return V.apply(this,arguments)}function V(){return V=d()(s()().mark(function u(o,P){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,f.request)("/api/v1/gateway",r()({method:"GET",params:r()({current:"1",size:"10"},o)},P||{})));case 1:case"end":return t.stop()}},u)})),V.apply(this,arguments)}function te(u,o){return H.apply(this,arguments)}function H(){return H=d()(s()().mark(function u(o,P){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,f.request)("/api/v1/gateway",r()({method:"POST",headers:{"Content-Type":"application/json"},data:o},P||{})));case 1:case"end":return t.stop()}},u)})),H.apply(this,arguments)}function K(u,o){return X.apply(this,arguments)}function X(){return X=d()(s()().mark(function u(o,P){var j,t;return s()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return j=o.gateway,t=M()(o,w),B.abrupt("return",(0,f.request)("/api/v1/gateway/".concat(j),r()({method:"DELETE",params:r()({},t)},P||{})));case 2:case"end":return B.stop()}},u)})),X.apply(this,arguments)}function ue(u,o,P){return ne.apply(this,arguments)}function ne(){return ne=d()(s()().mark(function u(o,P,j){var t,Q;return s()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return t=o.gateway,Q=M()(o,b),L.abrupt("return",(0,f.request)("/api/v1/gateway".concat(t),r()({method:"PUT",headers:{"Content-Type":"application/json"},params:r()({},Q),data:P},j||{})));case 2:case"end":return L.stop()}},u)})),ne.apply(this,arguments)}function de(u,o){return ie.apply(this,arguments)}function ie(){return ie=d()(s()().mark(function u(o,P){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,f.request)("/api/v1/location",r()({method:"GET",params:r()({},o)},P||{})));case 1:case"end":return t.stop()}},u)})),ie.apply(this,arguments)}function ce(u,o){return oe.apply(this,arguments)}function oe(){return oe=d()(s()().mark(function u(o,P){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,f.request)("/api/v1/status/beacon",r()({method:"GET",params:r()({},o)},P||{})));case 1:case"end":return t.stop()}},u)})),oe.apply(this,arguments)}function me(u,o){return se.apply(this,arguments)}function se(){return se=d()(s()().mark(function u(o,P){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,f.request)("/api/v1/status/gateway",r()({method:"GET",params:r()({},o)},P||{})));case 1:case"end":return t.stop()}},u)})),se.apply(this,arguments)}function pe(u,o){return Y.apply(this,arguments)}function Y(){return Y=d()(s()().mark(function u(o,P){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,f.request)("/api/v1/unbound/beacon",r()({method:"GET",params:r()({},o)},P||{})));case 1:case"end":return t.stop()}},u)})),Y.apply(this,arguments)}}}]);
