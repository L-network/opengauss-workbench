"use strict";(self["webpackChunkweb_ui"]=self["webpackChunkweb_ui"]||[]).push([[4939],{4939:function(e,l,t){t.r(l),t.d(l,{default:function(){return n}});var a=t(70821),o=t(57330),r=(0,a.defineComponent)({emits:["finish","cancel"],setup(e,{expose:l,emit:t}){const{t:r}=(0,o.QT)(),u=(0,a.reactive)({show:!1,title:r("operation.ClusterBackupDlg.5mplmzbrpas0"),loading:!1,formData:{clusterId:"",backupPath:"",remark:""},rules:{}}),n=(0,a.ref)(null),s=()=>{u.show=!1,(0,a.nextTick)((()=>{n.value?.clearValidate(),n.value?.resetFields()}))},m=()=>{n.value?.validate().then((e=>{e||(t("finish",u.formData),u.show=!1)}))},i=e=>{u.show=!0,u.title=r("operation.ClusterBackupDlg.5mplmzbrpas0"),u.formData.clusterId=e,u.formData.backupPath="",u.formData.remark=""};return l({open:i}),(e,l)=>{const t=(0,a.resolveComponent)("a-input"),o=(0,a.resolveComponent)("a-form-item"),r=(0,a.resolveComponent)("a-textarea"),i=(0,a.resolveComponent)("a-form"),p=(0,a.resolveComponent)("a-modal");return(0,a.openBlock)(),(0,a.createBlock)(p,{"mask-closable":!1,"esc-to-close":!1,visible:(0,a.unref)(u).show,title:(0,a.unref)(u).title,"ok-loading":(0,a.unref)(u).loading,"modal-style":{width:"450px"},onOk:m,onCancel:s,okText:e.$t("operation.ClusterBackupDlg.5mplmzbrmkg0")},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(i,{model:(0,a.unref)(u).formData,ref:(e,l)=>{l["formRef"]=e,n.value=e},"label-col":{style:{width:"200px"}},rules:(0,a.unref)(u).rules},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(o,{label:e.$t("operation.ClusterBackupDlg.5mplmzbrntg0")},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(t,{modelValue:(0,a.unref)(u).formData.clusterId,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,a.unref)(u).formData.clusterId=e),disabled:""},null,8,["modelValue"])])),_:1},8,["label"]),(0,a.createVNode)(o,{label:e.$t("operation.ClusterBackupDlg.5mplmzbrosg0")},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(r,{modelValue:(0,a.unref)(u).formData.remark,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,a.unref)(u).formData.remark=e),placeholder:e.$t("operation.ClusterBackupDlg.5mplmzbrp1s0")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1},8,["model","rules"])])),_:1},8,["visible","title","ok-loading","okText"])}}});const u=r;var n=u}}]);
//# sourceMappingURL=4939.2f583d9d.js.map