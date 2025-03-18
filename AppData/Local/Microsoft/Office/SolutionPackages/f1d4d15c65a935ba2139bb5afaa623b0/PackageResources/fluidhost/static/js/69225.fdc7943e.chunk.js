/*! For license information please see 69225.fdc7943e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfluidhost=self.webpackChunkfluidhost||[]).push([[69225],{69225:(e,t,n)=>{n.r(t),n.d(t,{createNewContainerOnExistingFile:()=>L,createNewFluidFile:()=>O});var r=n(12624),o=n(19307),a=n(76078),c=n(69953),i=n(95740),s=n(45061),l=n(76140),d=n(80946),p=n(56730),u=n(73905),h=n(14826),f=n(2642),m=n(97652),y=n(70202),w=n(83644),v=n(5881),b=n(9690);function g(e,t){const n=e.tree[".protocol"],r=(0,m.YG)(n).sequenceNumber,o=new Map,a=k(e,o);a.id=t;return{snapshotTree:a,blobs:o,ops:[],sequenceNumber:r,latestSequenceNumber:r}}function k(e,t){const n={blobs:{},trees:{},unreferenced:e.unreferenced},r=Object.keys(e.tree);for(const o of r){const r=e.tree[o];switch(r.type){case f.Z.Tree:n.trees[o]=k(r,t);break;case f.Z.Blob:{const e="string"===typeof r.content?(0,y.Xg)(r.content,"utf8"):r.content,a=(0,h.A)();n.blobs[o]=a,t.set(a,e);break}case f.Z.Handle:case f.Z.Attachment:throw new Error("No ".concat(r.type," should be present for detached summary!"));default:(0,w.$)(r,"Unknown tree type ".concat(r.type))}}return n}function T(e){var t;if(!(0,m.ub)(e))throw new Error("App and protocol summary required for create new path!!");const n=e.tree[".app"],r=e.tree[".protocol"],o=(0,m.YG)(r),a={type:f.Z.Blob,content:JSON.stringify(o)};r.tree.attributes=a;return{entries:null!==(t=I({type:f.Z.Tree,tree:{".protocol":r,".app":n}}).entries)&&void 0!==t?t:[],message:"app",sequenceNumber:o.sequenceNumber,type:"container"}}function I(e){const t={type:"tree",entries:[]},n=Object.keys(e.tree);for(const o of n){var r;const n=e.tree[o];let a,c;switch(n.type){case f.Z.Tree:a=I(n),c=n.unreferenced;break;case f.Z.Blob:a={type:"blob",content:"string"===typeof n.content?n.content:(0,y.Km)(n.content,"base64"),encoding:"string"===typeof n.content?"utf-8":"base64"};break;case f.Z.Handle:throw new Error("No handle should be present for first summary!!");default:throw new Error("Unknown tree type ".concat(n.type))}const i={path:encodeURIComponent(o),type:(0,v.hK)(n),value:a,unreferenced:c};null===(r=t.entries)||void 0===r||r.push(i)}return t}async function N(e){const{containerSnapshot:t,getStorageToken:n,logger:r,initialUrl:o,forceAccessTokenViaAuthorizationHeader:c,epochTracker:i,telemetryName:d,fetchType:p,validateResponseCallback:u}=e;return(0,l.gO)((async e=>{const f=await n(e,d);return a.Bt.timedExecAsync(r,{eventName:d},(async n=>{const a=JSON.stringify(t);let m,y,w=!1;const v=(0,h.A)();let g="--".concat(v,"\r\n");if(g+="Authorization: Bearer ".concat(f,"\r\n"),g+="X-HTTP-Method-Override: POST\r\n",g+="Content-Type: application/json\r\n",g+="_post: 1\r\n",g+="\r\n".concat(a,"\r\n"),g+="\r\n--".concat(v,"--"),g.length<=l.K3){const e=new URL(o);e.searchParams.set("ump","1"),m=e.href,y={"Content-Type":"multipart/form-data;boundary=".concat(v)},w=!0}else{const e=(0,s.$)(o,f,c);m=e.url,y={...e.headers,"Content-Type":"application/json"},g=a}const k=await(0,b.M)((async()=>i.fetchAndParseAsJSON(m,{body:g,headers:y,method:"POST"},p,w)),d,r);return null===u||void 0===u||u(k.content),n.end({headers:0!==Object.keys(y).length||void 0,attempts:e.refresh?2:1,...k.propsToLog}),k.content}))}))}var C=n(53727),S=n(95975);const A=e=>!!e.match(/["*/:<>?\\|]+/g);async function O(e,t,n,h,f,m,y,w,v,k,I){if(A(t.filename))throw new o.OI("Invalid filename for createNew",c.P.invalidFileNameError,{driverVersion:C.z});let O,U,L="";if(void 0===h)O=await async function(e,t,n,r,c){const d=t.filePath?encodeURIComponent("/".concat(t.filePath)):"",u=encodeURIComponent("".concat(t.filename,".tmp")),h="".concat((0,p.lA)((0,l.$z)(t.siteUrl)),"/drives/").concat(t.driveId,"/items/root:/").concat(d,"/").concat(u,":/content?@name.conflictBehavior=rename&select=id,name,parentReference");return(0,l.gO)((async t=>{const l=await e(t,"CreateNewFile");return a.Bt.timedExecAsync(n,{eventName:"createNewEmptyFile"},(async e=>{const{url:t,headers:a}=(0,s.$)(h,l,c);a["Content-Type"]="application/json";const d=await(0,b.M)((async()=>r.fetchAndParseAsJSON(t,{body:void 0,headers:a,method:"PUT"},"createFile")),"createFile",n),p=d.content;if(null===p||void 0===p||!p.id)throw new o.OI("ODSP CreateFile call returned no item ID (for empty file)",i.f.incorrectServerResponse,{driverVersion:C.z});return e.end({headers:0!==Object.keys(a).length||void 0,...d.propsToLog}),p.id}),{end:!0,cancel:"error"})}))}(e,t,n,f,w);else{const r=await async function(e,t,n,r,a,c){const s=t.filePath?encodeURIComponent("/".concat(t.filePath)):"",d=encodeURIComponent(t.filename),u="".concat((0,p.lA)((0,l.$z)(t.siteUrl)),"/drives/").concat(t.driveId,"/items/root:")+"".concat(s,"/").concat(d),h=T(r),f=(0,l.wF)(t.createLinkType),m="".concat(u,":/opStream/snapshots/snapshot").concat(f?"?".concat(f):"");return N({containerSnapshot:h,getStorageToken:e,logger:n,initialUrl:m,forceAccessTokenViaAuthorizationHeader:c,epochTracker:a,telemetryName:"CreateNewFile",fetchType:"createFile",validateResponseCallback:e=>{if(null===e||void 0===e||!e.itemId)throw new o.OI("ODSP CreateFile call returned no item ID",i.f.incorrectServerResponse,{driverVersion:C.z})}})}(e,t,n,h,f,w);O=r.itemId,L=r.id,U=function(e,t,n,r){if(!e)return;let o;if(n){const{sharing:n}=t;if(!n)return;o={createLink:{type:e,link:n.sharingLink?{scope:n.sharingLink.scope,role:n.sharingLink.type,webUrl:n.sharingLink.webUrl,...n.sharingLink}:void 0,error:n.error,shareId:n.shareId}}}else if(r){const{sharing:n,sharingLink:r,sharingLinkErrorReason:a}=t;if(!r&&!a)return;o={createLink:{type:e,link:r,error:a,shareId:null===n||void 0===n?void 0:n.shareId}}}return o}(t.createLinkType,r,k,I)}const P=(0,d.m)({...t,itemId:O,dataStorePath:"/"}),F=new u.Y,R=await F.resolve({url:P,headers:{[S.t.isClpCompliantApp]:v}});if(m.docId=R.hashedDocumentId,m.resolvedUrl=R,R.shareLinkInfo=U,void 0!==h&&y){(0,r.v)(void 0!==L,515);const e=g(h,L);await f.put((0,l.wL)(R),e)}return R}var U=n(27939);async function L(e,t,n,r,o,a,c,i,s){if(void 0===r)throw new U.e("createNewSummary must exist to create a new container");const h="".concat((0,p.lA)((0,l.$z)(t.siteUrl)),"/drives/").concat(t.driveId,"/items/").concat(t.itemId),f=T(r),m="".concat(h,"/opStream/snapshots/snapshot"),{id:y}=await N({containerSnapshot:f,getStorageToken:e,logger:n,initialUrl:m,forceAccessTokenViaAuthorizationHeader:i,epochTracker:o,telemetryName:"CreateNewContainerOnExistingFile",fetchType:"uploadSummary"}),w=(0,d.m)({...t,dataStorePath:"/"}),v=new u.Y,b=await v.resolve({url:w,headers:{[S.t.isClpCompliantApp]:s}});if(a.docId=b.hashedDocumentId,a.resolvedUrl=b,c){const e=g(r,y);await o.put((0,l.wL)(b),e)}return b}}}]);
//# sourceMappingURL=69225.fdc7943e.chunk.js.map