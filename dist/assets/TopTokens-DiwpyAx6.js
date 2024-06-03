import{O as X,be as Y,r as x,ax as I,a8 as m,o as ee,j as s,V as u,F as c,bN as se,T as r,I as ne,a9 as re,q as B,aa as te,ab as ae,ac as $,ad as d,ah as k,ae as ie,af as oe,ag as h,aZ as ce,H as R,S as le,ak as w,w as xe,B as de,bA as he,a1 as W}from"./index-CZ9BtG6K.js";import{B as ue}from"./BackButton-kWb8EKEC.js";import{u as ge,H as je}from"./useStatsData-1Zdr_-lD.js";import{T as D}from"./TableCardH5-n0g93OwG.js";function ke(E){const{isViewAll:a}=E,b=X(),{tokenList:g}=Y(),[p,U]=x.useState(1),[o,pe]=x.useState(10),{tokenLoading:T,getStatsTokenData:P}=ge(),{tokensList:j,tokensListLength:f}=I(),{isImportToken:N}=m(),l=x.useMemo(()=>a?j:(j==null?void 0:j.filter(n=>!N((n==null?void 0:n.metadata)||""))).slice(0,o),[j]);x.useEffect(()=>{g&&(g==null?void 0:g.length)>0&&P(i==="asc"?t:"-"+t,a?o:1e3,(p-1)*o)},[p,g]);const q=[{label:"Price",value:"price"},{label:"Price Change",value:"priceChange"},{label:"Volume (24H)",value:"vol"},{label:"TVL",value:"pure_tvl"}],[i,M]=x.useState("desc"),[t,O]=x.useState("vol"),C=(e,n)=>{M(n),O(e),P(n==="asc"?e:"-"+e,a?o:1e3,(p-1)*o)},S=e=>{t==e?C(e,i=="desc"?"asc":"desc"):C(e,"desc")},Z=e=>{U(e)},G=e=>{t!=e&&C(e,"desc")},J=e=>{C(e,i=="desc"?"asc":"desc")},L=e=>s.jsxs(R,{gap:"0px",children:[s.jsx(le,{imageUrl:e==null?void 0:e.image,showTag:N((e==null?void 0:e.metadata)||"")}),s.jsxs(u,{gap:"0px",ml:"8px",align:"flex-start",children:[s.jsx(r,{color:"text_caption",children:e==null?void 0:e.symbol}),s.jsx(r,{fontSize:"xs",children:e==null?void 0:e.name})]})]}),z=e=>{var n;return s.jsx(r,{color:"text_caption",children:w((n=e==null?void 0:e.price)==null?void 0:n.Price,2)})},F=e=>{var n,V,_;return s.jsx(r,{color:Number((n=e==null?void 0:e.price)==null?void 0:n.PriceChange.split("%")[0])>0?"success":"error",children:`${Number((V=e==null?void 0:e.price)==null?void 0:V.PriceChange.split("%")[0])>0?"+":""}${xe(Number((_=e==null?void 0:e.price)==null?void 0:_.PriceChange.split("%")[0]).toFixed(2))}%`})},y=e=>{var n;return s.jsx(r,{color:"text_caption",children:w((n=e==null?void 0:e.volUSD)==null?void 0:n.day,2)})},A=e=>s.jsxs(r,{color:"text_caption",children:[" ",w(e==null?void 0:e.pureTvlUSD,2)]}),H=e=>s.jsx(de,{w:"80px",h:"32px",fontSize:"sm",variant:"ghost",onClick:()=>b(`/swap/undefined/${e==null?void 0:e.metadata}`),sx:{"@media screen and (max-width: 810px)":{w:"100%"}},children:"Swap"}),K=e=>[{leftText:"Price",right:z(e)},{leftText:"Price Change",right:F(e)},{leftText:"Volume (24H)",right:y(e)},{leftText:"TVL",right:A(e)}],{windowWidth:Q}=ee();return s.jsxs(u,{borderRadius:"12px",children:[s.jsxs(c,{w:"100%",align:"center",justifyContent:"space-between",children:[s.jsxs(c,{align:"center",mb:"8px",children:[a?s.jsx(ue,{}):null,s.jsx(se,{color:"text_caption",fontSize:"md",ml:a?"4px":"",children:"Top Tokens"})]}),a?null:s.jsxs(c,{align:"center",cursor:"pointer",onClick:()=>b("/stats/token"),children:[s.jsx(r,{color:"text_caption",sx:{_hover:{color:"primary"}},children:"View All"}),s.jsx(ne,{xlinkHref:"#icon-icon_arrow",cursor:"pointer"})]})]}),s.jsx(re,{w:"100%",children:Q<=810?s.jsxs(u,{w:"100%",children:[s.jsx(B,{mt:"8px",w:"100%",children:s.jsx(je,{sortingRule:i,sortingField:t,onSortingFieldClick:e=>G(e),onSortClick:e=>J(e),list:q,isPool:!0})}),T?[{},{},{}].map((e,n)=>s.jsx(u,{w:"100%",children:s.jsx(D,{LoadingFirstTd:v(),isLoading:T})},n)):l==null?void 0:l.map((e,n)=>s.jsx(u,{w:"100%",children:s.jsx(D,{LoadingFirstTd:v(),isLoading:T,tokensSymbol:L(e),rowList:K(e),btntNode:H(e)})},e==null?void 0:e.metadata))]}):s.jsxs(te,{size:"sm",children:[s.jsx(ae,{children:s.jsxs($,{children:[s.jsx(d,{children:"Token"}),s.jsx(d,{isNumeric:!0,textAlign:"right",children:s.jsxs(c,{align:"center",justifyContent:"flex-end",onClick:()=>S("price"),children:[s.jsx(r,{fontSize:"xs",children:"Price"}),s.jsx(k,{value:t=="price"?i:void 0})]})}),s.jsx(d,{isNumeric:!0,children:s.jsxs(c,{align:"center",justifyContent:"flex-end",onClick:()=>S("priceChange"),children:[s.jsx(r,{fontSize:"xs",children:"Price Change"}),s.jsx(k,{value:t=="priceChange"?i:void 0})]})}),s.jsx(d,{isNumeric:!0,textAlign:"right",children:s.jsxs(c,{align:"center",justifyContent:"flex-end",onClick:()=>S("vol"),children:[s.jsx(r,{fontSize:"xs",children:"Volume (24H)"}),s.jsx(k,{value:t=="vol"?i:void 0})]})}),s.jsx(d,{isNumeric:!0,textAlign:"right",children:s.jsxs(c,{align:"center",justifyContent:"flex-end",onClick:()=>S("pure_tvl"),children:[s.jsx(r,{fontSize:"xs",children:"TVL"}),s.jsx(k,{value:t=="pure_tvl"?i:void 0})]})}),s.jsx(d,{})]})}),T?s.jsx(ie,{tableList:[{},{},{},{},{},{},{},{},{},{}],tdList:[{},{},{},{},{}],firstTd:v(),minW:"200px"}):s.jsx(oe,{children:l==null?void 0:l.map((e,n)=>s.jsxs($,{h:"72px",cursor:"pointer",onClick:()=>b(`/swap/undefined/${e==null?void 0:e.metadata}`),children:[s.jsx(h,{minW:"200px",children:L(e)}),s.jsx(h,{isNumeric:!0,textAlign:"right",children:z(e)}),s.jsx(h,{isNumeric:!0,textAlign:"right",children:F(e)}),s.jsx(h,{isNumeric:!0,textAlign:"right",children:y(e)}),s.jsx(h,{isNumeric:!0,textAlign:"right",children:A(e)}),s.jsx(h,{isNumeric:!0,children:H(e)})]},n))})]})}),!a||Number(f)<o?null:s.jsx(B,{m:"20px 0",children:s.jsx(ce,{total:Number(f)<20||a?f:20,size:o,currentPage:p,onChange:Z})})]})}function v(){return s.jsxs(R,{gap:"4px",align:"center",children:[s.jsx(he,{size:"9"}),s.jsxs(u,{gap:"4px",align:"flex-start",children:[s.jsx(W,{}),s.jsx(W,{w:"60px"})]})]})}export{ke as T};
