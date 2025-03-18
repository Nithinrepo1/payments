"use strict";(self.webpackChunkfluidhost=self.webpackChunkfluidhost||[]).push([[15596],{94266:(e,t,i)=>{i.d(t,{R:()=>r});var n=i(45078);class r{appendSharepointAuthenticationChallengeHeaders(e){return e[n.Er.AuthenticationChallengeHeaderName]=n.Er.AuthenticationChallengeHeaderValue,e}getDefaultRequestTelemetryConfig(e){return{apiName:this.name,methodName:e,requestHeadersToLog:this.loggableRequestHeaders,responseHeadersToLog:this.loggableResponseHeaders}}extractSkipTokenFromNextLink(e){try{const t=new URL(e);return new URLSearchParams(t.search).get(this.skipTokenParam)}catch{return null}}constructor(e,t,i){this.name=e,this.hostDomain=t,this.ajaxClient=i,this.skipTokenKey="@odata.nextLink",this.skipTokenParam="$skiptoken",this.vBetaUrlToken="beta",this.v1UrlToken="v1.0",this.loggableRequestHeaders=[n.a8.ClientRequestId],this.loggableResponseHeaders=[n.Qu.RequestId,n.Qu.ClientRequestId,n.Qu.TCorrelationId]}}},10832:(e,t,i)=>{i.r(t),i.d(t,{OdspService:()=>m});var n=i(95783),r=i(45078),s=i(23918),o=i(26796),a=i(94266),l=i(33411),d=i.n(l),u=i(98502),h=i(91246),c=i(61739),p=i(89962);class m extends a.R{async getDriveItemAsync(e){const t="".concat(this.hostDomain,"/").concat(this.v1UrlToken,"/drives/").concat(e.driveId,"/items/").concat(e.itemId),i=await this.ajaxClient.executeRequest(t,{telemetryConfig:this.getDefaultRequestTelemetryConfig("getDriveItem"),headers:new Headers(this.appendSharepointAuthenticationChallengeHeaders({}))});try{const e=await i.clone().json();if(null==e)throw new Error("No drive item returned");return s.Y.builder.fromGraphDriveItemResource(e).build()}catch(n){throw u.g.generateAjaxClientError(i,n)}}async getDriveItemThumbnailAsync(e){const t="".concat(this.hostDomain,"/").concat(this.v1UrlToken,"/groups/").concat(e.groupId,"/drive/root:/").concat(e.itemPath,":/thumbnails/0/large/url"),i=await this.ajaxClient.executeRequest(t,{telemetryConfig:this.getDefaultRequestTelemetryConfig("getDriveItemThumbnail")});try{const e=await i.clone().json(),t=e?e.value:null;if(!t)throw new Error("No item thumbnail url returned");return t}catch(n){throw u.g.generateAjaxClientError(i,n)}}async getDocumentsInGroupFolderAsync(e){const t=e.folderId?"/items/".concat(e.folderId,"/children"):"/root/children",i=e.skipToken||"".concat(this.hostDomain,"/groups/").concat(e.groupId,"/drive").concat(t),n=await this.ajaxClient.executeRequest(i,{telemetryConfig:this.getDefaultRequestTelemetryConfig("getDocumentsInGroupFolderAsync"),headers:new Headers(this.appendSharepointAuthenticationChallengeHeaders({}))});try{const e=await n.clone().json();if(null==e)throw new Error("No group documents returned");const t=e.value;return{data:d()(t,(e=>s.Y.builder.fromGraphDriveItemResource(e).build())),skipToken:(0,c.n0)(e[this.skipTokenKey])}}catch(r){throw u.g.generateAjaxClientError(n,r)}}async createUploadSessionAsync(e){const t="".concat(this.hostDomain,"/").concat(this.v1UrlToken,"/groups('").concat(e.groupId,"')/drive/root:/").concat(encodeURIComponent(e.itemPath),":/createUploadSession"),i=await this.ajaxClient.executeRequest(t,{method:n.PJ.Post,body:JSON.stringify({item:{"@microsoft.graph.conflictBehavior":"rename"}}),headers:{[r.Lr.ContentType]:r.Mq.Json},telemetryConfig:this.getDefaultRequestTelemetryConfig("createUploadSessionAsync")});try{const t=await i.clone().json();if(null==t)throw new Error("No response returned");return e.session=e.session.setProperty("uploadUrl",t.uploadUrl),e.session=e.session.setProperty("bytesSent",0),e.session=e.session.setProperty("expirationDateTime",t.expirationDateTime),e.session}catch(s){throw u.g.generateAjaxClientError(i,s)}}async uploadBytesToSessionAsync(e){const{b64Data:t,uploadSession:i,finalByteIndex:s,initialByteIndex:a,totalSize:l}=e,d=i.uploadUrl,c=(0,p.FI)(t),m=await this.ajaxClient.executeRequest(d,{method:n.PJ.Put,headers:{[r.Lr.ContentRange]:(0,p.X7)(a,s,l),[r.Lr.ContentType]:r.Mq.OctetStream},body:c,telemetryConfig:this.getDefaultRequestTelemetryConfig("uploadBytesToSessionAsync")});try{var f,g,y,x,w,v,I;const e=await m.clone().json();if(null==e)throw new Error("No response returned");const t=null!==(f=e.id)&&void 0!==f?f:null,n=null!==(g=e.name)&&void 0!==g?g:null,r=null!==(y=e.size)&&void 0!==y?y:null,a=null!==(x=e.expirationDateTime)&&void 0!==x?x:i.expirationDateTime;return o.z.builder.withPropertyBag({bytesSent:s+1,expirationDateTime:a,groupId:i.groupId,id:null!==(w=i.id)&&void 0!==w?w:h.o.generate(),itemId:t&&t!==i.itemId?t:i.itemId,itemName:n&&n!==i.itemName?n:null!==(v=i.itemName)&&void 0!==v?v:"",itemSize:r&&r!==i.itemSize?r:null!==(I=i.itemSize)&&void 0!==I?I:0,lastUploadRequestSucceeded:!0,uploadUrl:i.uploadUrl,name:i.name,webUrl:e.webUrl,nextExpectedRanges:e.nextExpectedRanges}).build()}catch(b){throw u.g.generateAjaxClientError(m,b)}}async cancelUploadSessionAsync(e){const{session:t}=e,i=t.uploadUrl;await this.ajaxClient.executeRequest(i,{method:n.PJ.Delete,telemetryConfig:this.getDefaultRequestTelemetryConfig("cancelUploadSessionAsync")})}async shareDriveItemAsync(e){const t="".concat(this.hostDomain,"/").concat(this.v1UrlToken,"/drives/").concat(e.driveId,"/items/").concat(e.itemId,"/invite"),i=[];for(const n of e.userIds){const e={objectId:n};i.push(e)}const s={recipients:i,requireSignIn:!0,sendInvitation:!1,roles:["write"]};await this.ajaxClient.executeRequest(t,{method:n.PJ.Post,telemetryConfig:this.getDefaultRequestTelemetryConfig("shareDriveItemAsync"),body:JSON.stringify(s),headers:{[r.Lr.ContentType]:r.Mq.Json}})}constructor(e,t){super("OdspService",e,t)}}},61739:(e,t,i)=>{i.d(t,{Cx:()=>s,Ny:()=>o,n0:()=>a});var n=i(54320),r=i.n(n);function s(e){let t="";if(!r()(e))try{t=new URLSearchParams(new URL(e).search).get("$skiptoken")||""}catch(i){}return t}function o(e,t){return"startswith(".concat(e,", '").concat(encodeURIComponent(t).replace(/'/g,"''"),"')")}function a(e){const t="https://graph.microsoft.com/";return e&&0===e.indexOf(t)&&(e=e.substring(28)),e}},91675:(e,t,i)=>{i.d(t,{t:()=>n});var n={Word:["docx","docm","doc","dotx","dotm"],Excel:["xlsx","xlsm","xlsb","xltx","xltm","xls","xlam","xla","xlw","xml"],PowerPoint:["pptx","pptm","ppt","potx","potm","pot","thmx","pps","ppsx","ppsm","ppsam","ppa"],OneNote:["one"],Project:["mpp","mpt","mpd"],Visio:["vsdx","vsd","vsdm","vssx","vssm","vstx","vstm"],Pdf:["pdf"],Loop:["loop","fluid"]}},23918:(e,t,i)=>{i.d(t,{Y:()=>g});var n=i(91675),r=i(51171),s=i(57718),o=i(86178),a=i.n(o),l=i(14983),d=function(){function e(){this.id=s.cM(),this.name="",this.fileType=l.Er.Other,this.url="",this.modifiedDate=a()(),this.childCount=-1,this.itemPath="/drive/root:"}return e.prototype.build=function(){return new g(this)},e.prototype.withPropertyBag=function(e){return this.id=e.id||this.id,this.name=e.name||this.name,this.fileType=e.fileType||this.fileType,this.url=e.url||this.url,this.modifiedDate=e.modifiedDate||this.modifiedDate,this.childCount=void 0!==e.childCount?e.childCount:this.childCount,this.itemPath=e.itemPath||this.itemPath,this},e.prototype.withDefaultValues=function(){return this.withPropertyBag({id:"driveItemId",name:"Item1",fileType:l.Er.Other,url:"driveItemUrl",modifiedDate:a()(),itemPath:"/drive/root:",childCount:-1})},e.prototype.fromGraphDriveItemResource=function(e){return this.withPropertyBag({id:e.id,name:e.name,fileType:e.folder?l.Er.Other:e.package?g.GetType(e.package.type):g.GetFileType(e.name),url:e.webUrl,modifiedDate:a()(e.lastModifiedDateTime),childCount:e.folder?e.folder.childCount:-1,itemPath:e.parentReference.path})},e}(),u=i(98990),h=i.n(u),c=i(55491),p=i.n(c),m=i(54320),f=i.n(m),g=function(){function e(e){if(f()(e.id))throw new r.L("id");if(f()(e.name))throw new r.L("name");if(f()(e.url))throw new r.L("url");this.id=e.id,this.name=e.name,this.url=e.url,this.fileType=e.fileType,this.description=e.description,this.modifiedDate=e.modifiedDate,this.childCount=e.childCount,this.itemPath=e.itemPath}return Object.defineProperty(e,"builder",{get:function(){return new d},enumerable:!1,configurable:!0}),e.GetType=function(e){switch(e.toLowerCase()){case"excel":return l.Er.Excel;case"onenote":return l.Er.OneNote;case"pdf":return l.Er.Pdf;case"powerpoint":return l.Er.PowerPoint;case"project":return l.Er.Project;case"visio":return l.Er.Visio;case"word":return l.Er.Word;case"loop":return l.Er.Loop;default:return l.Er.Other}},e.GetFileType=function(t){var i=l.Er.Other,r=t.slice(t.lastIndexOf(".")+1);return p()(n.t,(function(t,n){h()(t,(function(e){return e.toLowerCase()===r.toLowerCase()}))&&(i=e.GetType(n))})),i},e}()},26796:(e,t,i)=>{i.d(t,{z:()=>s});var n=i(57718),r=function(){function e(){this.bytesSent=0,this.groupId="",this.id=n.cM(),this.itemName="",this.itemSize=0,this.itemId="",this.lastUploadRequestSucceeded=!1,this.uploadUrl="",this.name="",this.webUrl="",this.nextExpectedRanges=void 0}return e.prototype.build=function(){return new s(this)},e.prototype.withPropertyBag=function(e){return this.bytesSent=e.bytesSent||this.bytesSent,this.expirationDateTime=e.expirationDateTime||this.expirationDateTime,this.groupId=e.groupId||this.groupId,this.id=e.id||this.id,this.itemId=e.itemId||this.itemId,this.itemName=e.itemName||this.itemName,this.itemSize=e.itemSize||this.itemSize,this.lastUploadRequestSucceeded=null!=e.lastUploadRequestSucceeded?e.lastUploadRequestSucceeded:this.lastUploadRequestSucceeded,this.uploadUrl=e.uploadUrl||this.uploadUrl,this.name=e.name||this.name,this.webUrl=e.webUrl||this.webUrl,this.nextExpectedRanges=e.nextExpectedRanges||this.nextExpectedRanges,this},e.prototype.withDefaultValues=function(){return this.id="DriveItemUploadSessionId",this.bytesSent=0,this.groupId="GroupId",this.itemId="itemId",this.itemName="sampleFile.txt",this.itemSize=28,this.uploadUrl="UploadURL",this.name="sampleFile.txt",this.expirationDateTime=new Date("2020-09-02"),this.webUrl="https://contoso.com/sites/group/sampleFile.txt",this.nextExpectedRanges=["26-"],this},e}(),s=function(){function e(e){this.bytesSent=e.bytesSent,this.expirationDateTime=e.expirationDateTime,this.groupId=e.groupId,this.id=e.id,this.itemId=e.itemId,this.itemName=e.itemName,this.itemSize=e.itemSize,this.lastUploadRequestSucceeded=e.lastUploadRequestSucceeded,this.uploadUrl=e.uploadUrl,this.name=e.name,this.webUrl=e.webUrl,this.nextExpectedRanges=e.nextExpectedRanges}return Object.defineProperty(e,"builder",{get:function(){return new r},enumerable:!1,configurable:!0}),e.prototype.getClone=function(){return e.builder.withPropertyBag({bytesSent:this.bytesSent,expirationDateTime:this.expirationDateTime,groupId:this.groupId,id:this.id,itemId:this.itemId,itemName:this.itemName||"",itemSize:this.itemSize||0,lastUploadRequestSucceeded:this.lastUploadRequestSucceeded,uploadUrl:this.uploadUrl,name:this.name,webUrl:this.webUrl,nextExpectedRanges:this.nextExpectedRanges}).build()},e.prototype.setProperty=function(e,t){if("id"===e)throw new Error("ReadOnlyException: "+e);var i=this.getClone();return i[e]=t,i},e}()},57718:(e,t,i)=>{function n(e){for(var t="";t.length<e;){var i=16*Math.random();t+=(i|=0).toString(16)}return t}i.d(t,{cM:()=>r});function r(){var e=[];e.push(n(8)),e.push(n(4));var t="4"+n(3);e.push(t);var i=n(4),r=parseInt(i[0],16);return r&=3,i=(r|=8).toString(16)+i.substr(1),e.push(i),e.push(n(12)),e.join("-")}}}]);
//# sourceMappingURL=odspservice.e53efec2.chunk.js.map