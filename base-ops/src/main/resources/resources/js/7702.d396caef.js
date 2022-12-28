"use strict";(self["webpackChunkweb_ui"]=self["webpackChunkweb_ui"]||[]).push([[7702],{39518:function(e,t,n){n.d(t,{$4:function(){return I},Ac:function(){return c},BL:function(){return v},C4:function(){return D},DF:function(){return b},GD:function(){return y},IW:function(){return _},K4:function(){return B},Kf:function(){return U},LR:function(){return l},Lf:function(){return s},Ox:function(){return $},PK:function(){return i},R1:function(){return A},Sv:function(){return z},T2:function(){return g},T4:function(){return P},TL:function(){return k},TY:function(){return j},Uw:function(){return V},We:function(){return F},YQ:function(){return w},Ye:function(){return d},ZA:function(){return K},_V:function(){return f},c0:function(){return a},gi:function(){return E},h:function(){return x},jQ:function(){return O},jV:function(){return M},nT:function(){return C},sT:function(){return N},tA:function(){return u},ur:function(){return S},w3:function(){return m},xj:function(){return p},y6:function(){return L},zs:function(){return T},zx:function(){return h}});var o=n(9669),r=n.n(o);const s=()=>r().get("encryption/getKey"),l=e=>r().post("opsCluster/download",e||{}),a=e=>r().get(`opsCluster/env/${e}`),c=e=>r().post("opsCluster/install",e),u=e=>r().post("opsCluster/import",e),i=e=>r().post("opsCluster/quickInstall",e),p=e=>r().get("opsCluster/check",{params:e}),m=e=>r().post("opsCluster/uninstall",e),g=e=>r().get("opsCluster/hasName",{params:e}),f=()=>r().get("opsCluster/listCluster"),d=e=>r().post("opsCluster/ssh",e),C=e=>r().get("opsCluster/monitor",{params:e}),v=e=>r().post("opsCluster/start",e),N=e=>r().post("opsCluster/stop",e),S=e=>r().post("opsCluster/restart",e),k=e=>r().get("opsCluster/listHost",{params:e}),x=e=>r().get(e?`opsCluster/listInstallPackage?path=${e}`:"opsCluster/listInstallPackage"),h=()=>r().get("host/listAll"),w=e=>r().get(`hostUser/listAllWithoutRoot/${e}`),I=()=>r().get("az/listAll"),b=e=>r().get("opsCluster/logPath",{params:e}),E=e=>r().get("opsCluster/ls",{params:e}),V=e=>r().get("opsCluster/slowSql",{params:e}),y=e=>r().get("opsCluster/auditLog",{params:e}),z=e=>r().get("opsCluster/download",{params:e}),L=e=>r().get("wdr/list",{params:e}),A=e=>r().post("wdr/generate",e),T=e=>r()["delete"]("wdr/del/"+e),$=e=>r().get("wdr/createSnapshot",{params:e}),B=e=>r().get("wdr/downloadWdr",{params:e}),D=e=>r().get("wdr/listSnapshot",{params:e}),_=e=>r().post("backup/backup",e),P=e=>r().get("backup/page",{params:e}),U=(e,t)=>r().post("backup/recover/"+e,t),M=e=>r()["delete"]("backup/del/"+e),F=e=>r().get("installPackageManager/page",{params:e}),j=e=>r()["delete"]("installPackageManager/"+e),K=e=>r().post("installPackageManager/save",e),O=(e,t)=>r().put(`installPackageManager/update/${e}`,t)},83744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n}},17702:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});n(57658);var o=n(70821),r=n(39518),s=n(40225),l=n(57330);const a=e=>((0,o.pushScopeId)("data-v-3392051b"),e=e(),(0,o.popScopeId)(),e),c={class:"exe-install-c"},u={key:0,class:"flex-col full-w full-h"},i={class:"mb-xlg"},p={class:"install-connect-c flex-col mb-lg"},m={class:"ft-b mb"},g={class:"mb"},f=a((()=>(0,o.createElementVNode)("span",{class:"content"},"gaussdb",-1))),d={class:"content"},C={class:"flex-row"},v={key:1,class:"flex-col full-w full-h ft-lg"},N={class:"flex-row"};var S;(function(e){e[e["UN_INSTALL"]=Number(-1)]="UN_INSTALL",e[e["SUCESS"]=Number(1)]="SUCESS",e[e["FAIL"]=Number(0)]="FAIL"})(S||(S={}));var k=(0,o.defineComponent)({setup(e,{expose:t}){const{t:n}=(0,l.QT)(),a=(0,s.BH)(),k=(0,o.ref)(S.UN_INSTALL),x=(0,o.ref)(!1),h=(0,o.ref)(""),w=(0,o.inject)("loading");(0,o.onMounted)((()=>{w.setNextBtnShow(!1),I()}));const I=()=>{x.value=!0;const e=Object.assign({},a.getInstallConfig);e.minimalistInstallConfig=a.getMiniConfig,e.liteInstallConfig=a.getLiteConfig,e.enterpriseInstallConfig=a.getEnterpriseConfig,w.toLoading(),(0,r.tA)(e).then((e=>{200===Number(e.code)?(w.setBackBtnShow(!1),w.setNextBtnShow(!1),k.value=S.SUCESS):(x.value=!1,w.cancelLoading(),k.value=S.FAIL,h.value=e.msg)})).catch((e=>{x.value=!1,w.cancelLoading(),k.value=S.FAIL,console.log(n("components.ExeImport.5mpmzg3ztak0"),e),h.value=e.toString()})).finally((()=>{w.cancelLoading(),x.value=!1}))},b=async()=>!0;return t({beforeConfirm:b}),(e,t)=>{const n=(0,o.resolveComponent)("svg-icon"),r=(0,o.resolveComponent)("a-button"),s=(0,o.resolveComponent)("icon-close-circle-fill"),l=(0,o.resolveComponent)("a-spin");return(0,o.openBlock)(),(0,o.createElementBlock)("div",c,[k.value===S.SUCESS?((0,o.openBlock)(),(0,o.createElementBlock)("div",u,[(0,o.createVNode)(n,{"icon-class":"ops-install-success",class:"icon-size mb"}),(0,o.createElementVNode)("div",i,(0,o.toDisplayString)(e.$t("components.ExeImport.5mpmzg3zqu80")),1),(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("div",m,(0,o.toDisplayString)(e.$t("components.ExeImport.5mpmzg3zrrw0")),1),(0,o.createElementVNode)("div",g,[(0,o.createTextVNode)((0,o.toDisplayString)(e.$t("components.ExeImport.5mpmzg3zs0o0"))+": ",1),f]),(0,o.createElementVNode)("div",null,[(0,o.createTextVNode)((0,o.toDisplayString)(e.$t("components.ExeImport.5mpmzg3zs6w0"))+": ",1),(0,o.createElementVNode)("span",d,(0,o.toDisplayString)((0,o.unref)(a).getMiniConfig.databasePassword),1)])]),(0,o.createElementVNode)("div",C,[(0,o.createVNode)(r,{type:"outline",class:"mr",onClick:t[0]||(t[0]=t=>e.$router.push({name:"Dashboard"}))},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.$t("components.ExeImport.5mpmzg3zseo0")),1)])),_:1}),(0,o.createVNode)(r,{type:"primary",onClick:t[1]||(t[1]=t=>e.$router.push({name:"DailyOps"}))},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.$t("components.ExeImport.5mpmzg3zskw0")),1)])),_:1})])])):(0,o.createCommentVNode)("",!0),k.value===S.FAIL?((0,o.openBlock)(),(0,o.createElementBlock)("div",v,[(0,o.createElementVNode)("div",N,[(0,o.createVNode)(s,{class:"mr",style:{color:"red",width:"24px",height:"24px"}}),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.$t("components.ExeImport.5mpmzg3zsu80"))+" "+(0,o.toDisplayString)(h.value),1)])])):(0,o.createCommentVNode)("",!0),x.value?((0,o.openBlock)(),(0,o.createBlock)(l,{key:2,class:"flex-col full-w full-h",loading:x.value,tip:e.$t("components.ExeImport.5mpmzg3zt0g0")},null,8,["loading","tip"])):(0,o.createCommentVNode)("",!0)])}}}),x=n(83744);const h=(0,x.Z)(k,[["__scopeId","data-v-3392051b"]]);var w=h}}]);
//# sourceMappingURL=7702.d396caef.js.map