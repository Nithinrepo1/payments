"use strict";(self.webpackChunkfluidhost=self.webpackChunkfluidhost||[]).push([[14664],{64805:(e,t,r)=>{r.d(t,{J:()=>o});class s{get clientSettings(){return this.clientSettingsProvider()}constructor(e,t,r){this.dispatcher=e,this.clientSettingsProvider=t,this.loggers=r}}class o extends s{getCurrentViewIds(){const e=this.stores.appContextStore.getCurrentViewId();return e?[e]:void 0}constructor(e,t,r,s,o){super(e,s,o),this.webApiProviders=t,this.stores=r}}},97619:(e,t,r)=>{r.r(t),r.d(t,{TelemetryModule:()=>n});var s=r(64805),o=r(18113),i=r(96891),g=r(74844),a=r(82841);class n extends s.J{get name(){return"TelemetryModule"}logPlanCreatedUsage(e){this.loggers.traceLogger.logTrace(507897365,g.k.Verbose,"Log Plan Created Usage [Component=".concat(e,"]")),this.loggers.usageLogger.logData(e,i.M.CreatePlan,{page:this.stores.appContextStore.getCurrentPage()});const t=this.stores.appContextStore.getCurrentUserId(),r=this.stores.userStore.getUserDetailsById(t);null!==r&&void 0!==r&&r.isUserAccessWithin24Hours()&&this.loggers.usageLogger.logData(e,i.M.CreatePlanIn24h,{page:this.stores.appContextStore.getCurrentPage()})}async logNotificationTelemetry(e,t){this.loggers.traceLogger.logTrace(507897364,g.k.Verbose,"logNotificationTelemetry");const r=null!==t&&void 0!==t?t:o.Q.Priority10;try{const t=await this.webApiProviders.taskService();return await t.logNotificationTelemetry(e,r),this.loggers.traceLogger.logTrace(507897363,g.k.Verbose,"logNotificationTelemetry - Success"),Promise.resolve()}catch(s){const e=s;return this.loggers.traceLogger.logTrace(507897362,g.k.Warning,"logNotificationTelemetry - Fail ".concat((0,a.s8)(e))),Promise.reject(e)}}}}}]);
//# sourceMappingURL=telemetrymodule.9c04e5ff.chunk.js.map