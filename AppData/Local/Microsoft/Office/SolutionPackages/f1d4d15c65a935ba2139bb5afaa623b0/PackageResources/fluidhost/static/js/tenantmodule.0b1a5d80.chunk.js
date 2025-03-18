"use strict";(self.webpackChunkfluidhost=self.webpackChunkfluidhost||[]).push([[83479],{64805:(e,t,s)=>{s.d(t,{J:()=>n});class r{get clientSettings(){return this.clientSettingsProvider()}constructor(e,t,s){this.dispatcher=e,this.clientSettingsProvider=t,this.loggers=s}}class n extends r{getCurrentViewIds(){const e=this.stores.appContextStore.getCurrentViewId();return e?[e]:void 0}constructor(e,t,s,r,n){super(e,r,n),this.webApiProviders=t,this.stores=s}}},60762:(e,t,s)=>{s.r(t),s.d(t,{TenantModule:()=>l});var r=s(92296),n=s(4576),o=s(43068),c=s(80332),a=s(61724),i=s(38752),g=s(64805),h=s(74844),d=s(82841);class l extends g.J{get name(){return"TenantModule"}async fetchHasProjectCogs(){const e=this.stores.userStore.getHasProjectCogs();if(null!=e)return Promise.resolve(e);const t=this.stores.appContextStore.getFlights();if(!t.EnableTryProjectFeature||!t.EnableImportPlanForProjectUsers)return Promise.reject("ProjectModule.fetchHasProjectCogs: unsupported scenario.");this.loggers.traceLogger.logTrace(508073883,h.k.Verbose,"Get Project COGS Status");try{const e=await this.webApiProviders.projectService(),t=await e.getHasProjectCogs();return this.loggers.traceLogger.logTrace(508073882,h.k.Verbose,"Get Project COGS Status - Success"),this.dispatcher.dispatchAction(new a.x(t)),t}catch(s){const e=s;return this.loggers.traceLogger.logTrace(508073881,h.k.Warning,"Get Project COGS Status - Failure ".concat((0,d.s8)(e))),Promise.reject(e)}}async fetchTenantFeedbackSettingsAsync(){this.loggers.traceLogger.logTrace(508073880,h.k.Verbose,"Fetching tenant's feedback settings [TenantId=".concat(i.B.tenantId,"]"));const e=this.stores.tenantStore.getCurrentTenantFeedbackSettings();if(null!=e)return this.loggers.traceLogger.logTrace(508073879,h.k.Verbose,"Fetching tenant's feedback settings - Cache Hit [TenantId=".concat(i.B.tenantId,"]")),Promise.resolve(e);try{const e=await this.webApiProviders.ocps(),t=await e.getTenantFeedbackSettingsAsync();return this.loggers.traceLogger.logTrace(508073878,h.k.Verbose,"Fetching tenant's feedback settings - Success [TenantId=".concat(i.B.tenantId,"]")),this.dispatcher.dispatchAction(new n.o(t)),t}catch(o){var t,s;throw this.loggers.traceLogger.logTrace(508073877,h.k.Warning,"Fetching tenant's feedback settings - Failure [TenantId=".concat(i.B.tenantId,"]").concat((0,d.s8)(o))),this.dispatcher.dispatchAction(new r.E(o.response,null===(t=o.response)||void 0===t?void 0:t.statusText,null===(s=o.error)||void 0===s?void 0:s.message)),new Error(o)}}async fetchTenantGroupSettingsAsync(){this.loggers.traceLogger.logTrace(508073876,h.k.Verbose,"Fetching tenant's group settings [TenantId=".concat(i.B.tenantId,"]"));const e=this.stores.tenantStore.getCurrentTenantGroupSettings();if(null!=e)return this.loggers.traceLogger.logTrace(508073875,h.k.Verbose,"Fetching tenant's group settings - Cache Hit [TenantId=".concat(i.B.tenantId,"]")),e;try{const e=await this.webApiProviders.taskService(),t=await e.getTenantGroupSettingsAsync();return this.loggers.traceLogger.logTrace(508073874,h.k.Verbose,"Fetching tenant's group settings - Success [TenantId=".concat(i.B.tenantId,"]")),this.dispatcher.dispatchAction(new o.Q(t)),t}catch(a){var t,s,r,n;const e=a;return this.loggers.traceLogger.logTrace(508073873,h.k.Warning,"Fetching tenant's group settings - Failure [TenantId=".concat(i.B.tenantId,"]").concat((0,d.s8)(e))),this.dispatcher.dispatchAction(new c.a(e.response,null!==(t=null===(s=e.response)||void 0===s?void 0:s.statusText)&&void 0!==t?t:"",null!==(r=null===(n=e.error)||void 0===n?void 0:n.message)&&void 0!==r?r:"")),Promise.reject(e)}}}}}]);
//# sourceMappingURL=tenantmodule.0b1a5d80.chunk.js.map