"use strict";(self["webpackChunkweb_ui"]=self["webpackChunkweb_ui"]||[]).push([[9632,405,1199],{39518:function(e,t,o){o.d(t,{$4:function(){return b},Ac:function(){return i},BL:function(){return k},C4:function(){return S},DF:function(){return x},GD:function(){return E},IW:function(){return T},K4:function(){return $},Kf:function(){return F},LR:function(){return r},Lf:function(){return a},Ox:function(){return A},PK:function(){return c},R1:function(){return D},Sv:function(){return _},T2:function(){return m},T4:function(){return Z},TL:function(){return L},TY:function(){return O},Uw:function(){return N},We:function(){return j},YQ:function(){return y},Ye:function(){return h},ZA:function(){return U},_V:function(){return g},c0:function(){return s},gi:function(){return V},h:function(){return w},jQ:function(){return Y},jV:function(){return R},nT:function(){return f},sT:function(){return C},tA:function(){return d},ur:function(){return v},w3:function(){return p},xj:function(){return u},y6:function(){return B},zs:function(){return P},zx:function(){return I}});var n=o(9669),l=o.n(n);const a=()=>l().get("encryption/getKey"),r=e=>l().post("opsCluster/download",e||{}),s=e=>l().get(`opsCluster/env/${e}`),i=e=>l().post("opsCluster/install",e),d=e=>l().post("opsCluster/import",e),c=e=>l().post("opsCluster/quickInstall",e),u=e=>l().get("opsCluster/check",{params:e}),p=e=>l().post("opsCluster/uninstall",e),m=e=>l().get("opsCluster/hasName",{params:e}),g=()=>l().get("opsCluster/listCluster"),h=e=>l().post("opsCluster/ssh",e),f=e=>l().get("opsCluster/monitor",{params:e}),k=e=>l().post("opsCluster/start",e),C=e=>l().post("opsCluster/stop",e),v=e=>l().post("opsCluster/restart",e),L=e=>l().get("opsCluster/listHost",{params:e}),w=e=>l().get(e?`opsCluster/listInstallPackage?path=${e}`:"opsCluster/listInstallPackage"),I=()=>l().get("host/listAll"),y=e=>l().get(`hostUser/listAllWithoutRoot/${e}`),b=()=>l().get("az/listAll"),x=e=>l().get("opsCluster/logPath",{params:e}),V=e=>l().get("opsCluster/ls",{params:e}),N=e=>l().get("opsCluster/slowSql",{params:e}),E=e=>l().get("opsCluster/auditLog",{params:e}),_=e=>l().get("opsCluster/download",{params:e}),B=e=>l().get("wdr/list",{params:e}),D=e=>l().post("wdr/generate",e),P=e=>l()["delete"]("wdr/del/"+e),A=e=>l().get("wdr/createSnapshot",{params:e}),$=e=>l().get("wdr/downloadWdr",{params:e}),S=e=>l().get("wdr/listSnapshot",{params:e}),T=e=>l().post("backup/backup",e),Z=e=>l().get("backup/page",{params:e}),F=(e,t)=>l().post("backup/recover/"+e,t),R=e=>l()["delete"]("backup/del/"+e),j=e=>l().get("installPackageManager/page",{params:e}),O=e=>l()["delete"]("installPackageManager/"+e),U=e=>l().post("installPackageManager/save",e),Y=(e,t)=>l().put(`installPackageManager/update/${e}`,t)},83744:function(e,t){t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[n,l]of t)o[n]=l;return o}},80405:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var n=o(70821),l=o(39518),a=o(15784),r=o(57330);const s={class:"audit-log-c"},i={class:"query-c mb"},d={class:"query-label mr-s"};var c=(0,n.defineComponent)({props:{clusterId:String,hostId:String},setup(e){const t=e,{t:o}=(0,r.QT)(),c=(0,n.reactive)({start:"",end:""}),u=(0,n.computed)((()=>[{title:o("components.AuditLog.5mplidlidfs0"),dataIndex:"time"},{title:o("components.AuditLog.5mplidlido80"),dataIndex:"type"},{title:o("components.AuditLog.5mplidlie1k0"),dataIndex:"result"},{title:o("components.AuditLog.5mplidlielo0"),dataIndex:"userid"},{title:o("components.AuditLog.5mplidlietk0"),dataIndex:"username"},{title:o("components.AuditLog.5mplidlif1o0"),dataIndex:"database"},{title:o("components.AuditLog.5mplidlifdw0"),dataIndex:"client_conninfo"},{title:o("components.AuditLog.5mplidlifj80"),dataIndex:"object_name"},{title:o("components.AuditLog.5mplidlifnc0"),dataIndex:"detail_info"},{title:o("components.AuditLog.5mplidlifr40"),dataIndex:"node_name"},{title:o("components.AuditLog.5mplidlifv40"),dataIndex:"thread_id"},{title:o("components.AuditLog.5mplidlig300"),dataIndex:"local_port"},{title:o("components.AuditLog.5mplidlig7w0"),dataIndex:"remote_port"}])),p=(0,n.reactive)({data:[],page:{page:1,pageSize:20},loading:!1}),m=(0,n.computed)((()=>{const e=new Date,t=e.getFullYear(),o=e.getMonth(),n=e.getDate();return[new Date(t,o,n,0,0,0),new Date(t,o,n,23,59,59)]})),g=e=>{c.start=e[0],c.end=e[1]};(0,n.watch)((()=>t.hostId),(e=>{e&&h()}));const h=()=>{const e={clusterId:t.clusterId,hostId:t.hostId,start:c.start,end:c.end};p.loading=!0,(0,l.GD)(e).then((e=>{200===Number(e.code)?p.data=e.data:a.Z.error("Error Obtaining audit log")})).catch((()=>{a.Z.error("Error Obtaining audit log")})).finally((()=>{p.loading=!1}))},f=e=>{p.page.page=e,h()};return(e,t)=>{const o=(0,n.resolveComponent)("a-range-picker"),l=(0,n.resolveComponent)("a-button"),a=(0,n.resolveComponent)("a-table");return(0,n.openBlock)(),(0,n.createElementBlock)("div",s,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",d,(0,n.toDisplayString)(e.$t("components.AuditLog.else1"))+":",1),(0,n.createVNode)(o,{style:{width:"360px",margin:"0 24px 0 0"},"show-time":"","default-value":(0,n.unref)(m),"allow-clear":!1,"time-picker-props":{defaultValue:["00:00:00","23:59:59"]},format:"YYYY-MM-DD HH:mm:ss",onOk:g},null,8,["default-value"]),(0,n.createVNode)(l,{type:"primary",onClick:h},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e.$t("components.AuditLog.5mplidlico80")),1)])),_:1})]),(0,n.createVNode)(a,{class:"d-a-table-row full-h",data:(0,n.unref)(p).data,columns:(0,n.unref)(u),pagination:(0,n.unref)(p).page,"page-change":f,loading:(0,n.unref)(p).loading},null,8,["data","columns","pagination","loading"])])}}}),u=o(83744);const p=(0,u.Z)(c,[["__scopeId","data-v-5b23ab33"]]);var m=p},11199:function(e,t,o){o.r(t),o.d(t,{default:function(){return v}});var n=o(70821),l=o(39518),a=o(15784);const r={class:"file-log-c"},s={key:0},i={class:"flex-row mb"},d=["onClick"],c={class:"mr"},u={key:1,class:"flex-row"},p={class:"mr"},m={class:"mr"},g={key:1,class:"empty-c"},h={class:"tip-content"};var f=(0,n.defineComponent)({props:{rootPath:String,hostId:String},setup(e){const t=e,o=(0,n.reactive)({path:"",fileList:[],loading:!1});(0,n.watch)((()=>t.rootPath),(e=>{e&&f()}));const f=()=>{t.rootPath&&(o.path=t.rootPath,C(t.rootPath))},k=e=>{o.path=o.path+"/"+e.name,C(o.path)},C=e=>{o.loading=!0;const n={hostId:t.hostId,path:e};(0,l.gi)(n).then((e=>{200===Number(e.code)?o.fileList=e.data:a.Z.error("Failed to obtain the path of the system log file")})).catch((()=>{a.Z.error("Failed to obtain the path of the system log file")})).finally((()=>{o.loading=!1}))},v=e=>{o.loading=!0;const n={hostId:t.hostId,path:o.path,filename:e.name};(0,l.Sv)(n).then((t=>{if(t){const o=new Blob([t],{type:"text/plain"}),n=document.createElement("a"),l=window.URL||window.webkitURL,a=l.createObjectURL(o);n.href=a,n.download=e.name,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(a)}})).finally((()=>{o.loading=!1}))};return(e,t)=>{const l=(0,n.resolveComponent)("icon-folder"),a=(0,n.resolveComponent)("icon-file"),f=(0,n.resolveComponent)("icon-download"),C=(0,n.resolveComponent)("svg-icon"),L=(0,n.resolveComponent)("a-spin");return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createVNode)(L,{class:"flex-col-start",loading:(0,n.unref)(o).loading,tip:e.$t("components.FileLog.5mplk6504fg0")},{default:(0,n.withCtx)((()=>[(0,n.unref)(o).fileList.length?((0,n.openBlock)(),(0,n.createElementBlock)("div",s,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(o).fileList,((e,t)=>((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:t},[(0,n.createElementVNode)("div",i,["DIRECTORY"===e.type?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,class:"folder-c flex-row",onClick:t=>k(e)},[(0,n.createVNode)(l,{class:"mr"}),(0,n.createElementVNode)("div",c,(0,n.toDisplayString)(e.name),1),(0,n.createElementVNode)("div",null,(0,n.toDisplayString)(e.size),1)],8,d)):((0,n.openBlock)(),(0,n.createElementBlock)("div",u,[(0,n.createVNode)(a,{class:"mr"}),(0,n.createElementVNode)("div",p,(0,n.toDisplayString)(e.name),1),(0,n.createElementVNode)("div",m,(0,n.toDisplayString)(e.size),1),(0,n.createVNode)(f,{style:{cursor:"pointer"},onClick:t=>v(e)},null,8,["onClick"])]))])])))),128))])):(0,n.createCommentVNode)("",!0),0!==(0,n.unref)(o).fileList.length||(0,n.unref)(o).loading?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createElementBlock)("div",g,[(0,n.createVNode)(C,{"icon-class":"ops-empty",class:"icon-size mb"}),(0,n.createElementVNode)("div",h,(0,n.toDisplayString)(e.$t("components.FileLog.5mplk65055s0")),1)]))])),_:1},8,["loading","tip"])])}}}),k=o(83744);const C=(0,k.Z)(f,[["__scopeId","data-v-143c34f4"]]);var v=C},29632:function(e,t,o){o.r(t),o.d(t,{default:function(){return h}});o(57658);var n=o(70821),l=o(11199),a=o(39518),r=o(15784),s=o(80405);const i={class:"log-center-container"},d={class:"flex-row"},c={class:"query-label mr-s"},u={class:"query-label mr-s"};var p=(0,n.defineComponent)({setup(e){const t=(0,n.reactive)({clusterId:"",hostId:"",clusterListLoading:!1,clusterList:[],hostListLoading:!1,hostList:[],pathData:{dumpLogPath:"",opLogPath:"",performanceLogPath:"",systemLogPath:""}});(0,n.onMounted)((async()=>{await o(),await p(),m()}));const o=()=>new Promise((e=>{t.clusterListLoading=!0,(0,a._V)().then((o=>{200===Number(o.code)?(e(!0),o.data.forEach((e=>{t.clusterList.push({label:e.clusterId,value:e.clusterId})})),t.clusterId=t.clusterList[0].value):e(!1)})).finally((()=>{t.clusterListLoading=!1}))})),p=()=>new Promise((e=>{if(t.clusterId){const o={clusterId:t.clusterId};t.hostListLoading=!0,(0,a.TL)(o).then((o=>{200===Number(o.code)?(e(!0),t.hostList=[],o.data.forEach((e=>{t.hostList.push({label:`${e.privateIp}(${e.hostname})`,value:e.hostId})})),t.hostId=t.hostList[0].value):e(!1)})).finally((()=>{t.hostListLoading=!1}))}})),m=()=>{if(t.clusterId&&t.hostId){const e={clusterId:t.clusterId,hostId:t.hostId};t.hostId=e.hostId,(0,a.DF)(e).then((e=>{200===Number(e.code)?Object.assign(t.pathData,e.data):r.Z.error("Error obtaining log path")})).catch((()=>{r.Z.error("Error obtaining log path")}))}};return(e,o)=>{const a=(0,n.resolveComponent)("a-option"),r=(0,n.resolveComponent)("a-select"),g=(0,n.resolveComponent)("a-button"),h=(0,n.resolveComponent)("a-divider"),f=(0,n.resolveComponent)("a-tab-pane"),k=(0,n.resolveComponent)("a-tabs");return(0,n.openBlock)(),(0,n.createElementBlock)("div",i,[(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",c,(0,n.toDisplayString)(e.$t("logCenter.index.5mpllm8hjao0")),1),(0,n.createVNode)(r,{class:"select-w mr-lg",style:{width:"200px"},loading:(0,n.unref)(t).clusterListLoading,modelValue:(0,n.unref)(t).clusterId,"onUpdate:modelValue":o[0]||(o[0]=e=>(0,n.unref)(t).clusterId=e),placeholder:e.$t("logCenter.index.5mpllm8hk7o0"),onChange:p},{default:(0,n.withCtx)((()=>[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(t).clusterList,((e,t)=>((0,n.openBlock)(),(0,n.createBlock)(a,{key:t,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["loading","modelValue","placeholder"]),(0,n.createElementVNode)("div",u,(0,n.toDisplayString)(e.$t("logCenter.index.else1")),1),(0,n.createVNode)(r,{class:"select-w mr-lg",style:{width:"200px"},loading:(0,n.unref)(t).hostListLoading,modelValue:(0,n.unref)(t).hostId,"onUpdate:modelValue":o[1]||(o[1]=e=>(0,n.unref)(t).hostId=e),placeholder:e.$t("logCenter.index.5mpllm8hkk00")},{default:(0,n.withCtx)((()=>[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(t).hostList,((e,t)=>((0,n.openBlock)(),(0,n.createBlock)(a,{key:t,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["loading","modelValue","placeholder"]),(0,n.createVNode)(g,{type:"primary",onClick:m},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e.$t("logCenter.index.5mpllm8hkog0")),1)])),_:1})]),(0,n.createVNode)(h),(0,n.createVNode)(k,{class:"log-content",type:"card-gutter"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(f,{key:"1",title:e.$t("logCenter.index.5mpllm8hks40")},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(l["default"],{"root-path":(0,n.unref)(t).pathData.systemLogPath,"host-id":(0,n.unref)(t).hostId},null,8,["root-path","host-id"])])),_:1},8,["title"]),(0,n.createVNode)(f,{key:"2",title:e.$t("logCenter.index.5mpllm8hkwk0")},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(l["default"],{"root-path":(0,n.unref)(t).pathData.opLogPath,"host-id":(0,n.unref)(t).hostId},null,8,["root-path","host-id"])])),_:1},8,["title"]),(0,n.createVNode)(f,{key:"3",title:e.$t("logCenter.index.5mpllm8hl000")},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(s["default"],{"cluster-id":(0,n.unref)(t).clusterId,"host-id":(0,n.unref)(t).hostId},null,8,["cluster-id","host-id"])])),_:1},8,["title"]),(0,n.createVNode)(f,{key:"4",title:e.$t("logCenter.index.5mpllm8hl3w0")},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(l["default"],{"root-path":(0,n.unref)(t).pathData.performanceLogPath,"host-id":(0,n.unref)(t).hostId},null,8,["root-path","host-id"])])),_:1},8,["title"]),(0,n.createVNode)(f,{key:"5",title:e.$t("logCenter.index.5mpllm8hl7w0")},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(l["default"],{"root-path":(0,n.unref)(t).pathData.dumpLogPath,"host-id":(0,n.unref)(t).hostId},null,8,["root-path","host-id"])])),_:1},8,["title"])])),_:1})])}}}),m=o(83744);const g=(0,m.Z)(p,[["__scopeId","data-v-68bfb9f6"]]);var h=g}}]);
//# sourceMappingURL=9632.878c5232.js.map