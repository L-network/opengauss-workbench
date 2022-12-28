"use strict";(self["webpackChunkweb_ui"]=self["webpackChunkweb_ui"]||[]).push([[3803],{89965:function(e,t,o){o.d(t,{AH:function(){return f},Bd:function(){return p},C7:function(){return D},DG:function(){return T},Du:function(){return E},H7:function(){return O},Iz:function(){return H},J6:function(){return B},Jh:function(){return v},NQ:function(){return I},QS:function(){return S},Qt:function(){return k},R7:function(){return z},Rq:function(){return u},SB:function(){return g},SW:function(){return x},UL:function(){return m},Up:function(){return h},WK:function(){return C},Yn:function(){return j},gp:function(){return c},j9:function(){return R},nB:function(){return y},qR:function(){return $},qo:function(){return b},sZ:function(){return _},v$:function(){return s},vs:function(){return r},w0:function(){return Z},wB:function(){return q},x9:function(){return F},xl:function(){return V},yA:function(){return d},yf:function(){return N}});var n=o(15784),a=o(9669),i=o.n(a),l=o(90989);const r=(e,t,o,n)=>i().get(`/modeling/dataflow/dataSourceDb/getTablesBySchema/${e}/${t}/${o}`,n||{}),d=(e,t)=>i().get(`/modeling/dataflow/dataSourceDb/getFieldsByTable/${e}`,t||{}),c=e=>i().get("/modeling/dataflow/list",{params:e}),s=e=>i().post("/modeling/dataflow/add",e||{}),u=e=>i()["delete"](`/modeling/dataflow/delete/${e}`),m=e=>i().put("/modeling/dataflow/edit",e||{}),p=e=>i().get(`/modeling/dataflow/getById/${e}`),g=(e,t)=>i().get(`/modeling/dataflow/dataSourceDb/getSchemaByClusterNodeId/${e}/${t}`,e||{}),f=e=>i().post("/modeling/dataflow/getSql",e||{}),v=e=>i().post("/modeling/dataflow/runSql",e||{});let w=!0;const h=(e,t,o)=>new Promise((a=>{w&&(w=!1,i().put("/modeling/dataflow/edit",{id:e,operatorContent:JSON.stringify(t)}).then((e=>{a(!0),w=!0,200===Number(e.code)&&(o||n.Z.success({content:l.Z.global.t("modeling.dy_common.saveSuccess")}))})).catch((()=>{a(!1),o||n.Z.error({content:l.Z.global.t("modeling.dy_common.saveFailed")}),w=!0})))})),b=e=>i().get("/modeling/dataflow/dataSourceDb/list",e||{}),C=e=>i().post("/modeling/dataflow/getResultFieldsByOperator",e||{}),x=e=>i().post("/modeling/dataflow/visualization/params/add",e||{}),N=e=>i().put("/modeling/dataflow/visualization/params/edit",e||{}),z=e=>i()["delete"](`/modeling/dataflow/visualization/params/delete/${e}`),V=e=>i().post("/modeling/dataflow/visualization/params/generateChart",e||{}),y=(e,t)=>i().get(`/modeling/dataflow/visualization/params/getListByOperatorId/${e}`,t||{}),$=e=>i().post("/modeling/dataflow/visualization/snapshot/add",e||{}),S=(e,t)=>i().get(`/modeling/dataflow/visualization/snapshot/getListByDataFlowId/${e}`,t||{}),k=e=>i()["delete"](`/modeling/dataflow/visualization/snapshot/delete/${e}`),_=(e,t)=>i().get(`/modeling/dataflow/visualization/report/getListByDataFlowId/${e}`,{params:t||{}}),q=e=>i().post("/modeling/dataflow/visualization/report/add",e||{}),D=e=>i().put("/modeling/dataflow/visualization/report/update",e||{}),H=e=>i()["delete"](`/modeling/dataflow/visualization/report/delete/${e}`),E=e=>i().get(`/modeling/dataflow/visualization/report/share/getByReportId/${e}`),j=(e,t)=>i().get(`/modeling/dataflow/visualization/customDimension/getListByOperatorId/${e}`,{params:t||{}}),B=e=>i().post("/modeling/dataflow/visualization/customDimension/add",e||{}),I=e=>i().put("/modeling/dataflow/visualization/customDimension/edit",e||{}),O=e=>i()["delete"](`/modeling/dataflow/visualization/customDimension/delete/${e}`),F=(e,t)=>i().get(`/modeling/visualization/report/share/getMapGeo/${e}`,t||{}),T=e=>i().post("/modeling/dataflow/visualization/params/uploadGeo",e||{}),Z=(e,t)=>i().get(`/modeling/dataflow/visualization/params/getGeo/${e}`,{params:t||{}}),R=e=>i()["delete"](`/modeling/dataflow/visualization/params/deleteGeo/${e}`)},68957:function(e,t,o){o.r(t),o.d(t,{checkData:function(){return r},jsonFormat:function(){return d}});var n=o(43610),a=o(35589),i=o(90989);const l=(0,n.m)(),r=e=>{let t=!0,o="";return e&&e.cells&&Array.isArray(e.cells)&&e.cells.length>0&&e.cells.forEach((e=>{if("edge"!==e.shape){const n=l.getRules[e.data.cells_type];e.data&&(e.data.rule&&"function"===typeof e.data.rule?e.data.rule(e.data)||(t=!1,o+=`[${e.data.text}]`+i.Z.global.t("modeling.utils.index.5m78yfizcxc0")):n&&"function"===typeof n&&(n(e.data)||(t=!1,o+=`[${e.data.text}]`+i.Z.global.t("modeling.utils.index.5m78yfizcxc0"))))}})),!t&&o&&a.Z.error({position:"bottomRight",content:o,closable:!0,duration:1e4}),t},d=e=>{if(e){const t=e.toJSON();return t.cells.forEach((e=>{e.data&&e.data.cells_type?e.cells_type=e.data.cells_type:"edge"===e.shape&&(e.cells_type="line")})),t}return""}},83744:function(e,t){t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[n,a]of t)o[n]=a;return o}},53803:function(e,t,o){o.r(t),o.d(t,{default:function(){return v}});var n=o(70821),a=o(89965),i=o(64253),l=o(42119),r=o(15784),d=o(68957),c=o(57330);const s={class:"header-container"},u={class:"text"},m={class:"d-button"};var p=(0,n.defineComponent)({emits:["operate"],setup(e,{expose:t,emit:o}){const{t:p}=(0,c.QT)(),g=((0,l.yj)(),(0,n.ref)(!0)),f=(0,n.reactive)({graph:null,options:null}),v=(e,t)=>{f.graph=e,f.options=t},w=(e,t)=>{if("antvLeft"===e)g.value=!g.value,o("operate",e);else if("revoke"===e)f.graph?.undo();else if("recover"===e)f.graph?.redo();else if("enlarge"===e)f.graph?.zoomTo(f.graph?.zoom()+.15,{maxScale:2,minScale:.5});else if("narrow"===e)f.graph?.zoomTo(f.graph?.zoom()-.15,{maxScale:2,minScale:.5});else if("center"===e)f.graph?.center();else if("delete"===e){const e=f.graph?.getSelectedCells();if(e&&e.length){const t=e.filter((e=>!e.data.operate||e.data.operate.includes("delete")));f.graph?.removeCells(t)}}else if("save"===e){if(f.graph){let e=(0,d.jsonFormat)(f.graph);(0,a.Up)(String(window.$wujie?.props.data.id),e)}}else if("export"===e)if("json"===t){let e=f.graph&&(0,d.jsonFormat)(f.graph);if(e){const t=p("modeling.components.Header.5m78qbcztzk0")+`${(new Date).toISOString()}.json`,o="object"===typeof e?JSON.stringify(e,void 0,2):e;if(o){const e=new Blob([o],{type:"text/json"}),n=document.createElement("a");n.setAttribute("style","display: none"),n.download=t,n.href=window.URL.createObjectURL(e),n.dataset.downloadurl=["text/json",n.download,n.href].join(":"),document.body.appendChild(n),n.click(),document.body.removeChild(n)}}}else"svg"===t?f.graph?.toSVG((e=>{i.Vb.downloadDataUri(i.Vb.svgToDataUrl(e),p("modeling.components.Header.5m78qbczu200")+"{(new Date()).toISOString()}.svg")}),{serializeImages:!0,stylesheet:"\n          .base-node-container {\n            width: 100%;\n            height: 100%;\n            background: #ffffff;\n            box-shadow: 0px 2px 8px rgb(165 165 165 / 33%);\n            border-radius: 4px;\n            transition: opacity 0.3s;\n            display: flex;\n            align-items: center;\n            box-sizing: border-box;\n            padding: 0 10px;\n            position: relative;\n          }\n          .base-node-icon { display: none !important; }\n        "}):"png"!==t&&"jpeg"!==t||f.graph?.toPNG((e=>{i.Vb.downloadDataUri(e,p("modeling.components.Header.5m78qbczu500")+`${(new Date).toISOString()}.${t}`)}),{serializeImages:!0,stylesheet:"\n          .base-node-container {\n            width: 100%;\n            height: 100%;\n            background: #ffffff;\n            box-shadow: 0px 2px 8px rgb(165 165 165 / 33%);\n            border-radius: 4px;\n            transition: opacity 0.3s;\n            display: flex;\n            align-items: center;\n            box-sizing: border-box;\n            padding: 0 10px;\n            position: relative;\n          }\n          .base-node-icon { display: none !important; }\n        ",padding:{top:20,right:20,bottom:20,left:20}});else if("import"===e)h.value.click();else if("code"===e){let t=f.graph&&(0,d.jsonFormat)(f.graph);t&&o("operate",e,t)}else if("run"===e){let t=f.graph&&(0,d.jsonFormat)(f.graph),n=(0,d.checkData)(t);t&&n&&o("operate",e,t)}else"visual"===e&&o("operate",e)},h=(0,n.ref)(null),b=()=>{const e=h.value.files[0],t=new FileReader;t.onloadend=()=>{if(t.result)try{const e=JSON.parse(t.result);f.graph?.fromJSON(e)}catch(e){r.Z.error({content:p("modeling.components.Header.5m78qbczu8c0")})}finally{h.value.value=""}},t.readAsText(e)};return t({init:v}),(e,t)=>{const o=(0,n.resolveComponent)("icon-menu-fold"),a=(0,n.resolveComponent)("icon-menu-unfold"),i=(0,n.resolveComponent)("icon-save"),l=(0,n.resolveComponent)("a-tooltip"),r=(0,n.resolveComponent)("icon-delete"),d=(0,n.resolveComponent)("icon-undo"),c=(0,n.resolveComponent)("icon-refresh"),p=(0,n.resolveComponent)("icon-zoom-in"),f=(0,n.resolveComponent)("icon-zoom-out"),v=(0,n.resolveComponent)("icon-align-center"),C=(0,n.resolveComponent)("icon-import"),x=(0,n.resolveComponent)("icon-export"),N=(0,n.resolveComponent)("a-doption"),z=(0,n.resolveComponent)("a-dropdown"),V=(0,n.resolveComponent)("icon-code-square"),y=(0,n.resolveComponent)("icon-play-circle"),$=(0,n.resolveComponent)("icon-bar-chart");return(0,n.openBlock)(),(0,n.createElementBlock)("div",s,[(0,n.createElementVNode)("div",{class:"toggle-antv-left",onClick:t[0]||(t[0]=e=>w("antvLeft"))},[(0,n.withDirectives)((0,n.createVNode)(o,null,null,512),[[n.vShow,g.value]]),(0,n.withDirectives)((0,n.createVNode)(a,null,null,512),[[n.vShow,!g.value]]),(0,n.createElementVNode)("div",u,(0,n.toDisplayString)(e.$t("modeling.components.Header.5m78qbczrv40")),1)]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbczsmk0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-button",onClick:t[1]||(t[1]=e=>w("save"))},[(0,n.createVNode)(i)])])),_:1},8,["content"]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbczsqw0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-button",onClick:t[2]||(t[2]=e=>w("delete"))},[(0,n.createVNode)(r)])])),_:1},8,["content"]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbczsto0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-button",onClick:t[3]||(t[3]=e=>w("revoke"))},[(0,n.createVNode)(d)])])),_:1},8,["content"]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbczswg0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-button",onClick:t[4]||(t[4]=e=>w("recover"))},[(0,n.createVNode)(c)])])),_:1},8,["content"]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbczszg0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-button",onClick:t[5]||(t[5]=e=>w("enlarge"))},[(0,n.createVNode)(p)])])),_:1},8,["content"]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbczt2k0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-button",onClick:t[6]||(t[6]=e=>w("narrow"))},[(0,n.createVNode)(f)])])),_:1},8,["content"]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbczt4w0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-button",onClick:t[7]||(t[7]=e=>w("center"))},[(0,n.createVNode)(v)])])),_:1},8,["content"]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbczt7g0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-button",onClick:t[8]||(t[8]=e=>w("import"))},[(0,n.createVNode)(C)])])),_:1},8,["content"]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbczt9s0")},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(z,null,{content:(0,n.withCtx)((()=>[(0,n.createVNode)(N,{onClick:t[9]||(t[9]=e=>w("export","json"))},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e.$t("modeling.components.Header.5m78qbcztdc0")),1)])),_:1}),(0,n.createVNode)(N,{onClick:t[10]||(t[10]=e=>w("export","svg"))},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e.$t("modeling.components.Header.5m78qbcztg00")),1)])),_:1}),(0,n.createVNode)(N,{onClick:t[11]||(t[11]=e=>w("export","jpeg"))},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e.$t("modeling.components.Header.5m78qbcztio0")),1)])),_:1}),(0,n.createVNode)(N,{onClick:t[12]||(t[12]=e=>w("export","png"))},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e.$t("modeling.components.Header.5m78qbcztlk0")),1)])),_:1})])),default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",m,[(0,n.createVNode)(x)])])),_:1})])),_:1},8,["content"]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbcztok0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-button",onClick:t[13]||(t[13]=e=>w("code"))},[(0,n.createVNode)(V)])])),_:1},8,["content"]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbcztqs0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-button",onClick:t[14]||(t[14]=e=>w("run"))},[(0,n.createVNode)(y)])])),_:1},8,["content"]),(0,n.createVNode)(l,{content:e.$t("modeling.components.Header.5m78qbcztws0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-button",onClick:t[15]||(t[15]=e=>w("visual"))},[(0,n.createVNode)($)])])),_:1},8,["content"]),(0,n.createElementVNode)("input",{type:"file",id:"files",ref:(e,t)=>{t["refFile"]=e,h.value=e},style:{display:"none"},onChange:b},null,544)])}}}),g=o(83744);const f=(0,g.Z)(p,[["__scopeId","data-v-021b3bba"]]);var v=f}}]);
//# sourceMappingURL=3803.10caf728.js.map