"use strict";(self.webpackChunkfluidhost=self.webpackChunkfluidhost||[]).push([[18510],{64805:(e,t,n)=>{n.d(t,{J:()=>i});class r{get clientSettings(){return this.clientSettingsProvider()}constructor(e,t,n){this.dispatcher=e,this.clientSettingsProvider=t,this.loggers=n}}class i extends r{getCurrentViewIds(){const e=this.stores.appContextStore.getCurrentViewId();return e?[e]:void 0}constructor(e,t,n,r,i){super(e,r,i),this.webApiProviders=t,this.stores=n}}},4009:(e,t,n)=>{n.r(t),n.d(t,{LinksModule:()=>o});var r=n(64805),i=n(9821);class o extends r.J{get name(){return"LinksModule"}copyLinkToFileSuggestion(e){return this.copyLink(e.webUrl)}copyLinkToAttachment(e){return this.copyLink(e.url)}generateDeepLink(e,t){var n,r;return null!==(n=null===(r=this.generateDeepLinkUrl)||void 0===r?void 0:r.call(this,e,t))&&void 0!==n?n:null}copyLink(e){return i.B.copyToClipboard(e)?Promise.resolve():Promise.reject()}constructor(e,t,n,r,i,o){super(e,t,n,r,i),this.generateDeepLinkUrl=o}}},9821:(e,t,n)=>{n.d(t,{B:()=>l});var r=n(12358),i=n.n(r),o=n(34167),l=function(){function e(){}return e.copyToClipboard=function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select();var n=document.execCommand("copy");return document.body.removeChild(t),n},e.copyPrettifiedLinkToClipboard=function(e,t){var n=document.createElement("a");n.href=t,n.style.all="initial",n.innerText=e,document.body.appendChild(n);var r=document.createRange();r.selectNode(n);var l=window.getSelection();null===l||void 0===l||l.removeAllRanges(),null===l||void 0===l||l.addRange(r),n.oncopy=function(n){var r,l,a="<a href="+t+' style="all: initial;">'+i()(e)+"</a>";null===(r=n.clipboardData)||void 0===r||r.setData("text/plain",t);var s=new o.tR;s.inputString=a,null===(l=n.clipboardData)||void 0===l||l.setData("text/html",o.xC.sanitize(s)),n.preventDefault()};var a=document.execCommand("copy");return document.body.removeChild(n),a},e}()}}]);
//# sourceMappingURL=linksmodule.e4dab07b.chunk.js.map