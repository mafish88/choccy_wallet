const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-CBwVTP2z.js","./iframe-D5aPMX--.js","./index-DmaKNbeP.js","./index-CfOrKyLd.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-D5aPMX--.js";var s=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),l={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-CBwVTP2z.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>s[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{l as parameters};
