"use strict";(self.webpackChunkfluidhost=self.webpackChunkfluidhost||[]).push([[62530],{2456:(e,r,t)=>{t.r(r),t.d(r,{default:()=>O});var a=t(41851),n=t(94308),i=t(24720),o=t(64399),l=t(24468),s=t(65043),d=t(6326);function c(e,r,t,a,n,i,o,l){return(0,d.__awaiter)(this,void 0,void 0,(function*(){try{const e=t.activityRequest;if(!0===(null===l||void 0===l?void 0:l.status)&&e)return"auth"===t.type?e.authCode=l.message:"silentAuth"===t.type&&(e.authToken=l.message),e.retryAsync(),[!1,void 0]}catch(e){return[!0,void 0]}return[!0,void 0]}))}var u,m=t(64867),v=t(92964),p=t(13569),g=t(25055),h=t(17122),f=t(11638),y=t(40488),E=t(57433);!function(e){e.title="signin-card-title"}(u||(u={}));var b=t(66988);const x=(0,b.Ex)("card-loop-ui-signincard.GenericError.Rendering"),S=(0,b.Ex)("card-loop-ui-signincard.SignInCard.ButtonText"),C=(0,b.Ex)("card-loop-ui-signincard.SignInCard.InitialMessage"),P=(0,b.Ex)("card-loop-ui-signincard.SignInCard.FailureMessage"),w=e=>{const{handleRetry:r}=e,[t,o]=s.useState(!1),{cardData:c,cardTitleChangeHandler:b,urlData:x}=(0,a.f)(),{metaOSProvider:w,cardChannelProvider:k}=(0,i.g)(),{logger:N}=(0,n.g)(),{setCardData:I}=(0,m.t)(),{theme:_}=(0,v.d)(),D=(0,p.O)(_),H=c.payload,[L,O]=s.useState(0),T=(0,l.Lh)(S),M=(0,l.Lh)(C),z=(0,l.Lh)(P),A=L>0?z:M,R=s.useCallback((()=>(0,d.__awaiter)(void 0,void 0,void 0,(function*(){o(!0);const e=t=>(0,d.__awaiter)(void 0,void 0,void 0,(function*(){var a;const n=yield null===(a=w.openAuth)||void 0===a?void 0:a.call(w,c.appId,t),[i,l]=yield r(x,c,t,I,k,b,N,n);i&&(l?yield e(l):O(L+1)),o(!1)}));yield e(H)}))),[H,c,r,x,I,k,w,N,L]);return s.createElement(h.B,{tokens:{childrenGap:16,padding:16},className:D.cardStack},s.createElement(h.B.Item,{align:"auto"},s.createElement(g.F,{className:D.cardTitle,content:A,datatid:u.title})),s.createElement(h.B.Item,{align:"baseline"},s.createElement(h.B,{tokens:{maxWidth:200}},s.createElement(f.Y,{className:D.cardButton,disabled:t,onClick:R,text:T,title:T,styles:{textContainer:{overflow:"hidden"},label:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}},t&&s.createElement(y.y,{size:E.H.small})))))},k=()=>s.createElement(w,{handleRetry:c});var N=t(82381),I=t(4217),_=t(65581),D=t(50534);function H(e,r,t,a,n,i,o,l){var s,c;return(0,d.__awaiter)(this,void 0,void 0,(function*(){if(!(null===e||void 0===e?void 0:e.url))return[!1,void 0];try{if(!0===(null===l||void 0===l?void 0:l.status)){const d=(0,_.y)(e.url,t.type,null===l||void 0===l?void 0:l.message),u={msaAppId:null!==(s=r.botId)&&void 0!==s?s:"",metaOsAppId:r.appId,appName:r.appName,name:"composeExtension/queryLink",value:d},m=yield null===(c=n.invokeBot)||void 0===c?void 0:c.call(n,u.name,u),v=(0,I.m)(m,o),p=Object.assign(Object.assign({},r),v),{cardType:g,payload:h}=p;if(!g||!(0,D.z)(g)||!h){const e=new Error("CardType: ".concat(g,"; PayloadPresent: ").concat(!!h));throw e.name="UnfurlResponseParseError",o.logEvent("error","InvokeBotError",{message:(0,N.r)(e,"Error while parsing bot invoke response; Name: composeExtension/queryLink")}),e}return i(g,m),a(p),[!1,void 0]}if("silentAuth"===t.type){if(t.requiresUserConsent){if(!t.authUrl)return[!0,void 0];t.type="auth",t.requiresUserConsent=!0}else t.requiresUserConsent=!0;return[!0,t]}return[!0,void 0]}catch(d){return[!0,void 0]}}))}const L=()=>{const{urlData:e,cardDataHandler:r}=(0,a.f)(),{baseCardPerfMarker:t,renderPerfMarker:i}=(0,n.g)(),{logger:d}=(0,n.g)(),c=(0,l.Lh)(x);return(null===e||void 0===e?void 0:e.url)?s.createElement(w,{handleRetry:H}):(t.end(!1),i.end(!1),d.logEvent("error","NoUrlFound"),null===r||void 0===r||r.rejector("NoUrlFound: Url not found in the urlData"),s.createElement(o.i,{message:c}))},O=()=>{const{cardData:e,cardDataHandler:r}=(0,a.f)(),{logger:t,baseCardPerfMarker:d,renderPerfMarker:c}=(0,n.g)(),{metaOSProvider:u,cardChannelProvider:m}=(0,i.g)(),v=(0,l.Lh)(x);if(s.useEffect((()=>{d.end(!0)}),[d]),!u||!m||!(null===e||void 0===e?void 0:e.appId))return d.end(!1),c.end(!1),t.logEvent("error","NoMetaOSProvider"),null===r||void 0===r||r.rejector("NoMetaOSProvider: MetaOSProvider not found"),s.createElement(o.i,{message:v});return"CardAction"===e.payload.authScenario?s.createElement(k,null):s.createElement(L,null)}},24468:(e,r,t)=>{t.d(r,{Lh:()=>i});t(65043);var a=t(99375),n=t(58940);function i(e){var r=(0,a.eO)();return(0,n.A)(r,e)}},40488:(e,r,t)=>{t.d(r,{y:()=>h});var a=t(65804),n=t(6326),i=t(65043),o=t(57433),l=t(89379),s=t(17066),d=t(28553),c=(0,l.Z)(),u=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return(0,n.__extends)(r,e),r.prototype.render=function(){var e=this.props,r=e.type,t=e.size,a=e.ariaLabel,l=e.ariaLive,u=e.styles,m=e.label,v=e.theme,p=e.className,g=e.labelPosition,h=a,f=(0,s.G1)(this.props,s.JM,["size"]),y=t;void 0===y&&void 0!==r&&(y=r===o.Q.large?o.H.large:o.H.medium);var E=c(u,{theme:v,size:y,className:p,labelPosition:g});return i.createElement("div",(0,n.__assign)({},f,{className:E.root}),i.createElement("div",{className:E.circle}),m&&i.createElement("div",{className:E.label},m),h&&i.createElement("div",{role:"status","aria-live":l},i.createElement(d.P,null,i.createElement("div",{className:E.screenReaderText},h))))},r.defaultProps={size:o.H.medium,ariaLive:"polite",labelPosition:"bottom"},r}(i.Component),m=t(33516),v=t(66783),p={root:"ms-Spinner",circle:"ms-Spinner-circle",label:"ms-Spinner-label"},g=(0,v.J9)((function(){return(0,m.i7)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}})})),h=(0,a.I)(u,(function(e){var r,t=e.theme,a=e.size,i=e.className,l=e.labelPosition,s=t.palette,d=(0,m.Km)(p,t);return{root:[d.root,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},"top"===l&&{flexDirection:"column-reverse"},"right"===l&&{flexDirection:"row"},"left"===l&&{flexDirection:"row-reverse"},i],circle:[d.circle,{boxSizing:"border-box",borderRadius:"50%",border:"1.5px solid "+s.themeLight,borderTopColor:s.themePrimary,animationName:g(),animationDuration:"1.3s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.53,.21,.29,.67)",selectors:(r={},r[m.up]=(0,n.__assign)({borderTopColor:"Highlight"},(0,m.Qg)()),r)},a===o.H.xSmall&&["ms-Spinner--xSmall",{width:12,height:12}],a===o.H.small&&["ms-Spinner--small",{width:16,height:16}],a===o.H.medium&&["ms-Spinner--medium",{width:20,height:20}],a===o.H.large&&["ms-Spinner--large",{width:28,height:28}]],label:[d.label,t.fonts.small,{color:s.themePrimary,margin:"8px 0 0",textAlign:"center"},"top"===l&&{margin:"0 0 8px"},"right"===l&&{margin:"0 0 0 8px"},"left"===l&&{margin:"0 8px 0 0"}],screenReaderText:m.dX}}),void 0,{scope:"Spinner"})},57433:(e,r,t)=>{var a,n;t.d(r,{H:()=>a,Q:()=>n}),function(e){e[e.xSmall=0]="xSmall",e[e.small=1]="small",e[e.medium=2]="medium",e[e.large=3]="large"}(a||(a={})),function(e){e[e.normal=0]="normal",e[e.large=1]="large"}(n||(n={}))}}]);
//# sourceMappingURL=card-loop-signincardview.9927b8fe.chunk.js.map