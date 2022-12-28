"use strict";(self["webpackChunkweb_ui"]=self["webpackChunkweb_ui"]||[]).push([[500,733],{89965:function(e,t,a){a.d(t,{AH:function(){return g},Bd:function(){return p},C7:function(){return I},DG:function(){return E},Du:function(){return _},H7:function(){return q},Iz:function(){return Z},J6:function(){return O},Jh:function(){return b},NQ:function(){return F},QS:function(){return k},Qt:function(){return C},R7:function(){return x},Rq:function(){return c},SB:function(){return m},SW:function(){return $},UL:function(){return f},Up:function(){return h},WK:function(){return D},Yn:function(){return T},gp:function(){return d},j9:function(){return P},nB:function(){return N},qR:function(){return V},qo:function(){return v},sZ:function(){return S},v$:function(){return u},vs:function(){return r},w0:function(){return L},wB:function(){return z},x9:function(){return U},xl:function(){return B},yA:function(){return s},yf:function(){return y}});var n=a(15784),o=a(9669),l=a.n(o),i=a(90989);const r=(e,t,a,n)=>l().get(`/modeling/dataflow/dataSourceDb/getTablesBySchema/${e}/${t}/${a}`,n||{}),s=(e,t)=>l().get(`/modeling/dataflow/dataSourceDb/getFieldsByTable/${e}`,t||{}),d=e=>l().get("/modeling/dataflow/list",{params:e}),u=e=>l().post("/modeling/dataflow/add",e||{}),c=e=>l()["delete"](`/modeling/dataflow/delete/${e}`),f=e=>l().put("/modeling/dataflow/edit",e||{}),p=e=>l().get(`/modeling/dataflow/getById/${e}`),m=(e,t)=>l().get(`/modeling/dataflow/dataSourceDb/getSchemaByClusterNodeId/${e}/${t}`,e||{}),g=e=>l().post("/modeling/dataflow/getSql",e||{}),b=e=>l().post("/modeling/dataflow/runSql",e||{});let w=!0;const h=(e,t,a)=>new Promise((o=>{w&&(w=!1,l().put("/modeling/dataflow/edit",{id:e,operatorContent:JSON.stringify(t)}).then((e=>{o(!0),w=!0,200===Number(e.code)&&(a||n.Z.success({content:i.Z.global.t("modeling.dy_common.saveSuccess")}))})).catch((()=>{o(!1),a||n.Z.error({content:i.Z.global.t("modeling.dy_common.saveFailed")}),w=!0})))})),v=e=>l().get("/modeling/dataflow/dataSourceDb/list",e||{}),D=e=>l().post("/modeling/dataflow/getResultFieldsByOperator",e||{}),$=e=>l().post("/modeling/dataflow/visualization/params/add",e||{}),y=e=>l().put("/modeling/dataflow/visualization/params/edit",e||{}),x=e=>l()["delete"](`/modeling/dataflow/visualization/params/delete/${e}`),B=e=>l().post("/modeling/dataflow/visualization/params/generateChart",e||{}),N=(e,t)=>l().get(`/modeling/dataflow/visualization/params/getListByOperatorId/${e}`,t||{}),V=e=>l().post("/modeling/dataflow/visualization/snapshot/add",e||{}),k=(e,t)=>l().get(`/modeling/dataflow/visualization/snapshot/getListByDataFlowId/${e}`,t||{}),C=e=>l()["delete"](`/modeling/dataflow/visualization/snapshot/delete/${e}`),S=(e,t)=>l().get(`/modeling/dataflow/visualization/report/getListByDataFlowId/${e}`,{params:t||{}}),z=e=>l().post("/modeling/dataflow/visualization/report/add",e||{}),I=e=>l().put("/modeling/dataflow/visualization/report/update",e||{}),Z=e=>l()["delete"](`/modeling/dataflow/visualization/report/delete/${e}`),_=e=>l().get(`/modeling/dataflow/visualization/report/share/getByReportId/${e}`),T=(e,t)=>l().get(`/modeling/dataflow/visualization/customDimension/getListByOperatorId/${e}`,{params:t||{}}),O=e=>l().post("/modeling/dataflow/visualization/customDimension/add",e||{}),F=e=>l().put("/modeling/dataflow/visualization/customDimension/edit",e||{}),q=e=>l()["delete"](`/modeling/dataflow/visualization/customDimension/delete/${e}`),U=(e,t)=>l().get(`/modeling/visualization/report/share/getMapGeo/${e}`,t||{}),E=e=>l().post("/modeling/dataflow/visualization/params/uploadGeo",e||{}),L=(e,t)=>l().get(`/modeling/dataflow/visualization/params/getGeo/${e}`,{params:t||{}}),P=e=>l()["delete"](`/modeling/dataflow/visualization/params/deleteGeo/${e}`)},8603:function(e,t,a){a.d(t,{M:function(){return r}});a(57658);var n=a(89965),o=a(95684),l=a(15784);const i={graph:null,dataFlowInfo:{},rawData:{},useData:{},useDatabase:"",useTable:[]},r=(0,o.Q_)("dataFlow",{state(){return JSON.parse(JSON.stringify(i))},getters:{getTableSelectList:e=>e.useDatabase?e.useData[e.useDatabase]:[],getFieldsSelectList:e=>{if(e.useDatabase&&e.useTable.length>0){const t=e.useData[e.useDatabase],a=[];return e.useTable.forEach((e=>{const n={group:e,fields:[]},o=t.findIndex((t=>t.tablename===e));-1!==o&&(n.fields=t[o].fields),a.push(n)})),a}return[]},getFlowDataInfo:e=>e.dataFlowInfo,getFieldsByTable:e=>t=>{if(e.useDatabase){const a=e.useData[e.useDatabase];if(0===t||"0"===t){const t=a.findIndex((t=>t.tablename===e.useTable[0]));return-1===t?[]:a[t].fields}{const e=a.findIndex((e=>e.tablename===t));return-1===e?[]:a[e].fields}}return[]},getUseTable:e=>e.useTable,getUseDatabase:e=>e.useDatabase},actions:{setGraph(e){this.$patch((t=>{t.graph=e}))},initState(){return new Promise((e=>{this.$patch((t=>{t.useData=[],t.useDatabase="",t.useTable=[],t.rawData=[],t.dataFlowInfo=[],e(!0)}))}))},clearUse(){return new Promise((e=>{this.$patch((t=>{t.useDatabase="",t.useTable=[],e(!0)}))}))},setFlowDataInfo(e){this.$patch((t=>t.dataFlowInfo=e))},setDatabaseInfo(e,t,a){return new Promise(((o,i)=>{this.$patch((r=>{r.useDatabase=`${e}|,|${t}|,|${a}`,r.useTable=[],Object.keys(r.rawData).includes(`${e}|,|${t}|,|${a}`)?o(!0):(0,n.vs)(e,t,a).then((n=>{if(200===Number(n.code)){const l=n.data.map((e=>({...e,tables:{}})));r.rawData[`${e}|,|${t}|,|${a}`]=l,r.useData[`${e}|,|${t}|,|${a}`]=l,o(!0)}else l.Z.error("database not found"),i(!0)})).catch((()=>{l.Z.error("database not found"),i(!0)}))}))}))},setDatabaseTableInfo(e,t){return new Promise((a=>{this.$patch((o=>{if(e){t&&(t.tableKey||0===t.tableKey)?o.useTable[t.tableKey]=e:t&&t.noUse||o.useTable.push(e);const l=o.rawData[o.useDatabase].findIndex((t=>t.tablename===e));Object.keys(o.rawData[o.useDatabase][l].tables).includes(e)?a(!1):(0,n.yA)(`${o.useDatabase.split("|,|").join("/")}/${e}`).then((e=>{a(!0),o.rawData[o.useDatabase][l].fields=e.data,o.useData[o.useDatabase][l].fields=e.data}))}else a(!1)}))}))},removeDatabaseTable(e){return new Promise((t=>{this.$patch((a=>{const n=a.useTable.indexOf(e);-1!==n?(a.useTable.splice(n,1),t(!0)):t(!1)}))}))}}})},733:function(e,t,a){a.r(t),a.d(t,{checkDisabled:function(){return n},saveData:function(){return o}});const n=(e,t,a)=>{if(!e||0===e.length)return!1;if("string"===typeof e[0]||"number"===typeof e[0])return-1!==e.indexOf(t);{const n=e;return-1!==n.findIndex((e=>e[a||"value"]===t))}},o=(e,t,a)=>{if(console.log(e,t,a),a){const n=a.getData();a?.setData({...n,[e]:JSON.parse(JSON.stringify(t))},{overwrite:!0})}}},63736:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(70821),o=a(29067),l=(0,n.defineComponent)({props:{content:{type:String,required:!0},text:{type:String,required:!0},otherWidth:{type:Number,required:!1},fontSize:{type:Number,required:!1}},setup(e){const t=e,a=(0,n.ref)(),l=(0,n.ref)(!1),i=()=>{let e=a.value.parentNode.offsetWidth,n=a.value.offsetWidth+(t.otherWidth||0===t.otherWidth?t.otherWidth:24);l.value=!(n>e)};return(e,r)=>((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(o.Z),{content:t.content,disabled:l.value},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("span",{onMouseover:i},[(0,n.renderSlot)(e.$slots,"default")],32),(0,n.createElementVNode)("span",{class:"get-width",ref:(e,t)=>{t["contentRef"]=e,a.value=e}},(0,n.toDisplayString)(t.text),513)])),_:3},8,["content","disabled"]))}}),i=a(83744);const r=(0,i.Z)(l,[["__scopeId","data-v-6f1614ab"]]);var s=r},50500:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});a(57658);var n=a(70821),o=a(96336),l=a(73019),i=a(62e3),r=a(51121),s=a(2768),d=a(18933),u=a(733),c=a(63736),f=a(8603);const p={class:"tab-content d-a-form"},m={class:"d-form-item-label mb-s"},g={class:"label-text"},b=["onClick"];var w=(0,n.defineComponent)({setup(e,{expose:t}){const a=o.ZP.Option,w=o.ZP.OptGroup,h=(0,f.M)(),v={condition:[{value:"as",label:"as"}]},D=(0,n.computed)((()=>h.getFieldsSelectList)),$=()=>{(0,u.saveData)("mappings",y.mappings,y.cell)},y=(0,n.reactive)({activeKey:"1",cell:null,mappings:[]}),x=e=>{y.cell=e;let{data:t}=e;y.mappings=t.mappings?t.mappings:[]},B=(e,t)=>{"add"===e?y.mappings.push({field:null,condition:null,value:""}):y.mappings.splice(t,1),$()};return t({init:x}),(e,t)=>((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(l.Z),{class:"d-a-tabs",activeKey:(0,n.unref)(y).activeKey,"onUpdate:activeKey":t[1]||(t[1]=e=>(0,n.unref)(y).activeKey=e),centered:"",size:"small",tabBarGutter:40},{default:(0,n.withCtx)((()=>[(0,n.createVNode)((0,n.unref)(i.Z),{key:"1",title:e.$t("modeling.combination.MappingOperator.5me6giyzpck0")},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",m,[(0,n.createElementVNode)("div",g,(0,n.toDisplayString)(e.$t("modeling.combination.MappingOperator.5me6giyzq4s0")),1),(0,n.createElementVNode)("div",{class:"d-control-add",onClick:t[0]||(t[0]=e=>B("add"))},"+")]),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(y).mappings,((t,l)=>((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(r.Z),{align:"center",class:"mb-s",key:`item${l}`},{default:(0,n.withCtx)((()=>[(0,n.createVNode)((0,n.unref)(s.Z),{span:8,class:"mr-xs"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)((0,n.unref)(o.ZP),{modelValue:t.field,"onUpdate:modelValue":e=>t.field=e,placeholder:e.$t("modeling.combination.MappingOperator.5me6giyzqds0"),"trigger-props":{contentClass:"d-a-select-dropdown"},showSearch:"",style:{width:"100%"},onChange:$},{label:(0,n.withCtx)((({data:e})=>[(0,n.createVNode)(c["default"],{text:e?.label,content:e?.label,"other-width":0},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e?.label),1)])),_:2},1032,["text","content"])])),default:(0,n.withCtx)((()=>[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(D),((e,t)=>((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(w),{key:`fieldsGroup${t}`,label:e.group},{label:(0,n.withCtx)((()=>[(0,n.createVNode)(c["default"],{text:e.group,content:e.group},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e.group),1)])),_:2},1032,["text","content"])])),default:(0,n.withCtx)((()=>[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.fields,((t,o)=>((0,n.openBlock)(),(0,n.createBlock)(c["default"],{text:t.name,key:`field${o}`,content:`${e.group} . ${t.name}`},{default:(0,n.withCtx)((()=>[(0,n.createVNode)((0,n.unref)(a),{value:`${e.group}.${t.name}`,label:t.name},null,8,["value","label"])])),_:2},1032,["text","content"])))),128))])),_:2},1032,["label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])])),_:2},1024),(0,n.createVNode)((0,n.unref)(s.Z),{span:5,class:"mr-xs"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)((0,n.unref)(o.ZP),{modelValue:t.condition,"onUpdate:modelValue":e=>t.condition=e,options:v.condition,onChange:$,placeholder:e.$t("modeling.combination.MappingOperator.5me6giyzqmo0"),style:{width:"100%"},dropdownClassName:"d-a-select-dropdown"},null,8,["modelValue","onUpdate:modelValue","options","placeholder"])])),_:2},1024),(0,n.createVNode)((0,n.unref)(s.Z),{span:7,class:"mr-xs"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)((0,n.unref)(d.ZP),{"max-length":140,"show-word-limit":"",modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,placeholder:e.$t("modeling.combination.MappingOperator.5me6giyzqq80"),onBlur:$},null,8,["modelValue","onUpdate:modelValue","placeholder"])])),_:2},1024),(0,n.createVNode)((0,n.unref)(s.Z),{span:1},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"d-control-remove",onClick:e=>B("delete",l)},"-",8,b)])),_:2},1024)])),_:2},1024)))),128))])])),_:1},8,["title"])])),_:1},8,["activeKey"]))}}),h=a(83744);const v=(0,h.Z)(w,[["__scopeId","data-v-6048dc9a"]]);var D=v}}]);
//# sourceMappingURL=500.24564762.js.map