import{H as l,T as d,M as m}from"./components.d0d650ba.js";import{t as _}from"./tokens.205ab835.js";import{S as f}from"./SimpleSwap.9ae0c24e.js";import{a as u,b as w,e,w as a,f as t,F as S,D as k,o as g,i as h,t as T}from"./entry.3e7ba683.js";import"./composables.fad3d78b.js";import"./balanceUtils.1d0b64d5.js";import"./Erc20Abi.14cea30b.js";import"./site.605ad01e.js";import"./ConnectWalletButton.c8e0f8d0.js";import"./WaitingToast.72728b57.js";const $={name:"Swap",components:{SimpleSwap:f},setup(){return{tokens:_}}},b={class:"scroll-500"},v={class:"card border"},M={class:"card-body mb-3"},y={class:"fs-3"},j=t("h3",{class:"mt-3"},"Token Swap",-1),A={class:"d-flex justify-content-center mt-5"},B={class:"col-12 col-lg-8"};function C(o,s,H,n,N,V){const r=d,c=m,i=l,p=k("SimpleSwap");return g(),w(S,null,[e(i,null,{default:a(()=>[e(r,null,{default:a(()=>[h("Swap | "+T(o.$config.projectMetadataTitle),1)]),_:1}),e(c,{property:"og:title",content:"Token Swap | "+o.$config.projectMetadataTitle},null,8,["content"])]),_:1}),t("div",b,[t("div",v,[t("div",M,[t("p",y,[t("i",{class:"bi bi-arrow-left-circle cursor-pointer",onClick:s[0]||(s[0]=x=>o.$router.back())})]),j,t("div",A,[t("div",B,[e(p,{routerAddress:o.$config.swapRouterAddress,swapId:"SwapPage1",tokens:n.tokens},null,8,["routerAddress","tokens"])])])])])])],64)}const K=u($,[["render",C]]);export{K as default};