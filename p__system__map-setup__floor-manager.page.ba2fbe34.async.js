"use strict";(self.webpackChunkheyanai_navigation=self.webpackChunkheyanai_navigation||[]).push([[114],{51042:function(V,I,e){var _=e(1413),g=e(67294),h=e(42110),E=e(98615),O=function(c,f){return g.createElement(E.Z,(0,_.Z)((0,_.Z)({},c),{},{ref:f,icon:h.Z}))};O.displayName="PlusOutlined",I.Z=g.forwardRef(O)},31199:function(V,I,e){var _=e(1413),g=e(91),h=e(67294),E=e(97556),O=e(85893),s=["fieldProps","min","proFieldProps","max"],c=function(o,y){var R=o.fieldProps,j=o.min,L=o.proFieldProps,F=o.max,b=(0,g.Z)(o,s);return(0,O.jsx)(E.Z,(0,_.Z)({valueType:"digit",fieldProps:(0,_.Z)({min:j,max:F},R),ref:y,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:L},b))},f=h.forwardRef(c);I.Z=f},88923:function(V,I,e){e.d(I,{h:function(){return F}});var _=e(97857),g=e.n(_),h=e(15009),E=e.n(h),O=e(99289),s=e.n(O),c=e(59061),f=e(80854),A=e(22247),o=e(93717),y=e(96486),R=e.n(y),j=e(491),L=e(85893);function F(b){var S=(0,f.useIntl)();return(0,L.jsx)(c.Z,g()(g()({accept:"image/png",max:1,transform:function(a){var Z,x,U={};return(0,y.set)(U,(Z=b.name)!==null&&Z!==void 0?Z:"picture",(x=(0,y.first)(a))===null||x===void 0?void 0:x.response),U}},b),{},{fieldProps:{listType:"picture-card",onPreview:function(a){A.Z.warning({content:(0,L.jsx)(o.Z,{width:600,src:a.thumbUrl}),width:660-12,icon:" "})},customRequest:function(){var B=s()(E()().mark(function Z(x){var U,K,$,w;return E()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return U=x.file,K=new FormData,K.append("file",U),v.prev=3,v.next=6,(0,j.cT)(K);case 6:w=v.sent,console.log(w),($=x.onSuccess)===null||$===void 0||$.call(x,w.data.url),v.next=14;break;case 11:v.prev=11,v.t0=v.catch(3),console.log(v.t0);case 14:case"end":return v.stop()}},Z,null,[[3,11]])}));function a(Z){return B.apply(this,arguments)}return a}()}}))}},89512:function(V,I,e){e.d(I,{v:function(){return O}});var _=e(80854),g=e(86738),h=e(71577),E=e(85893);function O(s){var c,f,A,o,y=(0,_.useIntl)();return(0,E.jsx)(g.Z,{title:(c=s.title)!==null&&c!==void 0?c:y.formatMessage({id:"app.remove.confirm.title",defaultMessage:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417?"}),description:(f=s.title)!==null&&f!==void 0?f:y.formatMessage({id:"app.remove.confirm.description",defaultMessage:"\u5220\u9664\u6B64\u9879"}),okButtonProps:{loading:s.loading},getPopupContainer:s.getPopupContainer,onConfirm:function(){var j;return s==null||(j=s.onClick)===null||j===void 0?void 0:j.call(s)},children:!s.children&&(0,E.jsx)(h.ZP,{type:(A=s.type)!==null&&A!==void 0?A:"link",size:(o=s.size)!==null&&o!==void 0?o:"small",disabled:s.disabled,children:(0,E.jsx)(_.FormattedMessage,{id:"app.remove",defaultMessage:"\u5220\u9664"})})})}},69688:function(V,I,e){e.r(I),e.d(I,{default:function(){return q}});var _=e(89512),g=e(491),h=e(69851),E=e(90930),O=e(9455),s=e(80854),c=e(54689),f=e(71577),A=e(97857),o=e.n(A),y=e(5574),R=e.n(y),j=e(88923),L=e(51042),F=e(37476),b=e(5966),S=e(31199),B=e(12029),a=e(85893);function Z(r){var t=(0,s.useIntl)(),d=r.buildingId,n=B.Z.useForm(),p=R()(n,1),l=p[0],C=(0,s.useModel)("mapModel"),P=C.run;return(0,a.jsxs)(F.Y,{title:(0,a.jsx)(s.FormattedMessage,{id:"pages.system.map-setup.map.add",defaultMessage:"\u6DFB\u52A0\u5730\u56FE"}),layout:"horizontal",form:l,labelCol:{xs:6},wrapperCol:{xs:16},disabled:!d,modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")}},onFinish:function(m){return(0,g.JY)(o()(o()({},m),{},{buildingId:d})).then(function(M){var u;return(u=r.refresh)===null||u===void 0||u.call(r),P(!0),c.Z.success({message:t.formatMessage({id:"app.add.success",defaultMessage:"\u65B0\u5EFA\u6210\u529F"})}),M.code===h.OK})},trigger:(0,a.jsxs)(f.ZP,{type:"primary",children:[(0,a.jsx)(L.Z,{}),t.formatMessage({id:"app.add",defaultMessage:"\u65B0\u5EFA"})]}),children:[(0,a.jsx)(b.Z,{width:"lg",name:"name",label:t.formatMessage({id:"pages.system.map-setup.map.name",defaultMessage:"\u5730\u56FE\u540D\u79F0"}),rules:[{required:!0,message:t.formatMessage({id:"pages.system.map-setup.map.name.required.failure",defaultMessage:"\u5EFA\u7B51\u540D\u5FC5\u586B"})}]}),(0,a.jsx)(b.Z,{width:"lg",name:"floor",label:t.formatMessage({id:"pages.system.map-setup.map.floor",defaultMessage:"\u697C\u5C42"}),rules:[{required:!0,message:t.formatMessage({id:"pages.system.map-setup.map.floor.required.failure",defaultMessage:"\u697C\u5C42\u5FC5\u586B"})}]}),(0,a.jsx)(S.Z,{width:"lg",name:"width",label:t.formatMessage({id:"pages.system.map-setup.map.width",defaultMessage:"\u5B9E\u9645\u5BBD\u5EA6"}),addonAfter:t.formatMessage({id:"app.unit.m",defaultMessage:"\u7C73"}),rules:[{required:!0,message:t.formatMessage({id:"pages.system.map-setup.map.width.required.failure",defaultMessage:"\u5B9E\u9645\u5BBD\u5EA6\u5FC5\u586B"})}]}),(0,a.jsx)(S.Z,{width:"lg",name:"length",addonAfter:t.formatMessage({id:"app.unit.m",defaultMessage:"\u7C73"}),label:t.formatMessage({id:"pages.system.map-setup.map.length",defaultMessage:"\u5B9E\u9645\u957F\u5EA6"}),rules:[{required:!0,message:t.formatMessage({id:"pages.system.map-setup.map.length.required.failure",defaultMessage:"\u5B9E\u9645\u957F\u5EA6\u5FC5\u586B"})}]}),(0,a.jsx)(j.h,{width:"lg",name:"picture",label:t.formatMessage({id:"pages.system.map-setup.building.picture",defaultMessage:"\u793A\u610F\u56FE"}),rules:[{required:!0,message:t.formatMessage({id:"pages.system.map-setup.building.address.required.failure",defaultMessage:"\u793A\u610F\u56FE\u5FC5\u586B"})}]})]})}function x(r){var t,d,n=(0,s.useIntl)(),p=r.record,l=p.buildingId,C=p.mapId,P=B.Z.useForm(),i=R()(P,1),m=i[0],M=(0,s.useModel)("mapModel"),u=M.run;return(0,a.jsxs)(F.Y,{title:(0,a.jsx)(s.FormattedMessage,{id:"pages.system.map-setup.map.edit",defaultMessage:"\u6DFB\u52A0\u5730\u56FE"}),layout:"horizontal",form:m,labelCol:{xs:6},wrapperCol:{xs:16},disabled:!l,modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")}},onFinish:function(z){return(0,g.sA)({mapId:C},o()(o()({},z),{},{buildingId:l})).then(function(W){if(W.code===h.OK){var G;(G=r.refresh)===null||G===void 0||G.call(r),u(!0),c.Z.success({message:n.formatMessage({id:"app.edit.success",defaultMessage:"\u66F4\u65B0\u6210\u529F"})})}return W.code===h.OK})},trigger:(0,a.jsx)(f.ZP,{type:"link",size:"small",children:n.formatMessage({id:"app.edit",defaultMessage:"\u7F16\u8F91"})}),children:[(0,a.jsx)(b.Z,{width:"lg",name:"name",initialValue:r.record.name,label:n.formatMessage({id:"pages.system.map-setup.map.name",defaultMessage:"\u5730\u56FE\u540D\u79F0"}),rules:[{required:!0,message:n.formatMessage({id:"pages.system.map-setup.map.name.required.failure",defaultMessage:"\u5730\u56FE\u540D\u5FC5\u586B"})}]}),(0,a.jsx)(b.Z,{width:"lg",name:"floor",initialValue:r.record.floor,label:n.formatMessage({id:"pages.system.map-setup.map.floor",defaultMessage:"\u697C\u5C42"}),rules:[{required:!0,message:n.formatMessage({id:"pages.system.map-setup.map.floor.required.failure",defaultMessage:"\u697C\u5C42\u5FC5\u586B"})}]}),(0,a.jsx)(S.Z,{width:"lg",name:"width",initialValue:r.record.width,label:n.formatMessage({id:"pages.system.map-setup.map.width",defaultMessage:"\u5B9E\u9645\u5BBD\u5EA6"}),addonAfter:n.formatMessage({id:"app.unit.m",defaultMessage:"\u7C73"}),rules:[{required:!0,message:n.formatMessage({id:"pages.system.map-setup.map.width.required.failure",defaultMessage:"\u5B9E\u9645\u5BBD\u5EA6\u5FC5\u586B"})}]}),(0,a.jsx)(S.Z,{width:"lg",name:"length",initialValue:r.record.length,label:n.formatMessage({id:"pages.system.map-setup.map.length",defaultMessage:"\u5B9E\u9645\u957F\u5EA6"}),addonAfter:n.formatMessage({id:"app.unit.m",defaultMessage:"\u7C73"}),rules:[{required:!0,message:n.formatMessage({id:"pages.system.map-setup.map.length.required.failure",defaultMessage:"\u5B9E\u9645\u957F\u5EA6\u5FC5\u586B"})}]}),(0,a.jsx)(j.h,{width:"lg",name:"picture",initialValue:[{uid:Date.now()+"",response:(t=r.record)===null||t===void 0?void 0:t.picture,thumbUrl:(d=r.record)===null||d===void 0?void 0:d.picture}],label:n.formatMessage({id:"pages.system.map-setup.building.picture",defaultMessage:"\u793A\u610F\u56FE"}),rules:[{required:!0,message:n.formatMessage({id:"pages.system.map-setup.building.picture.required.failure",defaultMessage:"\u793A\u610F\u56FE\u5FC5\u586B"})}]})]})}var U=e(19632),K=e.n(U),$=e(87888),w=e(32240),J=e(45968),v=e(30692),Y=e(63060),N=e(4393),T=e(67294),H=e(67058);function Q(r){var t,d=R()(r.rect,2),n=d[0],p=d[1],l=T.useState(),C=R()(l,2),P=C[0],i=C[1],m=T.useRef(null),M=T.useRef(),u=T.useRef();return T.useEffect(function(){var D;M.current=new Y.Scene({id:m.current,map:new Y.Mapbox({style:"blank",center:[0,0],pitch:0,zoom:20,minZoom:18})}),M.current.addImage("stationIcon",J.Z),M.current.addImage("arrow",$.Z),M.current.addImage("personImage",w.Z),M.current.addImage("warning",v.Z),(D=M.current)===null||D===void 0||D.on("loaded",function(){return i(!0)})},[]),T.useEffect(function(){if(r.map&&P&&p&&n){var D=(0,Y.metersToLngLat)([n*H.bA,p*H.bA]);if(u.current)u.current.setData(r.map,{parser:{type:"image",extent:[0,0].concat(K()(D))}}),u.current.setIndex(0);else{var z,W;u.current=new Y.ImageLayer({zIndex:0}),u.current.source(r.map,{parser:{type:"image",extent:[0,0].concat(K()(D))}}),(z=M.current)===null||z===void 0||z.setCenter([D[0]/2,D[1]/2]),(W=M.current)===null||W===void 0||W.addLayer(u.current)}}},[r.map,P,p,n]),(0,a.jsx)(T.Fragment,{children:(0,a.jsx)(N.Z,{bodyStyle:{padding:0},children:(0,a.jsx)("div",{id:"map",ref:m,style:{minHeight:(t=r.height)!==null&&t!==void 0?t:600}})})})}function X(r){var t=(0,s.useIntl)(),d=(0,s.useModel)("mapModel"),n=d.run,p=d.data;T.useEffect(function(){n()},[]);var l=p==null?void 0:p.find(function(C){return C.mapId===r.record.mapId});return(0,a.jsx)(F.Y,{title:t.formatMessage({id:"pages.system.map-setup.map.view",defaultMessage:"\u67E5\u770B\u5730\u56FE"}),submitter:!1,trigger:(0,a.jsx)(f.ZP,{type:"link",size:"small",children:(0,a.jsx)(s.FormattedMessage,{id:"app.view",defaultMessage:"\u9884\u89C8"})}),children:(0,a.jsx)(Q,{map:l==null?void 0:l.picture,rect:[l==null?void 0:l.length,l==null?void 0:l.width]})})}function q(){var r=(0,s.useMatch)("/system/map-setup/floor-manager.page/:buildingId"),t=r==null?void 0:r.params.buildingId,d=(0,s.useIntl)(),n=(0,s.useRequest)(g.yJ,{manual:!0,fetchKey:function(i){return i.mapId},onSuccess:function(i){i&&c.Z.success({message:d.formatMessage({id:"app.remove.success",defaultMessage:"\u5220\u9664\u6210\u529F"})})}}),p=n.run,l=n.loading,C=[{title:d.formatMessage({id:"pages.system.map-setup.map.name",defaultMessage:"\u5730\u56FE\u540D\u79F0"}),dataIndex:"name"},{title:d.formatMessage({id:"pages.system.map-setup.map.floor",defaultMessage:"\u697C\u5C42"}),dataIndex:"floor"},{title:d.formatMessage({id:"pages.system.map-setup.map.id",defaultMessage:"\u552F\u4E00\u6807\u8BC6"}),search:!1,dataIndex:"mapId"},{title:d.formatMessage({id:"app.action",defaultMessage:"\u64CD\u4F5C"}),valueType:"option",key:"option",render:function(i,m,M,u){return(0,a.jsxs)(f.ZP.Group,{children:[(0,a.jsx)(x,{disabled:!m.mapId,record:m}),(0,a.jsx)(X,{record:m}),(0,a.jsx)(_.v,{disabled:!m.mapId,loading:l,onClick:function(){return p({mapId:m.mapId}).then(function(){u==null||u.reload()})}})]})}}];return(0,a.jsx)(E._z,{children:(0,a.jsx)(O.Z,{options:{setting:!1},pagination:!1,columns:C,toolBarRender:function(i){return[(0,a.jsx)(Z,{buildingId:t,refresh:i==null?void 0:i.reload},"add")]},request:function(i){return(0,g.pl)({buildingId:t,name:i.name}).then(function(m){return{data:m.data,success:m.code===h.OK}})}})})}}}]);