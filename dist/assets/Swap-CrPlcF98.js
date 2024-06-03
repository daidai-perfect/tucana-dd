import{u as Z,r as g,j as e,M as Fe,a as ze,b as He,c as We,d as qe,e as Je,V as Y,F as q,H as ee,I as k,T as V,B as pe,f as X,g as Ie,h as xe,i as Q,s as Le,C as ct,k as it,S as re,l as ot,m as lt,n as $e,o as we,p as Ge,q as L,R as ut,t as $,v as dt,N as pt,w as Ne,P as xt,x as ht,y as Ye,z as gt,A as mt,D as ft,E as St,G as jt,J as ne,K as Se,L as Ke,O as wt,Q as yt,U as Ct,W as bt,X as Rt,Y as Mt,Z as de,_ as vt,$ as Pt,a0 as At,a1 as Ot}from"./index-CZ9BtG6K.js";import{R as _t}from"./RefreshIcon-DU_SDOKY.js";import{u as Dt,T as Ue,S as Et}from"./useDebounce-BVAm3t-5.js";import{C as Xe}from"./CurrentPrice-CLWTQWwc.js";import{R as $t,A as Nt,X as Ut,Y as Bt,a as Vt}from"./AreaChart-5RHNlqJv.js";import{T as Ft,R as zt,L as Ht}from"./generateCategoricalChart-DQq0vuN5.js";import{g as Wt}from"./apiDataProcessing-BAM4zGSR.js";import{u as Be}from"./useGetBalance-DBgDBORY.js";import{u as qt}from"./useGetTokenInfo-DtHHTkmp.js";import"./useRate-Dv8umWLB.js";function Jt(a){const{isOpen:t,slippageTolerance:n,receiveOrSoldText:y,receiveOrSoldValue:h,priceIsUpdate:S,handleAccept:l,onClose:p,onClick:r,clearWatchPriceTimer:i,watchPriceUpdated:d}=a,{fromToken:c,toToken:u,fromValue:o,toValue:R,priceImpact:_,feeAmount:b}=Z();g.useEffect(()=>{console.log("SwapSecondaryModal did mounted"),d()},[]),g.useEffect(()=>()=>{console.log("SwapSecondaryModal destory"),i()},[]);const v=async()=>{i(),await l(),await Le(1e4),d()};return e.jsxs(Fe,{isOpen:t,onClose:p,isCentered:!0,children:[e.jsx(ze,{}),e.jsxs(He,{children:[e.jsx(We,{children:"Review Swap"}),e.jsx(qe,{}),e.jsx(Je,{pb:"16px",children:e.jsxs(Y,{w:"100%",children:[e.jsx(Ve,{title:"You pay",token:c,value:o}),e.jsx(Ve,{title:"You receive",token:u,value:R}),e.jsx(q,{w:"100%",bg:"current_price_bg",borderRadius:"8px",h:"50px",p:"12px",alignItems:"center",children:e.jsx(Xe,{fromToken:c,toToken:u,fromValue:o,toValue:R,color:"text_caption",noIcon:!0,noCenter:!0})}),S?e.jsxs(q,{mt:"16px",w:"100%",align:"center",justifyContent:"space-between",children:[e.jsxs(ee,{gap:"4px",children:[e.jsx(k,{xlinkHref:"#icon-icon_tips2"}),e.jsx(V,{color:"text_caption",children:"Price Updated"})]}),e.jsx(pe,{borderRadius:"8px",w:"112px",h:"36px",onClick:v,children:"Accept"})]}):null,e.jsxs(Y,{mt:"16px",w:"100%",gap:"0",children:[e.jsx(X,{text:"Slippage Tolerance",value:n}),e.jsx(X,{text:y,value:h,mt:"12px"}),e.jsx(X,{text:"Price lmpact",value:Ie(_,2),mt:"12px",valueColor:xe(_),iconVariant:"error",iconXlinkHref:xe(_)==="error"?"#icon-a-icon_tips_triangle":""}),e.jsx(X,{text:"Fees",value:`${Q(b,c==null?void 0:c.decimals)} ${c==null?void 0:c.symbol}`,mt:"12px"})]}),e.jsx(pe,{isDisabled:S,w:"100%",mt:"20px",size:"lg",onClick:r,children:"Confirm swap"})]})})]})]})}function Ve(a){const{title:t,token:n,value:y}=a;return e.jsx(ct,{width:"100%",p:"0px 0px 30px",backgroundColor:"background",children:e.jsx(it,{children:e.jsxs(q,{width:"100%",alignItems:"center",justifyContent:"space-between",gap:"8px",children:[e.jsxs(Y,{w:"100%",align:"flex-start",children:[e.jsx(V,{fontSize:"sm",style:{cursor:"pointer"},children:t}),e.jsxs(V,{w:"100%",color:"text_caption",textAlign:"left",fontSize:"xl",style:{cursor:"pointer"},maxW:"350px",children:[Q(y,n==null?void 0:n.decimals)," ",n==null?void 0:n.symbol]})]}),e.jsx(re,{imageUrl:n==null?void 0:n.image})]})})})}function It(){const{tokenPriceChartInfo:a,setTokenPriceChartInfo:t}=Z(),n=ot(lt),[y,h]=g.useState(!1),S=async(l,p,r)=>{const i=l=="hour"?"5min":l=="day"?"30min":l=="week"?"4hour":l=="month"?"day":"";console.log("🚀 ~ getChartInfo ~ metadata:",p,a),h(!0);try{const d=r?await $e(`${n}?metadata=${p}&date_type=${i}&start_timestamp=${r}`):await $e(`${n}?metadata=${p}&date_type=${i}`);if(console.log("response171717",d==null?void 0:d.list),!r)console.log("🚀 ~ getChartInfo ~ startTimestamp!startTimestamp:",r),t(l,p,d==null?void 0:d.list);else{const c=JSON.parse(JSON.stringify(a&&a[l]&&a[l][p]));c[0].timestamp==r&&(console.log("🚀 ~ getChartInfo ~ list[0].timestamp == startTimestamp",r),c.shift(),t(l,p,d==null?void 0:d.list.concat(c))),c[1].timestamp==r&&(console.log("🚀 ~ getChartInfo ~ list[1].timestamp == startTimestamp",r),c.slice(2),t(l,p,d==null?void 0:d.list.concat(c)))}h(!1)}catch(d){h(!1),console.log(d,"errorgetLineDate")}};return g.useEffect(()=>{console.log("tokenPriceChartInfo$$$$$4444444",a)},[a]),{getChartInfo:S,isLoading:y}}function Lt(){const{fromTokenChart:a,toTokenChart:t,setFromTokenChart:n,setToTokenChart:y}=Z(),[h,S]=g.useState("1H"),[l,p]=g.useState("--"),[r,i]=g.useState("--"),d=async()=>{const b=a;n(t),y(b)},c=b=>{S(b)},u=b=>{p(b)},o=b=>{i(b)},R=()=>e.jsx(ut,{options:["1H","1D","7D","30D"],size:"s",value:h,onChange:c}),{windowWidth:_}=we();return e.jsxs(Y,{w:"100%",justifyContent:"center",gap:"0px",bg:"card_bg",backdropFilter:"blur(10px)",borderRadius:"16px",p:"20px 0",children:[e.jsxs(Y,{w:"100%",justifyContent:"flex-start",align:"flex-start",gap:"4px",p:"0px 16px",mb:"20px",children:[e.jsxs(q,{w:"100%",justify:"space-between",sx:{"@media screen and (max-width: 810px)":{flexDirection:"column"}},children:[a&&t?e.jsxs(q,{align:"center",children:[e.jsx(Ge,{coinAIconUrl:a==null?void 0:a.image,coinBIconUrl:t==null?void 0:t.image,variant:"border"}),e.jsxs(V,{fontSize:"2xl",color:"text_caption",m:"0 4px ",children:[a==null?void 0:a.symbol,"-",t==null?void 0:t.symbol]}),e.jsx(k,{xlinkHref:"#icon-icon_swap",onClick:d})]}):e.jsxs(q,{align:"center",children:[e.jsx(re,{imageUrl:(a==null?void 0:a.image)||(t==null?void 0:t.image),variant:"border"}),e.jsx(V,{fontSize:"2xl",color:"text_caption",m:"0 4px ",children:(a==null?void 0:a.symbol)||(t==null?void 0:t.symbol)})]}),_>810&&e.jsx(L,{h:"20px",children:R()})]}),e.jsxs(q,{align:"center",children:[e.jsx(V,{fontSize:"xl",color:"text_caption",children:r=="--"?"--":a&&t?Q(r,6):"$"+Q(r,6)}),a&&t&&e.jsx(V,{fontSize:"xl",color:"text_caption",ml:"4px",children:t==null?void 0:t.symbol})]}),e.jsx(V,{fontSize:"xs",children:l}),_<=810&&e.jsx(L,{h:"20px",mt:"4px",children:R()})]}),e.jsx(Gt,{timeChange:u,valueChange:o,dateType:h,fromToken:a,toToken:t})]})}function Gt(a){const{fromToken:t,toToken:n,dateType:y,timeChange:h,valueChange:S}=a,{getChartInfo:l,isLoading:p}=It(),{tokenPriceChartInfo:r}=Z(),[i,d]=g.useState([]),[c,u]=g.useState(!0),o=g.useMemo(()=>(u(!0),y=="1H"?"hour":y=="1D"?"day":y=="7D"?"week":y=="30D"?"month":""),[y]);g.useEffect(()=>{var w,C,U,O,B,x,E,M,P,W,G;let s;const j=Math.floor(Date.now()/1e3),m=o=="hour"?5:o=="day"?30:o=="week"?240:o=="month"?720:0;if(t)if(!(r&&r[o]&&r[o][t==null?void 0:t.metadata]))l(o,t==null?void 0:t.metadata);else{console.log("🚀 ~ useEffect ~ now_timestamp:",j);const z=r&&r[o]&&r[o][t==null?void 0:t.metadata];if(console.log("🚀 ~ useEffect ~ now_timestamp !== list[0].timestamp:",j,(w=z[0])==null?void 0:w.timestamp),j>((C=z[0])==null?void 0:C.timestamp)+60){const H=z.length>=2?((U=z[1])==null?void 0:U.timestamp)-((O=z[0])==null?void 0:O.timestamp):0;(H==m*60||H==0)&&(s=(B=z[0])==null?void 0:B.timestamp),H<m*60&&(s=(x=z[1])==null?void 0:x.timestamp,l(o,t==null?void 0:t.metadata,s))}}if(n)if(!(r&&r[o]&&r[o][n==null?void 0:n.metadata]))l(o,n==null?void 0:n.metadata);else{const z=r&&r[o]&&r[o][n==null?void 0:n.metadata];if(j>((E=z[0])==null?void 0:E.timestamp)+60){const H=r[o][n==null?void 0:n.metadata],T=((M=H[1])==null?void 0:M.timestamp)-((P=H[0])==null?void 0:P.timestamp);T==m*60&&(s=(W=H[0])==null?void 0:W.timestamp),T<m*60&&(s=(G=H[1])==null?void 0:G.timestamp,l(o,n==null?void 0:n.metadata,s))}}},[t,n,o]),g.useEffect(()=>{var C,U,O,B,x,E;d([]);let s,j;t&&r&&r[o]&&r[o][t==null?void 0:t.metadata]&&(s=r[o][t==null?void 0:t.metadata]),n&&r&&r[o]&&r[o][n==null?void 0:n.metadata]&&(j=r[o][n==null?void 0:n.metadata]);const m=JSON.parse(JSON.stringify(s||[])),w=JSON.parse(JSON.stringify(j||[]));if(console.log("🚀 ~ useEffect ~ from:",m,w),t&&n){if((s==null?void 0:s.length)>0&&(j==null?void 0:j.length)>0)if((s==null?void 0:s.length)>=(j==null?void 0:j.length)){(s==null?void 0:s.length)>(j==null?void 0:j.length)&&(m==null||m.splice(-((m==null?void 0:m.length)-(w==null?void 0:w.length))));for(let M=0;M<(m==null?void 0:m.length);M++)m[M].newPrice=$((C=m[M])==null?void 0:C.price).div((U=w[M])==null?void 0:U.price).toString();d(m),u(!1)}else{w==null||w.splice(-((w==null?void 0:w.length)-(m==null?void 0:m.length)));for(let M=0;M<(w==null?void 0:w.length);M++)w[M].newPrice=$((O=m[M])==null?void 0:O.price).div((B=w[M])==null?void 0:B.price).toString();d(w),u(!1)}}else{if(t){for(let M=0;M<(m==null?void 0:m.length);M++)m[M].newPrice=(x=m[M])==null?void 0:x.price;d(m),u(!1)}if(n){for(let M=0;M<(w==null?void 0:w.length);M++)w[M].newPrice=(E=w[M])==null?void 0:E.price;d(w),u(!1)}}},[t,n,r,o]);const R=i&&Math.min(...i.map(s=>s.newPrice)),_=i&&Math.max(...i.map(s=>s.newPrice));g.useEffect(()=>{var s,j;S(i&&((s=i[0])==null?void 0:s.newPrice)||"--"),h((i==null?void 0:i.length)>0?je(new Date(i&&((j=i[0])==null?void 0:j.timestamp)*1e3)):"--"),console.log("🚀 ~ useEffect ~ lineDataList:",i)},[i]);const[b,v]=g.useState(null),A=s=>{var j,m,w;if(s&&s.activePayload&&((j=s.activePayload)!=null&&j.length)){const C=(m=s.activePayload[0])==null?void 0:m.payload.timestamp,U=(w=s.activePayload[0])==null?void 0:w.payload.newPrice;h(je(new Date(C*1e3))),S(U);const O=s.activePayload[0];v(O)}},N=()=>{var s,j;v(null),h((i==null?void 0:i.length)>0?je(new Date(i&&((s=i[0])==null?void 0:s.timestamp)*1e3)):"--"),S(i&&((j=i[0])==null?void 0:j.newPrice)||"--")},{windowWidth:F}=we();return e.jsx(e.Fragment,{children:c||p?e.jsx(Y,{p:"20px 0px 70px",h:"456px",justifyContent:"center",sx:{"@media screen and (max-width: 810px)":{h:"200px"}},children:e.jsx(dt,{})}):(i==null?void 0:i.length)==0?e.jsx(Y,{p:"20px 0px 70px",h:"456px",justifyContent:"center",sx:{"@media screen and (max-width: 810px)":{h:"200px"}},children:e.jsx(pt,{type:"nodata",noBg:!0,text:"No token data yet"})}):e.jsx($t,{width:"100%",height:F<=810?200:456,children:e.jsxs(Nt,{height:F<=810?200:456,data:i,syncId:"swapChart",onMouseEnter:A,onMouseMove:A,onMouseLeave:N,margin:{top:10,right:24,left:24,bottom:24},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"var(--chakra-colors-primary)",stopOpacity:1}),e.jsx("stop",{offset:"100%",stopColor:"var(--chakra-colors-primary)",stopOpacity:0})]}),e.jsxs("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"var(--chakra-colors-primary)",stopOpacity:1}),e.jsx("stop",{offset:"100%",stopColor:"var(--chakra-colors-primary)",stopOpacity:0})]})]}),e.jsx(Ut,{dataKey:"timestamp",tickLine:!1,label:{offset:40},tick:e.jsx(Yt,{type:o,lineDataList:i}),reversed:!0,interval:F<=810?parseInt(String((i==null?void 0:i.length)/3)):(i==null?void 0:i.length)<10?0:parseInt(String((i==null?void 0:i.length)/5))}),e.jsx(Bt,{domain:[R,_],axisLine:!1,hide:!0,tickLine:!1,orientation:"right",tick:{fill:"var(--chakra-colors-text_paragraph)",fontSize:12}}),e.jsx(Ft,{cursor:{stroke:"var(--chakra-colors-primary)",strokeWidth:1,strokeDasharray:"3 2"},content:e.jsx(Kt,{})}),e.jsx(Vt,{type:"monotone",dataKey:"newPrice",stroke:"var(--chakra-colors-primary)",fill:"url(#colorUv)"}),b&&e.jsx(zt,{y:b.value,stroke:"var(--chakra-colors-primary)",strokeDasharray:"3 3"}),b&&e.jsx(Ht,{value:`Value: ${b.value}`,position:"top"})]})})})}const Yt=a=>{const{x:t,y:n,payload:y,type:h,lineDataList:S}=a,l=new Date(y.value*1e3),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][l.getUTCMonth()],i=l.getUTCDate();l.getUTCFullYear();let d=l.getUTCHours();const c=l.getUTCMinutes(),u=d>=12?"PM":"AM";d=d%12,d=d||12;const o=h=="month"||h=="week"?r+" "+i:(h=="day",d+":"+(c<10?"0":"")+c+" "+u);return e.jsx("g",{transform:`translate(${t},${n})`,children:e.jsx("text",{x:0,y:0,dy:24,textAnchor:"end",fill:"var(--chakra-colors-text_paragraph)",fontSize:12,children:y.value==S[S.length-1].timestamp?"":o})})},Kt=({active:a,payload:t,label:n})=>a&&t&&(t!=null&&t.length)?e.jsx("div",{className:"custom-tooltip"}):null;function je(a){if(a=="--"||!a)return"--";const t=new Date(a),y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getUTCMonth()],h=t.getUTCDate(),S=t.getUTCFullYear();let l=t.getUTCHours();const p=t.getUTCMinutes(),r=l>=12?"PM":"AM";return l=l%12,l=l||12,y+" "+h+", "+S+", "+l+":"+(p<10?"0":"")+p+" "+r}function Xt(a){var l,p,r,i,d;const{data:t,isOpen:n,onClose:y}=a;console.log("RouteModal data: ",t);const{fromToken:h,toToken:S}=t;return e.jsxs(Fe,{isOpen:n,onClose:y,isCentered:!0,children:[e.jsx(ze,{}),e.jsxs(He,{children:[e.jsx(We,{children:"Route"}),e.jsx(qe,{}),e.jsx(Je,{p:"16px 28px 36px",children:e.jsxs(Y,{w:"100%",gap:"0",p:"0 0px 0px",children:[e.jsxs(L,{h:"0px",w:"100%",border:"1px dashed",borderColor:"route_line",borderTop:"none",borderBottom:"none",position:"relative",children:[e.jsxs(ee,{position:"absolute",top:"-10px",left:"-10px",zIndex:"99",align:"flex-start",children:[e.jsx(re,{imageUrl:(l=t==null?void 0:t.fromToken)==null?void 0:l.image,w:"20px",h:"20px"}),e.jsxs(V,{color:"text_caption",maxW:"165px",children:[Ne((t==null?void 0:t.fromValue)||"0")," ",(p=t==null?void 0:t.fromToken)==null?void 0:p.symbol]})]}),e.jsxs(ee,{position:"absolute",top:"-10px",right:"-10px",zIndex:"99",align:"flex-start",children:[e.jsxs(V,{color:"text_caption",maxW:"165px",children:[Ne((t==null?void 0:t.toValue)||"0")," ",(r=t==null?void 0:t.toToken)==null?void 0:r.symbol]}),e.jsx(re,{imageUrl:(i=t==null?void 0:t.toToken)==null?void 0:i.image,w:"20px",h:"20px"})]})]}),(d=t==null?void 0:t.path)==null?void 0:d.map((c,u)=>{var o;return e.jsxs(L,{h:"60px",w:"100%",border:"1px dashed",borderColor:"route_line",borderTop:"none",position:"relative",children:[e.jsx(V,{w:"44px",h:"32px",backdropFilter:"blur(10px)",lineHeight:"32px",textAlign:"center",position:"absolute",bottom:"-16px",children:c==null?void 0:c.share}),(o=c==null?void 0:c.pools)==null?void 0:o.map((R,_)=>{var A;let{token0:b,token1:v}=R;return _===0?(b==null?void 0:b.metadata)!==(h==null?void 0:h.metadata)&&(v=b,b=h):(v==null?void 0:v.metadata)!==(S==null?void 0:S.metadata)&&(b=v,v=S),e.jsx(L,{position:"absolute",bottom:"-16px",right:((A=c==null?void 0:c.pools)==null?void 0:A.length)==1?"34%":_==0?"55%":"15%",zIndex:"99",children:e.jsxs(xt,{trigger:"hover",placement:"top",children:[e.jsx(ht,{children:e.jsx(Ye,{children:e.jsxs(ee,{gap:"4px",cursor:"pointer",p:"0 8px",h:"36px",bg:"card_bg",backdropFilter:"blur(10px)",borderRadius:"8px",children:[e.jsx(L,{children:e.jsx(Ge,{ml:"-4px",w:"20px",coinAIconUrl:b==null?void 0:b.image,coinBIconUrl:v==null?void 0:v.image})}),e.jsx(q,{align:"center",justifyContent:"center",children:e.jsx(V,{maxW:"80px",color:"text_caption",lineHeight:"14px",children:R==null?void 0:R.feeRate})})]})})}),e.jsx(gt,{maxW:"180px",textAlign:"center",children:e.jsx(mt,{children:e.jsxs(V,{fontSize:"xs",children:[R==null?void 0:R.name," ",R==null?void 0:R.feeRate]})})})]})},_)})]},u)})]})})]})]})}function Qe(){const{tucanaRouterSDK:a}=ft(),t=g.useRef();return g.useEffect(()=>{t.current=a},[a]),{getSwapRouter:async(h,S,l,p)=>{var r;try{return await((r=t.current)==null?void 0:r.findBestPaths(h,S,l,p))}catch(i){console.log("getSwapRouter Error: ",i)}},getSwapPayload:(h,S,l)=>{var p;try{return(p=t.current)==null?void 0:p.buildRouterFunction(h,S,l)}catch(r){console.log("getSwapPayload Error: ",r)}}}}function Qt(){const{poolsObj:a}=St(),{getSwapRouter:t}=Qe(),{fromToken:n,toToken:y,fromValue:h,toValue:S,setFromValue:l,setToValue:p,setSwapPreInfo:r,setFeeAmount:i,setPriceImpact:d,setRouterModalData:c,setRouterSimpleInfo:u,setSparateNum:o,setIsPreSwapLoading:R}=Z(),_=(v,A,N)=>{console.log("getRouterModalData params: ",v),console.log("getRouterModalData params.amountIn: ",v.amountIn);const F={fromToken:A,toToken:N,fromValue:ne($(v.amountIn),A==null?void 0:A.decimals),toValue:ne($(v.amountOut),N==null?void 0:N.decimals)},s=[],j=v.amountIn,m=[];console.log("🚀 ~ file: usePreSwap.ts:43 ~ params.combinedPaths.forEach ~ params.combinedPaths:",v.combinedPaths),v.combinedPaths.forEach(w=>{const C=$(w.amountIn).div(j).mul(100).toString(),U=[];w.basicPaths.forEach((O,B)=>{var E,M,P;const x=a[O==null?void 0:O.poolAddress];console.log("getRouterModalData poolInfo: ",x),v.combinedPaths.length===1&&(B===0&&(m==null?void 0:m.length)===0&&m.push(A),B===w.basicPaths.length-1?m.push(N):m.push(((E=x==null?void 0:x.token0)==null?void 0:E.metadata)===(A==null?void 0:A.metadata)?x==null?void 0:x.token1:x==null?void 0:x.token0)),U.push({token0:O!=null&&O.a2b?x==null?void 0:x.token0:x==null?void 0:x.token1,token1:O!=null&&O.a2b?x==null?void 0:x.token1:x==null?void 0:x.token0,name:`${(M=x==null?void 0:x.displayToken0)==null?void 0:M.symbol}-${(P=x==null?void 0:x.displayToken1)==null?void 0:P.symbol}`,poolAddress:O.poolAddress,feeRate:Wt(O.feeRate)})}),s.push({share:Ke(C),pools:U})}),console.log("🚀 ~ file: usePreSwap.ts:74 ~ getRouterModalData ~ result:",s),console.log("🚀 ~ file: usePreSwap.ts:74 ~ getRouterModalData ~ simpleInfo:",m),F.path=s,c(F),u(m)};return{preSwap:async(v,A,N,F)=>{var m,w;const s=N||n,j=F||y;if(s!=null&&s.metadata&&(j!=null&&j.metadata)&&v){if($(v).equals(0)){A?p(""):l(""),r(void 0);return}R(!0);try{console.log("preSwap tokenFrom: ",s),console.log("preSwap tokenTo: ",j),console.log("preSwap byAmountIn: ",A),console.log("preSwap amount: ",v);const C=await t(s==null?void 0:s.metadata,j==null?void 0:j.metadata,A,Number(v)),U=[];console.log("preSwap router: ",C),(m=C==null?void 0:C.combinedPaths)==null||m.forEach(x=>{var M;const E=[];(M=x==null?void 0:x.basicPaths)==null||M.forEach(P=>{var z,H;const W=a[P==null?void 0:P.poolAddress],G=P!=null&&P.currentSqrtPrice?jt.sqrtPriceX64ToPrice(P==null?void 0:P.currentSqrtPrice,(z=W==null?void 0:W.token0)==null?void 0:z.decimals,(H=W==null?void 0:W.token1)==null?void 0:H.decimals).toString().toString():P==null?void 0:P.currentSqrtPrice;E==null||E.push({...P,currentSqrtPrice:P!=null&&P.a2b?G:$(1).div(G).toString()})}),U.push({...x,basicPaths:E})});const O={...C,combinedPaths:U};console.log("preSwap processRouter: ",O),r(C),i(ne(new Se(C==null?void 0:C.feeAmount),s==null?void 0:s.decimals)),d(String(C==null?void 0:C.priceImpact));const B=C.isExceed===!0||C.isExceed&&C.isExceed.filter(x=>x===!1).length===0;if(A){const x=ne(new Se(C.amountOut),j.decimals);p(B||$(x).equals(0)?"":x)}else{const x=ne(new Se(C.amountIn),s.decimals);l(B||$(x).equals(0)?"":x)}o((w=C==null?void 0:C.combinedPaths)==null?void 0:w.length),_(C,s,j),R(!1)}catch(C){console.log("preSwap Error: ",C),R(!1),A?p(""):l("")}}}}}function Zt(a,t,n,y,h,S){const l=g.useMemo(()=>(n==null?void 0:n.metadata)===(a==null?void 0:a.metadata)?"Minimum Received":"Maximum Sold",[n,a,t]),p=g.useMemo(()=>(n==null?void 0:n.metadata)===(a==null?void 0:a.metadata)?`${Q($(h).mul($(1).minus(S)).toString(),t==null?void 0:t.decimals)} ${t==null?void 0:t.symbol}`:`${Q($(y).mul($(1).add(S)).toString(),a==null?void 0:a.decimals)} ${a==null?void 0:a.symbol}`,[S,n,y,h]);return{receiveOrSoldText:l,receiveOrSoldValue:p}}function Tt(a,t,n,y,h,S,l,p){const r=g.useMemo(()=>!!(!h||$(h).lte(0)||!S||$(S).lte(0)),[h,S]),i=g.useMemo(()=>$(h).gt(0)||$(S).gt(0),[h,S]),d=g.useMemo(()=>!n||!y,[n,y]),c=g.useMemo(()=>{if($(l).lt(h||0))return!0},[h,l,n]),u=g.useMemo(()=>{var b;return!!(i&&p&&!p.isExceed&&((b=p==null?void 0:p.combinedPaths)==null?void 0:b.length)===0)},[p,i]),o=g.useMemo(()=>!!(i&&p&&!p.amountTooSmall&&(p.isExceed===!0||p.isExceed&&p.isExceed.filter(b=>b===!1).length===0)),[p,i]),R=g.useMemo(()=>!!(a||t||d||r||c||u||o),[a,t,h,p,l,r,d,c,u,o]),_=g.useMemo(()=>d?"Select a token":o?"Insufficient liquidity for this trade":u?"No Available Route":r?"Enter an amount":c?`Insufficent ${n==null?void 0:n.symbol} balance`:"Swap",[a,t,n,y,h,p,l,r,d,c,u,o]);return{isSubmitBtnDisabled:R,submitBtnText:_,isNoValue:r,isNoToken:d}}function kt(){const a=wt(),{from:t,to:n}=yt(),{signAndExecuteTransaction:y}=Ct(),{slippage:h}=bt(),S=Rt(),{getSwapRouter:l,getSwapPayload:p}=Qe(),{preSwap:r}=Qt(),{fetchTokenBalances:i}=Mt(),{getTokenInfo:d}=qt(),{fromToken:c,toToken:u,fromValue:o,toValue:R,setFromToken:_,setToToken:b,setFromTokenChart:v,setToTokenChart:A,setFromValue:N,setToValue:F,swapPreInfo:s,setSubmitIsLoading:j,submitIsLoading:m,feeAmount:w,priceImpact:C,isPreSwapLoading:U,setIsPreSwapLoading:O,setSwapPreInfo:B,priceIsUpdate:x,setPriceIsUpdate:E}=Z(),M=Be(c),P=Be(u),[W,G]=g.useState(),{receiveOrSoldText:z,receiveOrSoldValue:H}=Zt(c,u,W,o,R,h),{isSubmitBtnDisabled:T,submitBtnText:he,isNoValue:ge,isNoToken:me}=Tt(m,U,c,u,o,R,M,s),fe=async()=>{if(!t&&!n){const{fromCoin:f,toCoin:D}=Pt.swap;_(f),b(D),v(f),A(D)}else{const f=t?await d(t):void 0,D=n?await d(n):void 0;_(f),b(D),v(f),A(D)}};g.useEffect(()=>{fe()},[t,n]);const te=Dt(r,500),ce=f=>{N(f),G(c);try{const D=f?de(f,c==null?void 0:c.decimals).toString():"0";te(D,!0)}catch{r("0",!0)}},ie=f=>{F(f),G(u);try{const D=f?de(f,u==null?void 0:u.decimals).toString():"0";te(D,!1)}catch{r("0",!1)}},I=f=>{(f==null?void 0:f.metadata)===(u==null?void 0:u.metadata)?a(`/swap/${f==null?void 0:f.metadata}/undefined`):a(`/swap/${f==null?void 0:f.metadata}/${u==null?void 0:u.metadata}`),B(void 0)},oe=f=>{(f==null?void 0:f.metadata)===(c==null?void 0:c.metadata)?a(`/swap/undefined/${f==null?void 0:f.metadata}`):a(`/swap/${c==null?void 0:c.metadata}/${f==null?void 0:f.metadata}`),B(void 0)},Ze=g.useMemo(()=>Ke($(h).mul(100).toString()),[h]),[Te,ye]=g.useState(!1),[ke,ts]=g.useState(),et=()=>{ye(!0)},Ce=()=>{x&&Re(),ye(!1)},le=g.useRef(),J=g.useRef();g.useEffect(()=>{J.current=s},[s]);const tt=()=>{var f,D,K,ae;J.current&&(c!=null&&c.metadata)&&(u!=null&&u.metadata)&&l(c==null?void 0:c.metadata,u==null?void 0:u.metadata,(f=J.current)==null?void 0:f.byAmountIn,(D=J.current)!=null&&D.byAmountIn?(K=J.current)==null?void 0:K.amountIn:(ae=J.current)==null?void 0:ae.amountOut).then(Ae=>{var Oe,_e,De,Ee;le.current&&((Oe=J.current)!=null&&Oe.byAmountIn&&Ae.amountOut!==((_e=J.current)==null?void 0:_e.amountOut)||!((De=J.current)!=null&&De.byAmountIn)&&Ae.amountIn!==((Ee=J.current)==null?void 0:Ee.amountIn))&&E(!0)})},st=()=>{le.current=setInterval(async()=>{tt()},5e3)},be=()=>{clearInterval(le.current),le.current=null},Re=async()=>{be(),E(!1),s.byAmountIn?await r(String(s.amountIn),s.byAmountIn):await r(String(s.amountOut),s.byAmountIn)},at=async()=>{j(!0);try{Ce(),console.log("handleSubmitSwap swapPreInfo: ",s),console.log("handleSubmitSwap account: ",S),console.log("handleSubmitSwap sllipage: ",h);const f=p(S,s,h);console.log("handleSubmitSwap payload: ",f);const D=await y([f],{action:vt.Swap,description:"Swap",coinA:{...c,amount:o},coinB:{...u,amount:R}});j(!1),N(""),F(""),B(void 0),await Le(2e3),i()}catch(f){console.log("handleSubmitAdd error: ",f),j(!1)}},nt=async()=>{const f=c;_(u),b(f),v(u),A(f);const D=o;if(N(R),F(D),!o||!R)return;O(!0);const K=s.byAmountIn?s==null?void 0:s.amountIn:s==null?void 0:s.amountOut;console.log("handleToggle swapPreInfo: ",s),console.log("handleToggle amount: ",K),console.log("handleToggle swapPreInfo?.byAmountIn: ",s==null?void 0:s.byAmountIn),s.byAmountIn?N(""):F(""),r(K,!(s!=null&&s.byAmountIn),u,c)},Me=g.useRef(),ve=g.useRef(),se=g.useRef(),ue=g.useRef(),Pe=g.useRef();g.useEffect(()=>{Pe.current=W},[W]),g.useEffect(()=>{se.current=c},[c]),g.useEffect(()=>{ue.current=u},[u]),g.useEffect(()=>{Me.current=o},[o]),g.useEffect(()=>{ve.current=R},[R]);const rt=g.useMemo(()=>s!=null&&Object.keys(s).length!==0,[s]);return{handleFromValueChange:ce,handleToValueChange:ie,handleSubmitSwap:at,slippageTolerance:Ze,receiveOrSoldText:z,receiveOrSoldValue:H,isSubmitBtnDisabled:T,submitBtnText:he,isNoValue:ge,isNoToken:me,fromTokenBalance:M,toTokenBalance:P,handleAccept:Re,priceIsUpdate:x,watchPriceUpdated:st,clearWatchPriceTimer:be,isOpenSecondaryModal:Te,secondaryModalData:ke,handleOpenSecondaryModal:et,handleCloseSecondaryModal:Ce,handleToggle:nt,handleRefresh:()=>{var f,D,K,ae;S&&i(),J.current&&(((f=Pe.current)==null?void 0:f.metadata)===((D=se.current)==null?void 0:D.metadata)?r(de(Me.current||"",(K=se.current)==null?void 0:K.decimals).toString(),J.current.byAmountIn,se.current,ue.current):r(de(ve.current||"",(ae=ue.current)==null?void 0:ae.decimals).toString(),J.current.byAmountIn,se.current,ue.current))},showAutoRefreshAnimate:rt,handleFromTokenChange:I,handleToTokenChange:oe}}function es(a){const{address:t,onboard:n}=At(),{windowWidth:y}=we(),{onClick:h,text:S,isDisabled:l,isLoading:p,w:r,size:i,...d}=a;return t?e.jsx(pe,{w:r,size:i,isLoading:p,isDisabled:l,...d,onClick:h,children:y<=810&&S=="Insufficient liquidity for this trade"?"Insufficient liquidity":S}):e.jsx(pe,{w:r,size:i,...d,onClick:n,children:"Connect"})}function xs(){const{fromToken:a,toToken:t,fromValue:n,toValue:y,setFromToken:h,setToToken:S,resetSwapState:l,feeAmount:p,priceImpact:r,submitIsLoading:i,routerModalData:d,routerSimpleInfo:c,separateNum:u,isPreSwapLoading:o,isOpenSwapChart:R,setIsOpenSwapChart:_}=Z(),{handleFromValueChange:b,handleToValueChange:v,handleSubmitSwap:A,slippageTolerance:N,receiveOrSoldText:F,receiveOrSoldValue:s,isSubmitBtnDisabled:j,submitBtnText:m,isNoValue:w,isNoToken:C,fromTokenBalance:U,toTokenBalance:O,handleAccept:B,priceIsUpdate:x,clearWatchPriceTimer:E,watchPriceUpdated:M,isOpenSecondaryModal:P,secondaryModalData:W,handleOpenSecondaryModal:G,handleCloseSecondaryModal:z,handleToggle:H,handleRefresh:T,showAutoRefreshAnimate:he,handleFromTokenChange:ge,handleToTokenChange:me}=kt(),[fe,te]=g.useState(!1),[ce,ie]=g.useState(!1);return g.useEffect(()=>{window.scrollTo(0,0)},[]),g.useEffect(()=>()=>{_(!1),l()},[]),g.useEffect(()=>{console.log("Swap Page separateNum: ",u)},[u]),e.jsxs(ee,{w:"100%",align:"flex-start",justifyContent:"center",gap:"16px",mt:"20px",sx:{"@media screen and (max-width: 810px)":{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column-reverse"}},children:[R&&e.jsx(L,{w:"664px",minW:"580px",sx:{"@media screen and (max-width: 1000px)":{w:"unset"},"@media screen and (max-width: 810px)":{w:"100%",minW:"unset"}},children:e.jsx(Lt,{})}),e.jsxs(L,{w:"480px",minW:"420px",bg:"card_bg_20",borderRadius:"16px",backdropFilter:"blur(10px)",sx:{"@media screen and (max-width: 810px)":{w:"100%",minW:"unset"}},children:[e.jsxs(L,{p:"20px 16px",bg:"card_bg",borderRadius:"16px",children:[e.jsxs(q,{mb:"20px",alignItems:"center",justifyContent:"space-between",children:[e.jsx(V,{color:"text_caption",fontSize:"xl",children:"Swap"}),e.jsxs(q,{alignItems:"center",children:[e.jsx(_t,{handleClickRefresh:T,noBg:!0,isAutoRefresh:!0,showAutoRefreshAnimate:he}),e.jsx(L,{ml:"20px",children:e.jsx(k,{xlinkHref:"#icon-icon_kline",onClick:()=>_(!R)})}),e.jsx(L,{ml:"20px",children:e.jsx(k,{xlinkHref:"#icon-icon_slider",onClick:()=>te(!0)})})]})]}),e.jsxs(Y,{gap:"0px",w:"100%",children:[e.jsx(Ue,{title:"You pay",currentCoin:a,onTokenChange:I=>{ge(I)},amount:n,balance:U,onAmountChange:b}),e.jsx(q,{gap:"0px",h:"8px",children:e.jsx("div",{className:"exchange swap-exchange",onClick:H})}),e.jsx(Ue,{title:"You receive",noMax:!0,currentCoin:t,onTokenChange:I=>{me(I)},amount:y,balance:O,onAmountChange:v})]}),!w&&!C&&e.jsx(q,{bg:"current_price_bg",borderRadius:"8px",h:"50px",mt:"20px",alignItems:"center",children:e.jsx(Xe,{fromToken:a,toToken:t,fromValue:n,toValue:y,color:"text_caption",isLoading:o})})]}),e.jsxs(L,{mt:"16px",p:"0px 16px 20px",children:[!w&&!C&&e.jsxs(Y,{pb:"20px",gap:"16px",children:[e.jsx(X,{text:"Price Impact",value:Ie(r||"0",2),valueColor:xe(r||"0"),isLoading:o,iconVariant:"error",iconXlinkHref:xe(r)==="error"?"#icon-a-icon_tips_triangle":""}),e.jsx(X,{text:F,value:s,isLoading:o}),e.jsx(X,{text:"Fees",value:`${Q(p,a==null?void 0:a.decimals)} ${a==null?void 0:a.symbol}`,isLoading:o}),e.jsxs(q,{w:"100%",align:"center",justifyContent:"space-between",children:[e.jsx(V,{fontSize:"14px",children:"Route"}),o?e.jsx(Ot,{w:"180px",h:"21px",alignSelf:"end"}):e.jsxs(q,{alignItems:"center",cursor:"pointer",onClick:()=>ie(!0),children:[u>1&&e.jsxs(V,{color:"text_caption",children:[u," Separate Routes"]}),u===1&&(c==null?void 0:c.map((I,oe)=>e.jsx(ee,{children:e.jsxs(Ye,{ml:"4px",children:[e.jsx(re,{imageUrl:I==null?void 0:I.image,w:"16px"}),e.jsx(V,{pl:"4px",color:"text_caption",children:I==null?void 0:I.symbol}),oe!==(c==null?void 0:c.length)-1&&e.jsx(k,{xlinkHref:"#icon-icon_lead",w:"16px",h:"16px"})]})},`swap-simple-router-${oe}`))),u>0&&e.jsx(k,{xlinkHref:"#icon-icon_unfold"})]})]})]}),e.jsx(es,{w:"100%",size:"lg",onClick:G,isLoading:i,isDisabled:j,text:m})]}),ce&&e.jsx(Xt,{isOpen:ce,onClose:()=>ie(!1),data:d}),e.jsx(Et,{isOpen:fe,onClose:()=>te(!1)}),P&&e.jsx(Jt,{slippageTolerance:N,receiveOrSoldText:F,receiveOrSoldValue:s,isOpen:P,onClose:z,onClick:A,handleAccept:B,priceIsUpdate:x,clearWatchPriceTimer:E,watchPriceUpdated:M})]})]})}export{xs as default};
