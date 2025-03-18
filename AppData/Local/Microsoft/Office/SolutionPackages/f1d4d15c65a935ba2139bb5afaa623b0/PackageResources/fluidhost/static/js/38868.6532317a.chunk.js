/*! For license information please see 38868.6532317a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfluidhost=self.webpackChunkfluidhost||[]).push([[38868],{16487:(e,t,n)=>{n.r(t),n.d(t,{OdspSummaryUploadManager:()=>p});var a=n(70202),r=n(83644),o=n(12624),s=n(5881),c=n(2642),i=n(72264),l=n(76078),d=n(97652),h=n(45061),m=n(76140);class p{constructor(e,t,n,a,r,o){this.snapshotUrl=e,this.getStorageToken=t,this.epochTracker=a,this.forceAccessTokenViaAuthorizationHeader=r,this.relayServiceTenantAndSessionId=o,this.mc=(0,i.Ln)(n)}async writeSummaryTree(e,t){void 0!==this.lastSummaryProposalHandle&&this.lastSummaryProposalHandle!==t.proposalHandle&&this.mc.logger.sendTelemetryEvent({eventName:"LastSummaryProposedHandleMismatch",ackedSummaryProposedHandle:t.proposalHandle,lastSummaryProposalHandle:this.lastSummaryProposalHandle});const n=await this.writeSummaryTreeCore(t.ackHandle,t.referenceSequenceNumber,e),a=n?n.id:void 0;if(!n||!a)throw new Error("Failed to write summary tree");return this.lastSummaryProposalHandle=a,a}async writeSummaryTreeCore(e,t,n){const a=(0,d.ub)(n),{snapshotTree:r,blobs:o}=await this.convertSummaryToSnapshotTree(e,n,".app"),s={entries:r.entries,message:"app",sequenceNumber:t,type:a||void 0===e?"container":"channel"};return(0,m.gO)((async n=>{const a=await this.getStorageToken(n,"WriteSummaryTree"),{url:r,headers:c}=(0,h.$)("".concat(this.snapshotUrl,"/snapshot"),a,this.forceAccessTokenViaAuthorizationHeader);c["Content-Type"]="application/json";const i=this.relayServiceTenantAndSessionId();void 0!==i&&(c["If-Match"]="fluid:sessionid=".concat(i).concat(e?";containerid=".concat(e):""));const d=JSON.stringify(s);return l.Bt.timedExecAsync(this.mc.logger,{eventName:"uploadSummary",attempt:n.refresh?2:1,hasClaims:!!n.claims,hasTenantId:!!n.tenantId,headers:0!==Object.keys(c).length||void 0,blobs:o,size:d.length,referenceSequenceNumber:t,type:s.type},(async()=>(await this.epochTracker.fetchAndParseAsJSON(r,{body:d,headers:c,method:"POST"},"uploadSummary")).content))}))}async convertSummaryToSnapshotTree(e,t,n){var i;let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null===(i=this.mc.config.getBoolean("Fluid.Driver.Odsp.MarkUnreferencedNodes"))||void 0===i||i;const d={type:"tree",entries:[]};let h=0;const m=Object.keys(t.tree);for(const p of m){const i=t.tree[p];let m,u,y;switch(i.type){case c.Z.Tree:{const t=await this.convertSummaryToSnapshotTree(e,i,n);u=t.snapshotTree,y=l?i.unreferenced:void 0,h+=t.blobs;break}case c.Z.Blob:u="string"===typeof i.content?{type:"blob",content:i.content,encoding:"utf-8"}:{type:"blob",content:(0,a.Km)(i.content,"base64"),encoding:"base64"},h++;break;case c.Z.Handle:{if(!e)throw Error("Parent summary does not exist to reference by handle.");let t=i.handle;t.length>0&&!t.startsWith("/")&&(t="/".concat(t));const a="".concat(n).concat(t);m="".concat(e,"/").concat(a);break}case c.Z.Attachment:m=i.id;break;default:(0,r.$)(i,"Unknown type: ".concat(i.type))}const S={path:encodeURIComponent(p),type:(0,s.hK)(i)};let b;if(u)(0,o.v)(void 0===m,173),b={value:u,...S,unreferenced:y};else{if(!m)throw new Error("Invalid tree entry for ".concat(i.type));b={...S,id:m}}d.entries.push(b)}return{snapshotTree:d,blobs:h}}}}}]);
//# sourceMappingURL=38868.6532317a.chunk.js.map