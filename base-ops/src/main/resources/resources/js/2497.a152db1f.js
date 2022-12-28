"use strict";(self["webpackChunkweb_ui"]=self["webpackChunkweb_ui"]||[]).push([[2497],{22247:function(e,t,l){l.r(t),l.d(t,{default:function(){return v}});var r=l(70821),o=l(40225),a=l(98535),n=l(39518),s=l(57330);const i={class:"cluster-config-c"},c={class:"flex-col"},d={class:"flex-col-start"},p={class:"node-top ft-b full-w mb"};var m=(0,r.defineComponent)({setup(e,{expose:t}){const{t:l}=(0,s.QT)(),m=(0,o.BH)(),u=(0,r.reactive)({form:{clusterId:"",clusterName:"",installPath:"/opt/openGauss/install/app",logPath:"/opt/openGauss/log/omm",tmpPath:"/opt/openGauss/tmp",omToolsPath:"/opt/openGauss/install/om",corePath:"/opt/openGauss/corefile",port:"5432",enableDCF:!1,databaseUsername:"",databasePassword:""},rules:{}});(0,r.onMounted)((()=>{f(),Object.keys(m.getEnterpriseConfig).length&&Object.assign(u.form,m.getEnterpriseConfig)}));const f=()=>{u.rules={clusterId:[{required:!0,"validate-trigger":"blur",message:l("enterprise.ClusterConfig.5mpm3ku3hik0")},{validator:(e,t)=>new Promise((r=>{const o={name:e};(0,n.T2)(o).then((e=>{200===Number(e.code)?"Y"===e.data.has?(t(l("enterprise.ClusterConfig.5mpm3ku3jo00")),r(!1)):r(!0):(t(l("enterprise.ClusterConfig.5mpm3ku3jqo0")),r(!1))}))}))}],clusterName:[{required:!0,"validate-trigger":"blur",message:l("enterprise.ClusterConfig.5mpm3ku3hr00")}],installPath:[{required:!0,"validate-trigger":"blur",message:l("enterprise.ClusterConfig.5mpm3ku3i340")}],logPath:[{required:!0,"validate-trigger":"blur",message:l("enterprise.ClusterConfig.5mpm3ku3iag0")}],tmpPath:[{required:!0,"validate-trigger":"blur",message:l("enterprise.ClusterConfig.5mpm3ku3ihg0")}],omToolsPath:[{required:!0,"validate-trigger":"blur",message:l("enterprise.ClusterConfig.5mpm3ku3iok0")}],corePath:[{required:!0,"validate-trigger":"blur",message:l("enterprise.ClusterConfig.5mpm3ku3ivk0")}],databaseUsername:[{required:!0,"validate-trigger":"blur",message:l("enterprise.ClusterConfig.5mpm3ku3j9s0")}],databasePassword:[{required:!0,"validate-trigger":"blur",message:l("enterprise.ClusterConfig.5mpm3ku3ji00")}]}},v=(0,r.ref)(),g=async()=>{const e=await(v.value?.validate());if(e)return!1;{const e=JSON.parse(JSON.stringify(u.form));return m.setInstallContext({clusterId:e.clusterId,clusterName:e.clusterName,deployType:a.K0.CLUSTER}),e.nodeConfigList=[],m.setEnterpriseConfig(e),!0}};t({beforeConfirm:g});const N=(0,r.computed)((()=>m.getInstallConfig.installType));return(e,t)=>{const l=(0,r.resolveComponent)("a-input"),o=(0,r.resolveComponent)("a-form-item"),a=(0,r.resolveComponent)("a-input-password"),n=(0,r.resolveComponent)("a-checkbox"),s=(0,r.resolveComponent)("a-form");return(0,r.openBlock)(),(0,r.createElementBlock)("div",i,[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("div",p,(0,r.toDisplayString)(e.$t("enterprise.ClusterConfig.5mpm3ku3go40")),1),(0,r.createVNode)(s,{model:(0,r.unref)(u).form,rules:(0,r.unref)(u).rules,"auto-label-width":"",style:{width:"850px"},ref:(e,t)=>{t["formRef"]=e,v.value=e}},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(o,{field:"clusterId",label:e.$t("enterprise.ClusterConfig.5mpm3ku3hcg0"),"validate-trigger":"blur"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(l,{modelValue:(0,r.unref)(u).form.clusterId,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,r.unref)(u).form.clusterId=e),placeholder:e.$t("enterprise.ClusterConfig.5mpm3ku3hik0")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,r.createVNode)(o,{field:"clusterName",label:e.$t("enterprise.ClusterConfig.5mpm3ku3hn40"),"validate-trigger":"blur"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(l,{modelValue:(0,r.unref)(u).form.clusterName,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,r.unref)(u).form.clusterName=e),placeholder:e.$t("enterprise.ClusterConfig.5mpm3ku3hr00")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,r.createVNode)(o,{field:"installPath",label:e.$t("enterprise.ClusterConfig.5mpm3ku3hv40"),"validate-trigger":"blur"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(l,{modelValue:(0,r.unref)(u).form.installPath,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,r.unref)(u).form.installPath=e),placeholder:e.$t("enterprise.ClusterConfig.5mpm3ku3i340")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,r.createVNode)(o,{field:"logPath",label:e.$t("enterprise.ClusterConfig.5mpm3ku3i6s0"),"validate-trigger":"blur"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(l,{modelValue:(0,r.unref)(u).form.logPath,"onUpdate:modelValue":t[3]||(t[3]=e=>(0,r.unref)(u).form.logPath=e),placeholder:e.$t("enterprise.ClusterConfig.5mpm3ku3iag0")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,r.createVNode)(o,{field:"tmpPath",label:e.$t("enterprise.ClusterConfig.5mpm3ku3ie40"),"validate-trigger":"blur"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(l,{modelValue:(0,r.unref)(u).form.tmpPath,"onUpdate:modelValue":t[4]||(t[4]=e=>(0,r.unref)(u).form.tmpPath=e),placeholder:e.$t("enterprise.ClusterConfig.5mpm3ku3ihg0")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,r.createVNode)(o,{field:"omToolsPath",label:e.$t("enterprise.ClusterConfig.5mpm3ku3il80"),"validate-trigger":"blur"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(l,{modelValue:(0,r.unref)(u).form.omToolsPath,"onUpdate:modelValue":t[5]||(t[5]=e=>(0,r.unref)(u).form.omToolsPath=e),placeholder:e.$t("enterprise.ClusterConfig.5mpm3ku3iok0")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,r.createVNode)(o,{field:"corePath",label:e.$t("enterprise.ClusterConfig.5mpm3ku3is00"),"validate-trigger":"blur"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(l,{modelValue:(0,r.unref)(u).form.corePath,"onUpdate:modelValue":t[6]||(t[6]=e=>(0,r.unref)(u).form.corePath=e),placeholder:e.$t("enterprise.ClusterConfig.5mpm3ku3ivk0")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,r.createVNode)(o,{field:"port",label:e.$t("enterprise.ClusterConfig.5mpm3ku3iz80"),"validate-trigger":"blur"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(l,{modelValue:(0,r.unref)(u).form.port,"onUpdate:modelValue":t[7]||(t[7]=e=>(0,r.unref)(u).form.port=e),disabled:"",placeholder:e.$t("enterprise.ClusterConfig.5mpm3ku3j300")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),"import"===(0,r.unref)(N)?((0,r.openBlock)(),(0,r.createBlock)(o,{key:0,field:"databaseUsername",label:e.$t("enterprise.ClusterConfig.5mpm3ku3j6k0"),"validate-trigger":"blur"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(a,{modelValue:(0,r.unref)(u).form.databaseUsername,"onUpdate:modelValue":t[8]||(t[8]=e=>(0,r.unref)(u).form.databaseUsername=e),placeholder:e.$t("enterprise.ClusterConfig.5mpm3ku3j9s0"),"allow-clear":""},null,8,["modelValue","placeholder"])])),_:1},8,["label"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(o,{field:"databasePassword",label:e.$t("enterprise.ClusterConfig.5mpm3ku3jdg0"),"validate-trigger":"blur"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(a,{modelValue:(0,r.unref)(u).form.databasePassword,"onUpdate:modelValue":t[9]||(t[9]=e=>(0,r.unref)(u).form.databasePassword=e),placeholder:e.$t("enterprise.ClusterConfig.5mpm3ku3ji00"),"allow-clear":""},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,r.createVNode)(o,{field:"enableDCF",label:e.$t("enterprise.ClusterConfig.5mpm3ku3jkw0")},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(n,{modelValue:(0,r.unref)(u).form.enableDCF,"onUpdate:modelValue":t[10]||(t[10]=e=>(0,r.unref)(u).form.enableDCF=e)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["model","rules"])])])])}}}),u=l(83744);const f=(0,u.Z)(m,[["__scopeId","data-v-fdd26ac4"]]);var v=f},92497:function(e,t,l){l.r(t),l.d(t,{default:function(){return g}});var r=l(70821),o=l(22247),a=l(23085),n=l(97379),s=l(23055),i=l(41040),c=l(17702),d=l(40225);const p={class:"simple-install-c"};var m;(function(e){e[e["CLUSTER"]=1]="CLUSTER",e[e["NODE"]=2]="NODE",e[e["ENV"]=3]="ENV",e[e["PROMPT"]=4]="PROMPT",e[e["EXE"]=5]="EXE"})(m||(m={}));var u=(0,r.defineComponent)({props:{currStep:Number},setup(e,{expose:t}){const l=e,u=(0,d.BH)(),f=(0,r.ref)(null),v=(0,r.ref)(null),g=(0,r.ref)(null),N=async()=>{if(l.currStep===m.CLUSTER){const e=await(f.value?.beforeConfirm());return e||!1}if(l.currStep===m.NODE){const e=await(v.value?.beforeConfirm());return e||!1}if(l.currStep===m.ENV){const e=await(g.value?.beforeConfirm());return e||!1}return!0},C=(0,r.computed)((()=>u.getInstallConfig.installType));return t({beforeConfirm:N}),(t,l)=>{const d=(0,r.resolveComponent)("a-step"),u=(0,r.resolveComponent)("a-steps"),N=(0,r.resolveComponent)("a-divider");return(0,r.openBlock)(),(0,r.createElementBlock)("div",p,[(0,r.createVNode)(u,{current:e.currStep},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(d,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(t.$t("enterprise.EnterpriseInstall.5mpm4jewxn00")),1)])),_:1}),(0,r.createVNode)(d,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(t.$t("enterprise.EnterpriseInstall.5mpm4jewye00")),1)])),_:1}),(0,r.createVNode)(d,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(t.$t("enterprise.EnterpriseInstall.5mpm4jewykk0")),1)])),_:1}),(0,r.createVNode)(d,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)("install"===(0,r.unref)(C)?t.$t("enterprise.EnterpriseInstall.5mpm4jewyp40"):t.$t("enterprise.EnterpriseInstall.5mpm4jewysw0"))+(0,r.toDisplayString)(t.$t("enterprise.EnterpriseInstall.else2")),1)])),_:1}),(0,r.createVNode)(d,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(t.$t("enterprise.EnterpriseInstall.else3"))+(0,r.toDisplayString)("install"===(0,r.unref)(C)?t.$t("enterprise.EnterpriseInstall.5mpm4jewyp40"):t.$t("enterprise.EnterpriseInstall.5mpm4jewysw0")),1)])),_:1})])),_:1},8,["current"]),(0,r.createVNode)(N),e.currStep===m.CLUSTER?((0,r.openBlock)(),(0,r.createBlock)(o["default"],{key:0,ref:(e,t)=>{t["clusterConfigRef"]=e,f.value=e}},null,512)):(0,r.createCommentVNode)("",!0),e.currStep===m.NODE?((0,r.openBlock)(),(0,r.createBlock)(a["default"],{key:1,ref:(e,t)=>{t["nodeConfigRef"]=e,v.value=e}},null,512)):(0,r.createCommentVNode)("",!0),e.currStep===m.ENV?((0,r.openBlock)(),(0,r.createBlock)(n["default"],{key:2,ref:(e,t)=>{t["envRef"]=e,g.value=e}},null,512)):(0,r.createCommentVNode)("",!0),e.currStep===m.PROMPT?((0,r.openBlock)(),(0,r.createBlock)(s["default"],{key:3,ref:(e,t)=>{t["promptRef"]=e}},null,512)):(0,r.createCommentVNode)("",!0),"install"===(0,r.unref)(C)&&e.currStep===m.EXE?((0,r.openBlock)(),(0,r.createBlock)(i["default"],{key:4,ref:(e,t)=>{t["exeRef"]=e}},null,512)):(0,r.createCommentVNode)("",!0),"import"===(0,r.unref)(C)&&e.currStep===m.EXE?((0,r.openBlock)(),(0,r.createBlock)(c["default"],{key:5})):(0,r.createCommentVNode)("",!0)])}}}),f=l(83744);const v=(0,f.Z)(u,[["__scopeId","data-v-52595cde"]]);var g=v},97379:function(e,t,l){l.r(t),l.d(t,{default:function(){return A}});l(57658);var r=l(70821),o=l(39518),a=l(40225),n=l(98535),s=l(15784),i=l(57330);const c={class:"env-monitor-c"},d={class:"flex-col"},p={class:"flex-col-start"},m={class:"flex-row"},u={class:"env-item-c flex-between full-w mb"},f={class:"flex-row"},v={class:"flex-row"},g={key:0},N={class:"flex-row mb"},C={class:"ft-xlg"},k={class:"hardware-env"},h={key:0,class:"flex-col"},V={style:{width:"250px"},class:"flex-row"},E={class:"mr"},w={style:{"min-width":"500px"},class:"flex-row-start"},y={class:"mr"},x={class:"flex-row mb"},b={class:"ft-xlg"},I={class:"hardware-env"},S={key:0,class:"flex-col"},B={style:{width:"250px"},class:"flex-row"},P={class:"mr"},D={style:{"min-width":"500px"},class:"flex-row-start"},$={class:"mr"},_={key:1},R={key:1},T={key:2};var L;(function(e){e["NORMAL"]="NORMAL",e["WARMING"]="WARMING",e["ERROR"]="ERROR",e["INFO"]="INFO"})(L||(L={}));var M=(0,r.defineComponent)({setup(e,{expose:t}){const{t:l}=(0,i.QT)(),M=(0,a.BH)(),j=(0,r.inject)("loading"),O=(0,r.reactive)({nodeData:[]}),A=(0,r.ref)(null);(0,r.onMounted)((()=>{j.toLoading(),O.nodeData=[],U(),O.nodeData.forEach((e=>{e.loading=!0,(0,o.c0)(e.hostId).then((t=>{200===Number(t.code)&&(e.result=200,e.hardwareEnv.envProperties=t.data.hardwareEnv.envProperties,e.softwareEnv.envProperties=t.data.softwareEnv.envProperties,q(e))})).catch((t=>{e.result=500,e.errMsg=t})).finally((()=>{e.loading=!1}))})),A.value=setInterval((()=>{const e=O.nodeData.filter((e=>200!==e.result&&500!==e.result));0===e.length&&(clearInterval(A.value),j.cancelLoading())}),100)}));const U=()=>{O.nodeData=[],M.getEnterpriseConfig.nodeConfigList.forEach((e=>{const t=O.nodeData.find((t=>t.privateIp===e.privateIp));if(!t){const t=F();t.hostId=e.hostId,t.privateIp=e.privateIp,t.publicIp=e.publicIp,t.clusterRole=e.clusterRole,O.nodeData.push(t)}}))},F=()=>({result:-1,errMsg:"",noPassNum:0,noPassNumHard:0,noPassNumSoft:0,isShow:!0,loading:!1,hostId:"",clusterRole:"",privateIp:"",publicIp:"",hardwareEnv:{envProperties:[]},softwareEnv:{envProperties:[]}}),z=e=>{j.toLoading(),e.loading=!0,(0,o.c0)(e.hostId).then((t=>{200===Number(t.code)?(e.result=200,e.hardwareEnv.envProperties=t.data.hardwareEnv.envProperties,e.softwareEnv.envProperties=t.data.softwareEnv.envProperties,q(e)):(e.result=500,e.errMsg=t.msg)})).catch((t=>{e.result=500,e.errMsg=t})).finally((()=>{e.loading=!1,j.cancelLoading()}))},q=e=>{e.hardwareEnv.envProperties.forEach((t=>{t.status===L.ERROR&&(e.noPassNum=e.noPassNum+1,e.noPassNumHard=e.noPassNumHard+1)})),e.softwareEnv.envProperties.forEach((t=>{t.status===L.ERROR&&(e.noPassNum=e.noPassNum+1,e.noPassNumHard=e.noPassNumHard+1)}))},H=e=>{switch(e.status){case L.ERROR:return"red";case L.INFO:return"gray";case L.NORMAL:return"green";default:return"orange"}},G=e=>{switch(e){case n._.MASTER:return l("enterprise.EnvMonitor.5mpm5p9xfzo0");case n._.SLAVE:return l("enterprise.EnvMonitor.5mpm5p9xg3o0");default:return l("enterprise.EnvMonitor.5mpm5p9xg700")}},Z=()=>{const e=O.nodeData.filter((e=>200!==e.result));let t=!0;return e.length>0&&(t=!1,s.Z.warning("If the host fails to be detected, configure the host and re-detect the host for installation")),t};return t({beforeConfirm:Z}),(e,t)=>{const l=(0,r.resolveComponent)("a-badge"),o=(0,r.resolveComponent)("a-alert"),a=(0,r.resolveComponent)("a-tag"),n=(0,r.resolveComponent)("icon-refresh"),s=(0,r.resolveComponent)("a-button"),i=(0,r.resolveComponent)("icon-down"),M=(0,r.resolveComponent)("icon-up"),j=(0,r.resolveComponent)("icon-exclamation-circle-fill"),A=(0,r.resolveComponent)("icon-check-circle-fill"),U=(0,r.resolveComponent)("icon-close-circle-fill"),F=(0,r.resolveComponent)("icon-info-circle-fill"),q=(0,r.resolveComponent)("a-spin"),Z=(0,r.resolveComponent)("a-divider");return(0,r.openBlock)(),(0,r.createElementBlock)("div",c,[(0,r.createElementVNode)("div",d,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)((0,r.unref)(O).nodeData,((t,c)=>((0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"mb",style:{width:"50%"},key:c},[(0,r.createVNode)(q,{class:"full-w",loading:t.loading,tip:e.$t("enterprise.EnvMonitor.5mpm5p9xees0")},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("div",p,[-1!==t.result&&t.noPassNum>0?((0,r.openBlock)(),(0,r.createBlock)(o,{key:0,class:"mb",style:{width:"fit-content"},type:"error"},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("div",m,[(0,r.createTextVNode)((0,r.toDisplayString)(e.$t("enterprise.EnvMonitor.5mpm5p9xf4w0"))+" ",1),(0,r.createVNode)(l,{count:t.noPassNum},null,8,["count"]),(0,r.createTextVNode)((0,r.toDisplayString)(e.$t("enterprise.EnvMonitor.else1")),1)])])),_:2},1024)):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("div",f,[(0,r.createVNode)(a,{class:"mr",color:"#86909C"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(G(t.clusterRole)),1)])),_:2},1024),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.$t("enterprise.EnvMonitor.else2"))+": "+(0,r.toDisplayString)(t.privateIp)+"("+(0,r.toDisplayString)(t.publicIp)+") ",1)]),(0,r.createElementVNode)("div",v,[(0,r.createVNode)(s,{class:"mr",type:"text",long:"",onClick:e=>z(t)},{icon:(0,r.withCtx)((()=>[(0,r.createVNode)(n)])),default:(0,r.withCtx)((()=>[(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.$t("enterprise.EnvMonitor.5mpm5p9xfb80")),1)])),_:2},1032,["onClick"]),t.isShow?((0,r.openBlock)(),(0,r.createBlock)(M,{key:1,style:{cursor:"pointer"},onClick:e=>t.isShow=!1},null,8,["onClick"])):((0,r.openBlock)(),(0,r.createBlock)(i,{key:0,style:{cursor:"pointer"},onClick:e=>t.isShow=!0},null,8,["onClick"]))])]),(0,r.withDirectives)((0,r.createElementVNode)("div",null,[200===t.result?((0,r.openBlock)(),(0,r.createElementBlock)("div",g,[(0,r.createElementVNode)("div",N,[t.noPassNumHard>0?((0,r.openBlock)(),(0,r.createBlock)(j,{key:0,class:"mr",style:{color:"orange"},size:30})):((0,r.openBlock)(),(0,r.createBlock)(A,{key:1,style:{color:"green"},class:"mr",size:30})),(0,r.createElementVNode)("div",C,(0,r.toDisplayString)(e.$t("enterprise.EnvMonitor.5mpm5p9xff40")),1)]),(0,r.createElementVNode)("div",k,[t.hardwareEnv.envProperties.length?((0,r.openBlock)(),(0,r.createElementBlock)("div",h,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(t.hardwareEnv.envProperties,((e,t)=>((0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"flex-row mb",key:t},[(0,r.createElementVNode)("div",V,[(0,r.createElementVNode)("div",E,(0,r.toDisplayString)(e.name)+":",1),(0,r.createElementVNode)("div",null,(0,r.toDisplayString)(e.value),1)]),(0,r.createElementVNode)("div",w,[(0,r.createElementVNode)("div",y,[e.status===L.ERROR?((0,r.openBlock)(),(0,r.createBlock)(U,{key:0,style:{color:"red"},size:20})):(0,r.createCommentVNode)("",!0),e.status===L.NORMAL?((0,r.openBlock)(),(0,r.createBlock)(A,{key:1,style:{color:"green"},size:20})):(0,r.createCommentVNode)("",!0),e.status===L.WARMING?((0,r.openBlock)(),(0,r.createBlock)(j,{key:2,style:{color:"orange"},size:20})):(0,r.createCommentVNode)("",!0),e.status===L.INFO?((0,r.openBlock)(),(0,r.createBlock)(F,{key:3,style:{color:"gray"},size:20})):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",{style:(0,r.normalizeStyle)("color: "+H(e))},(0,r.toDisplayString)(e.statusMessage),5)])])))),128))])):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",x,[t.noPassNumSoft>0?((0,r.openBlock)(),(0,r.createBlock)(j,{key:0,class:"mr",style:{color:"orange"},size:30})):((0,r.openBlock)(),(0,r.createBlock)(A,{key:1,style:{color:"green"},class:"mr",size:30})),(0,r.createElementVNode)("div",b,(0,r.toDisplayString)(e.$t("enterprise.EnvMonitor.5mpm5p9xfk80")),1)]),(0,r.createElementVNode)("div",I,[t.softwareEnv.envProperties.length?((0,r.openBlock)(),(0,r.createElementBlock)("div",S,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(t.softwareEnv.envProperties,((e,t)=>((0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"flex-row mb",key:t},[(0,r.createElementVNode)("div",B,[(0,r.createElementVNode)("div",P,(0,r.toDisplayString)(e.name)+":",1),(0,r.createElementVNode)("div",null,(0,r.toDisplayString)(e.value),1)]),(0,r.createElementVNode)("div",D,[(0,r.createElementVNode)("div",$,[e.status===L.ERROR?((0,r.openBlock)(),(0,r.createBlock)(U,{key:0,style:{color:"red"},size:20})):(0,r.createCommentVNode)("",!0),e.status===L.NORMAL?((0,r.openBlock)(),(0,r.createBlock)(A,{key:1,style:{color:"green"},size:20})):(0,r.createCommentVNode)("",!0),e.status===L.WARMING?((0,r.openBlock)(),(0,r.createBlock)(j,{key:2,style:{color:"orange"},size:20})):(0,r.createCommentVNode)("",!0),e.status===L.INFO?((0,r.openBlock)(),(0,r.createBlock)(F,{key:3,style:{color:"gray"},size:20})):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",{style:(0,r.normalizeStyle)("max-width: 300px; color: "+H(e))},(0,r.toDisplayString)(e.statusMessage),5)])])))),128))])):(0,r.createCommentVNode)("",!0),500===t.result?((0,r.openBlock)(),(0,r.createElementBlock)("div",_,[(0,r.createVNode)(a,{color:"red"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(e.$t("enterprise.EnvMonitor.5mpm5p9xfo40")),1)])),_:1})])):(0,r.createCommentVNode)("",!0)])])):-1!==t.result&&200!==t.result?((0,r.openBlock)(),(0,r.createElementBlock)("div",R,(0,r.toDisplayString)(e.$t("enterprise.EnvMonitor.5mpm5p9xfrs0"))+" "+(0,r.toDisplayString)(t.errMsg),1)):((0,r.openBlock)(),(0,r.createElementBlock)("div",T,(0,r.toDisplayString)(e.$t("enterprise.EnvMonitor.5mpm5p9xfv80")),1))],512),[[r.vShow,t.isShow]])])])),_:2},1032,["loading","tip"]),(0,r.createVNode)(Z)])))),128))])])}}}),j=l(83744);const O=(0,j.Z)(M,[["__scopeId","data-v-efd21192"]]);var A=O},41040:function(e,t,l){l.r(t),l.d(t,{default:function(){return P}});l(57658);var r=l(70821),o=l(12320),a=l(12617),n=l(3334),s=l(39518),i=l(98535),c=l(40225),d=l(33781),p=l(79134);const m=e=>((0,r.pushScopeId)("data-v-de0464ca"),e=e(),(0,r.popScopeId)(),e),u={class:"exe-install-c"},f={key:0,class:"flex-col full-w full-h"},v={class:"mb-lg"},g={class:"install-connect-c flex-col mb-xlg"},N={class:"ft-b mb"},C={class:"mb"},k={class:"flex-row"},h={key:1,class:"flex-row full-w teminal-h"},V={class:"panel-w flex-col-start mr"},E=m((()=>(0,r.createElementVNode)("div",{id:"xtermLog",class:"xterm"},null,-1))),w={key:0,class:"panel-w flex-col-start"},y={class:"full-w flex-between mb"},x=m((()=>(0,r.createElementVNode)("div",{id:"xterm",class:"xterm"},null,-1)));var b;(function(e){e[e["UN_INSTALL"]=Number(-1)]="UN_INSTALL",e[e["SUCESS"]=Number(1)]="SUCESS",e[e["FAIL"]=Number(0)]="FAIL"})(b||(b={}));var I=(0,r.defineComponent)({setup(e,{expose:t}){const l=(0,c.BH)(),m=(0,r.ref)(""),I=(0,r.ref)([]),S=(0,r.ref)({}),B=(0,r.ref)(""),P=(0,r.ref)(b.UN_INSTALL),D=(0,r.ref)(),$=(0,r.ref)(),_=(0,r.ref)(),R=(0,r.ref)(),T=(0,r.inject)("loading");(0,r.onMounted)((()=>{T.setNextBtnShow(!1),I.value=[],Object.keys(l.getEnterpriseConfig).length&&(B.value=l.getEnterpriseConfig.databasePassword,l.getEnterpriseConfig.nodeConfigList.forEach((e=>{S.value[e.hostId]=e,I.value.push({hostId:e.hostId,privateIp:e.privateIp+"("+e.publicIp+")"})})),m.value=I.value[0].hostId),A()})),(0,r.onBeforeUnmount)((()=>{D.value?.destroy(),$.value?.destroy(),_.value?.dispose(),R.value?.dispose()}));const L=()=>{$.value&&$.value?.destroy(),_.value&&_.value.dispose(),A()},M=()=>{$.value&&$.value?.destroy(),R.value&&R.value.dispose(),O()},j=()=>new o.Terminal({fontSize:14,rows:40,cols:100,cursorBlink:!0,convertEol:!0,disableStdin:!1,cursorStyle:"underline",theme:{background:"black"}}),O=()=>{const e=j(),t=(new Date).getTime(),l=new d.Z({url:`terminal_${t}`});$.value=l,l.onopen((async()=>{const r={hostId:m.value,rootPassword:"",wsConnectType:i.Ie.SSH,businessId:`terminal_${t}`};if(S.value[m.value]){const e=await(0,p.v)(S.value[m.value].rootPassword);r.rootPassword=e}(0,s.Ye)(r).then((()=>{F(e,l.ws)}))}))},A=()=>{const e=j(),t=(new Date).getTime(),l=new d.Z({url:`installLog_${t}`});D.value=l,l.onopen((async()=>{T.toLoading();const r=JSON.parse(JSON.stringify(H.value)),o=r.installContext.enterpriseInstallConfig.nodeConfigList;for(let e=0;e<o.length;e++){const t=o[e],l=await(0,p.v)(t.rootPassword);t.rootPassword=l}r.businessId=`installLog_${t}`,(0,s.Ac)(r).then((t=>{200!==Number(t.code)&&(e.writeln(t.msg),l.destroy())})).catch((t=>{e.writeln(t.toString()),T.cancelLoading(),l.destroy()})),U(e,l.ws)})),l.onmessage((t=>{if(e.writeln(t),t.indexOf("FINAL_EXECUTE_EXIT_CODE")>-1){const e=Number(t.split(":")[1]);0===e?(T.setBackBtnShow(!1),T.setNextBtnShow(!1),P.value=b.SUCESS):(T.cancelLoading(),P.value=b.FAIL,R.value&&R.value.dispose(),O()),l.destroy()}}))},U=(e,t)=>{if(t){const t=new a.FitAddon;e.loadAddon(t),e.open(document.getElementById("xtermLog")),t.fit(),e.clear(),e.focus(),_.value=e}},F=(e,t)=>{if(t){const l=new n.AttachAddon(t),r=new a.FitAddon;e.loadAddon(l),e.loadAddon(r),e.open(document.getElementById("xterm")),r.fit(),e.clear(),e.focus(),e.write("\r\n[33m$[0m "),R.value=e}},z=()=>{window.$wujie?.props.methods.jump({name:"Dashboard"})},q=async()=>!0,H=(0,r.computed)((()=>l.getInstallParam));return t({beforeConfirm:q}),(e,t)=>{const l=(0,r.resolveComponent)("svg-icon"),o=(0,r.resolveComponent)("a-button"),a=(0,r.resolveComponent)("a-alert"),n=(0,r.resolveComponent)("a-option"),s=(0,r.resolveComponent)("a-select");return(0,r.openBlock)(),(0,r.createElementBlock)("div",u,[P.value===b.SUCESS?((0,r.openBlock)(),(0,r.createElementBlock)("div",f,[(0,r.createVNode)(l,{"icon-class":"ops-install-success",class:"icon-size mb"}),(0,r.createElementVNode)("div",v,(0,r.toDisplayString)(e.$t("enterprise.ExeInstall.5mpm9j359hw0")),1),(0,r.createElementVNode)("div",g,[(0,r.createElementVNode)("div",N,(0,r.toDisplayString)(e.$t("enterprise.ExeInstall.5mpm9j35a4o0")),1),(0,r.createElementVNode)("div",C,(0,r.toDisplayString)(e.$t("enterprise.ExeInstall.else1"))+": gaussdb",1),(0,r.createElementVNode)("div",null,(0,r.toDisplayString)(e.$t("enterprise.ExeInstall.else2"))+": "+(0,r.toDisplayString)(B.value),1)]),(0,r.createElementVNode)("div",k,[(0,r.createVNode)(o,{type:"outline",class:"mr",onClick:z},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(e.$t("enterprise.ExeInstall.5mpm9j35aa80")),1)])),_:1}),(0,r.createVNode)(o,{type:"primary",onClick:t[0]||(t[0]=t=>e.$router.push({name:"DailyOps"}))},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(e.$t("enterprise.ExeInstall.5mpm9j35aec0")),1)])),_:1})])])):((0,r.openBlock)(),(0,r.createElementBlock)("div",h,[(0,r.createElementVNode)("div",V,[P.value===b.FAIL?((0,r.openBlock)(),(0,r.createBlock)(a,{key:0,class:"mb",style:{padding:"14px 12px",width:"fit-content"},type:"error"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(e.$t("enterprise.ExeInstall.5mpm9j35ahw0")),1)])),_:1})):(0,r.createCommentVNode)("",!0),P.value===b.UN_INSTALL?((0,r.openBlock)(),(0,r.createBlock)(a,{key:1,class:"mb",type:"warning",style:{padding:"14px 12px",width:"fit-content"}},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(e.$t("enterprise.ExeInstall.5mpm9j35alg0"))+" "+(0,r.toDisplayString)(e.$t("enterprise.ExeInstall.5mpm9j35ap00")),1)])),_:1})):(0,r.createCommentVNode)("",!0),E]),P.value===b.FAIL?((0,r.openBlock)(),(0,r.createElementBlock)("div",w,[(0,r.createElementVNode)("div",y,[(0,r.createVNode)(s,{style:{width:"300px"},modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=e=>m.value=e),onChange:M},{default:(0,r.withCtx)((()=>[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(I.value,((e,t)=>((0,r.openBlock)(),(0,r.createBlock)(n,{key:t,value:e.hostId,label:e.privateIp},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),(0,r.createVNode)(o,{type:"primary",onClick:L},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(e.$t("enterprise.ExeInstall.5mpm9j35ats0")),1)])),_:1})]),x])):(0,r.createCommentVNode)("",!0)]))])}}}),S=l(83744);const B=(0,S.Z)(I,[["__scopeId","data-v-de0464ca"]]);var P=B},23055:function(e,t,l){l.r(t),l.d(t,{default:function(){return R}});l(57658);var r=l(70821),o=l(40225),a=l(98535),n=l(57330);const s={class:"install-prompt-c"},i={class:"flex-col"},c={class:"mb",style:{width:"50%"}},d={class:"item-node-top flex-between full-w mb"},p={class:"flex-row"},m={class:"flex-row"},u={class:"item-node-center"},f={class:"flex-row"},v={class:"lable-w"},g={class:"flex-row"},N={class:"lable-w"},C={class:"full-w"},k={class:"item-node-top flex-between full-w"},h={class:"flex-row"},V={class:"flex-row"},E={class:"item-node-center full-w flex-col-start"},w={class:"flex-row"},y={class:"lable-w"},x={class:"flex-row"},b={class:"lable-w"},I={class:"flex-row"},S={class:"lable-w"},B={class:"flex-row"},P={class:"lable-w"};var D=(0,r.defineComponent)({setup(e){const{t:t}=(0,n.QT)(),l=(0,o.BH)(),D=(0,r.reactive)({clusterInfo:{},nodeData:[]}),$=(0,r.inject)("loading");(0,r.onMounted)((()=>{$.setNextBtnShow(!0),$.setBackBtnShow(!0),D.nodeData=[];const e=l.getEnterpriseConfig,t=l.getInstallConfig;Object.assign(D.clusterInfo,{clusterId:t.clusterId,clusterName:t.clusterName,installPath:e.installPath,port:e.port}),e.nodeConfigList.forEach((e=>{const t=_();Object.assign(t,{clusterRole:e.clusterRole,publicIp:e.publicIp,privateIp:e.privateIp,dataPath:e.dataPath,xlogPath:e.xlogPath,isInstallCM:e.isInstallCM}),D.nodeData.push(t)}))}));const _=()=>({isShow:!0,clusterRole:"",publicIp:"",privateIp:"",installPath:"",dataPath:"",port:""}),R=e=>{switch(e){case a._.MASTER:return t("enterprise.InstallPrompt.5mpmb9e6rcw0");case a._.SLAVE:return t("enterprise.InstallPrompt.5mpmb9e6rj80");default:return t("enterprise.InstallPrompt.5mpmb9e6rpo0")}};return(e,t)=>{const l=(0,r.resolveComponent)("a-tag"),o=(0,r.resolveComponent)("a-divider"),a=(0,r.resolveComponent)("icon-down"),n=(0,r.resolveComponent)("icon-up");return(0,r.openBlock)(),(0,r.createElementBlock)("div",s,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("div",p,[(0,r.createVNode)(l,{class:"mr"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(e.$t("enterprise.InstallPrompt.5mpmb9e6puk0")),1)])),_:1}),(0,r.createElementVNode)("div",null,(0,r.toDisplayString)((0,r.unref)(D).clusterInfo.clusterId)+" - "+(0,r.toDisplayString)((0,r.unref)(D).clusterInfo.clusterName),1)]),(0,r.createElementVNode)("div",m,[(0,r.createElementVNode)("div",null,(0,r.toDisplayString)(e.$t("enterprise.InstallPrompt.else1"))+": AZ",1)])]),(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("div",v,(0,r.toDisplayString)(e.$t("enterprise.InstallPrompt.else2"))+":",1),(0,r.createElementVNode)("div",null,(0,r.toDisplayString)((0,r.unref)(D).clusterInfo.installPath),1)]),(0,r.createVNode)(o),(0,r.createElementVNode)("div",g,[(0,r.createElementVNode)("div",N,(0,r.toDisplayString)(e.$t("enterprise.InstallPrompt.else3"))+":",1),(0,r.createElementVNode)("div",null,(0,r.toDisplayString)((0,r.unref)(D).clusterInfo.port),1)])])]),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)((0,r.unref)(D).nodeData,((t,s)=>((0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"mb",style:{width:"50%"},key:s},[(0,r.createElementVNode)("div",C,[(0,r.createElementVNode)("div",k,[(0,r.createElementVNode)("div",h,[(0,r.createVNode)(l,{class:"mr",color:"#86909C"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(R(t.clusterRole)),1)])),_:2},1024),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.$t("enterprise.InstallPrompt.5mpmb9e6qmg0"))+" "+(0,r.toDisplayString)(t.privateIp)+"("+(0,r.toDisplayString)(t.publicIp)+") ",1)]),(0,r.createElementVNode)("div",V,[t.isShow?((0,r.openBlock)(),(0,r.createBlock)(n,{key:1,style:{cursor:"pointer"},onClick:e=>t.isShow=!1},null,8,["onClick"])):((0,r.openBlock)(),(0,r.createBlock)(a,{key:0,style:{cursor:"pointer"},onClick:e=>t.isShow=!0},null,8,["onClick"]))])]),(0,r.withDirectives)((0,r.createElementVNode)("div",E,[(0,r.createElementVNode)("div",w,[(0,r.createElementVNode)("div",y,(0,r.toDisplayString)(e.$t("enterprise.InstallPrompt.5mpmb9e6qsc0")),1),(0,r.createElementVNode)("div",null,(0,r.toDisplayString)(t.publicIp),1)]),(0,r.createVNode)(o),(0,r.createElementVNode)("div",x,[(0,r.createElementVNode)("div",b,(0,r.toDisplayString)(e.$t("enterprise.InstallPrompt.5mpmb9e6qww0")),1),(0,r.createElementVNode)("div",null,(0,r.toDisplayString)(t.dataPath),1)]),(0,r.createVNode)(o),(0,r.createElementVNode)("div",I,[(0,r.createElementVNode)("div",S,(0,r.toDisplayString)(e.$t("enterprise.InstallPrompt.else4")),1),(0,r.createElementVNode)("div",null,(0,r.toDisplayString)(t.dataPath),1)]),(0,r.createVNode)(o),(0,r.createElementVNode)("div",B,[(0,r.createElementVNode)("div",P,(0,r.toDisplayString)(e.$t("enterprise.InstallPrompt.5mpmb9e6r0k0"))+" CM",1),(0,r.createElementVNode)("div",null,(0,r.toDisplayString)(t.isInstallCM?e.$t("enterprise.InstallPrompt.5mpmb9e6r4g0"):e.$t("enterprise.InstallPrompt.5mpmb9e6r800")),1)])],512),[[r.vShow,t.isShow]])])])))),128))])])}}}),$=l(83744);const _=(0,$.Z)(D,[["__scopeId","data-v-8e4e2fde"]]);var R=_}}]);
//# sourceMappingURL=2497.a152db1f.js.map