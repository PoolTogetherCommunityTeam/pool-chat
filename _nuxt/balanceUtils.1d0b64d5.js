import{q as r,I as u,C as l,p,r as d,A as v}from"./entry.3e7ba683.js";import{E as f}from"./Erc20Abi.14cea30b.js";async function P(a,o){const e=r();let c=o;o||(c=this.$getFallbackProvider(e.supportedChainId));const i=new u(["function getPoints(address user_) external view returns (uint256)"]),s=await new l(e.activityPointsAddress,i,c).getPoints(a);let n=Number(p(s));return n<1?n=n.toFixed(2):n=Math.round(n),n}async function m(a,o,e,c){const i=r();let t=c;t||(t=this.$getFallbackProvider(i.supportedChainId));const n=await new l(a.address,f,t).allowance(o,e);return d(n,a.decimals)}async function y(a,o,e){const c=r();let i=e;i||(i=this.$getFallbackProvider(c.supportedChainId));let t;return a.address===v?e?t=await e.getBalance():t=await i.getBalance(o):t=await new l(a.address,f,i).balanceOf(o),d(t,a.decimals)}export{y as a,m as b,P as g};