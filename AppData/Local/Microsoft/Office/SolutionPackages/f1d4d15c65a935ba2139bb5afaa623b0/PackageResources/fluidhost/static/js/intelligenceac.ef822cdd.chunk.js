"use strict";(self.webpackChunkfluidhost=self.webpackChunkfluidhost||[]).push([[30138],{36591:(e,t,a)=>{a.d(t,{C:()=>l});class l{constructor(e,t,a,l,r){this.dispatcher=e,this.logicModuleProviders=t,this.entityStoreSet=a,this.clientSettings=l,this.loggers=r}}},84063:(e,t,a)=>{a.r(t),a.d(t,{IntelligenceActionCreator:()=>T});var l=a(38752),r=a(8149),n=a(92756),s=a(59640),o=a(36591),i=a(74844),c=a(96891),d=a(80708),g=a(14740),u=a.n(g),h=a(28673),b=a.n(h),L=a(9376),p=a.n(L),P=a(38780),S=a(82841);class T extends o.C{get name(){return c.M.IntelligenceActionCreator}async fetchImageRecommendations(e,t){(await this.logicModuleProviders.intelligenceModule()).fetchImageRecommendationsAsync(e,t).catch((()=>{}))}async fetchFileRecommendations(e){this.dispatcher.dispatchAction(new r.C(e.id));const t=e.task.planId,a=this.entityStoreSet.planStore.getPlan(t),l=this.entityStoreSet.planStore.getPlanDetails(t);if(null==a||null==l){const a="Plan or plan details are null [PlanId=".concat(t,"][PlanDetailsNull=").concat(null==l,"]");return this.loggers.traceLogger.logTrace(507880208,i.k.Warning,a),void this.dispatcher.dispatchAction(new n.P(e.id,null,a,""))}let s;const o=e.task.bucketId&&this.entityStoreSet.bucketStore.getBucket(e.task.bucketId);o&&(s=o.title);const c=[];for(const r of e.task.appliedCategories){var g;const e=null!==(g=l.categories[r])&&void 0!==g?g:P.U.getLabelPlaceholderByIndex(r);c.push(e)}const h=p()(u()([e.task.createdBy,e.task.completedBy,e.task.userContentLastModifiedBy,e.task.deletedBy,...b()(e.task.assignments)]));(await this.logicModuleProviders.userModule()).fetchUsersAsync(h).then((async t=>{const l=d.F.toAugmentationLoopTaskModel(e,a.title,c,t,s);return(await this.logicModuleProviders.intelligenceModule()).fetchFileRecommendationsAsync(l)})).catch((t=>{this.loggers.traceLogger.logTrace(507880207,i.k.Warning,"FetchFileRecommendations Fail ".concat((0,S.LB)(t))),this.dispatcher.dispatchAction(new n.P(e.id,null,t,""))}))}setEntityFileSuggestionsSeen(e,t){this.dispatcher.dispatchAction(new s.N(e,t))}async queueImageRecommendationFeedback(e,t){(await this.logicModuleProviders.intelligenceModule()).queueTextToImageTrace(e,t)}async commitPendingTextToImageTraces(){(await this.logicModuleProviders.intelligenceModule()).sendPendingTextToImageTraces()}async sendFileRecommendationFeedback(e,t,a,l,r,n){const s=this.entityStoreSet.appContextStore.getFlights();if(!s.EnableFileIntelligence||s.DisableFileRecommendations)return;(await this.logicModuleProviders.intelligenceModule()).sendFileRecommendationFeedback(e,t,a,l,r,n)}constructor(e,t,a,r){super(e,t,a,l.B.clientSettings,r)}}},38780:(e,t,a)=>{a.d(t,{U:()=>l});var l,r=a(77508),n=a(86053);!function(e){function t(e){switch(e){case 0:return n.p.Strings.Labels_PinkLabelPlaceholderText;case 1:return n.p.Strings.Labels_RedLabelPlaceholderText;case 2:return n.p.Strings.Labels_YellowLabelPlaceholderText;case 3:return n.p.Strings.Labels_GreenLabelPlaceholderText;case 4:return n.p.Strings.Labels_BlueLabelPlaceholderText;case 5:return n.p.Strings.Labels_PurpleLabelPlaceholderText;case 6:return n.p.Strings.Labels_BronzeLabelPlaceholderText;case 7:return n.p.Strings.Labels_LimeLabelPlaceholderText;case 8:return n.p.Strings.Labels_AquaLabelPlaceholderText;case 9:return n.p.Strings.Labels_GrayLabelPlaceholderText;case 10:return n.p.Strings.Labels_SilverLabelPlaceholderText;case 11:return n.p.Strings.Labels_BrownLabelPlaceholderText;case 12:return n.p.Strings.Labels_CranberryLabelPlaceholderText;case 13:return n.p.Strings.Labels_OrangeLabelPlaceholderText;case 14:return n.p.Strings.Labels_PeachLabelPlaceholderText;case 15:return n.p.Strings.Labels_MarigoldLabelPlaceholderText;case 16:return n.p.Strings.Labels_LightGreenLabelPlaceholderText;case 17:return n.p.Strings.Labels_DarkGreenLabelPlaceholderText;case 18:return n.p.Strings.Labels_TealLabelPlaceholderText;case 19:return n.p.Strings.Labels_LightBlueLabelPlaceholderText;case 20:return n.p.Strings.Labels_DarkBlueLabelPlaceholderText;case 21:return n.p.Strings.Labels_LavenderLabelPlaceholderText;case 22:return n.p.Strings.Labels_PlumLabelPlaceholderText;case 23:return n.p.Strings.Labels_LightGrayLabelPlaceholderText;case 24:return n.p.Strings.Labels_DarkGrayLabelPlaceholderText;default:return""}}e.getILabelArray=function(e,a){return e.map(((e,l)=>({name:e,index:l,usageCount:a.getValueAtIndex(l),id:l.toString(),labelFormatting:{BackgroundColor:r.U4.LabelFormattingData[l].BackgroundColor,HoverBackgroundColor:r.U4.LabelFormattingData[l].HoverBackgroundColor,HoverBorderColor:r.U4.LabelFormattingData[l].HoverBorderColor,TextColor:r.U4.LabelFormattingData[l].TextColor},placeholderText:t(l)})))},e.getLabelPlaceholderByIndex=t}(l||(l={}))}}]);
//# sourceMappingURL=intelligenceac.ef822cdd.chunk.js.map