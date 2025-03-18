"use strict";(self.webpackChunkfluidhost=self.webpackChunkfluidhost||[]).push([[45590],{590:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Y});var i=r(65043),a=r(34486),o=r(31025),n=r(87997),s=r(62945),m=r(95996),u=r(60202),l=r(72861),h=r(66857),c=r(13261),p=r(33633);const T=(0,l.n)({button:{minWidth:"unset",...h.Pt.padding(c.L.spacingHorizontalSNudge),...h.Pt.borderRadius(c.L.borderRadiusCircular),...h.Pt.border("0"),"&:hover, &:active, &:hover:active":{backgroundColor:c.L.colorNeutralBackground5Hover,"@media (forced-colors:active)":{"& > p":{color:"highlightText"},["& .".concat(p.gn.initials)]:{color:"canvasText"},backgroundColor:"highlight"}}},editedDescription:{color:c.L.colorNeutralForeground3,fontSize:c.L.fontSizeBase200,fontWeight:c.L.fontWeightRegular,lineHeight:c.L.fontSizeBase400,...h.Pt.padding("0"),...h.Pt.margin("0"),marginLeft:c.L.spacingHorizontalXS}});function g(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function d(e){const t=g(new Date(Date.now()));return new Date(t.setDate(t.getDate()+e))}function v(e,t){const r=d(t),i=g(e);return a=i,r.getTime()===a.getTime();var a}function A(e){return new Date(Date.now()).getFullYear()===e.getFullYear()}const W={weekday:"short",day:"numeric",month:"short"},f={...W,year:"numeric"},y={hour:"numeric",minute:"numeric"},w={day:"numeric",month:"short"},b={...w,year:"numeric"},D={day:"numeric",month:"long"},L={...D,year:"numeric"},N={...L,...y,hour12:!0},M=new Map([[1,W],[2,f],[3,{weekday:"short"}],[4,{weekday:"long"}],[5,y],[6,w],[7,b],[8,{day:"numeric",month:"numeric",year:"numeric"}],[10,D],[9,L],[11,N]]),k=new Map;function C(e,t){const r="".concat(e,":").concat(t);if(k.has(r))return k.get(r);const i=M.get(t),a=new Intl.DateTimeFormat(e,i);return k.set(r,a),a}function P(e,t){const r=new Date(Date.now()).getTime()-e,i=Math.floor(r/6e4),{locale:a,longFormat:o,stringTable:n,authorName:s}=t;if(i<=2)return s&&n.relativeTimestampJustNowWithAuthor?n.relativeTimestampJustNowWithAuthor({authorName:s}):n.relativeTimestampJustNow;if(i<60)return s&&n.relativeTimestampMinutesAgoWithAuthor?n.relativeTimestampMinutesAgoWithAuthor({minutes:i,authorName:s}):n.relativeTimestampMinutesAgo({minutes:i});const m=new Date(e);if(function(e){return v(e,0)}(m)){const e=Math.floor(r/36e5);return s&&n.relativeTimestampHoursAgoWithAuthor?n.relativeTimestampHoursAgoWithAuthor({hours:e,authorName:s}):n.relativeTimestampHoursAgo({hours:e})}const u=C(a,5).format(m);if(function(e){return v(e,-1)}(m))return s&&n.relativeTimestampYesterdayWithAuthor?n.relativeTimestampYesterdayWithAuthor({time:u,authorName:s}):n.relativeTimestampYesterday({time:u});if(function(e,t){const r=d(-t),i=g(e),a=d(0);return i.getTime()>=Math.min(r.getTime(),a.getTime())&&i.getTime()<=Math.max(r.getTime(),a.getTime())}(m,7)){const e=C(a,o?4:3).format(m);return s&&n.relativeTimestampWithinLastDaysWithAuthor?n.relativeTimestampWithinLastDaysWithAuthor({day:e,time:u,authorName:s}):n.relativeTimestampWithinLastDays({day:e,time:u})}let l;l=o?A(m)?10:9:A(m)?6:7;const h=C(a,l).format(m);return s&&n.relativeTimestampGenericWithAuthor?n.relativeTimestampGenericWithAuthor({date:h,authorName:s}):h}var H=r(84087),E=r(20897);const Y=e=>{const{lastEditDetails:t,presenceColorProvider:r,pageLogger:l,tokenProvider:h,localization:c,stringTable:p,stylingProvider:g,compact:d}=e,[v,A]=i.useState(),W=i.useRef(t),f=T(),y=(0,H.a)(),w=i.useCallback((e=>{y.current&&A(e)}),[y]),b=i.useMemo((()=>new u.nl(r,w,l,h)),[r,w,l,h]);i.useEffect((()=>{l&&!h&&(0,m.Ot)(l,{eventName:"MissingTokenProvider"})}),[l,h]),i.useEffect((()=>{b.setPresenceColorProvider(r)}),[b,r]),i.useEffect((()=>{const e=setInterval(L.current,6e4);return()=>{clearInterval(e),b.dispose()}}),[b]);const D=()=>{const e=P(W.current.timestamp,{stringTable:p,locale:c.locale});b.updateCoauthor({id:t.user.id,name:t.user.name||t.user.id,description:e,activeStatus:!0})},L=i.useRef(D);L.current=D,i.useEffect((()=>{W.current=t,L.current()}),[t]);const N=()=>{b.resetPresenceColorCache(),L.current()};return(0,E._)(g,"themeNameChanged",N),(0,E._)(g,s.j.themePropertiesChanged,N),v?i.createElement(a.m,{content:(M=v.name,P(W.current.timestamp,{stringTable:{...p,relativeTimestampJustNowWithAuthor:p.relativeTimestampJustNowWithAuthorTooltipText,relativeTimestampMinutesAgoWithAuthor:p.relativeTimestampMinutesAgoWithAuthorTooltipText,relativeTimestampHoursAgoWithAuthor:p.relativeTimestampHoursAgoWithAuthorTooltipText,relativeTimestampYesterdayWithAuthor:p.relativeTimestampYesterdayWithAuthorTooltipText,relativeTimestampWithinLastDaysWithAuthor:p.relativeTimestampWithinLastDaysWithAuthorTooltipText,relativeTimestampGenericWithAuthor:p.relativeTimestampGenericWithAuthorTooltipText},locale:c.locale,authorName:M})),relationship:"label",positioning:"below",showDelay:0},i.createElement(o.$,{"data-testid":"lastEditedTestId","aria-label":(e=>P(W.current.timestamp,{stringTable:{...p,relativeTimestampJustNowWithAuthor:p.relativeTimestampJustNowWithAuthorAriaLabel,relativeTimestampMinutesAgoWithAuthor:p.relativeTimestampMinutesAgoWithAuthorAriaLabel,relativeTimestampHoursAgoWithAuthor:p.relativeTimestampHoursAgoWithAuthorAriaLabel,relativeTimestampYesterdayWithAuthor:p.relativeTimestampYesterdayWithAuthorAriaLabel,relativeTimestampWithinLastDaysWithAuthor:p.relativeTimestampWithinLastDayWithAuthorAriaLabel,relativeTimestampGenericWithAuthor:p.relativeTimestampGenericWithAuthorAriaLabel},locale:c.locale,authorName:e,longFormat:!0}))(v.name),role:"status",className:f.button},i.createElement(n.e,{color:"colorful",image:{src:v.imageUrl},name:v.name,size:20}),d?null:i.createElement("p",{className:f.editedDescription},v.description))):null;var M}}}]);
//# sourceMappingURL=LazyLastEdited.e8d46332.chunk.js.map