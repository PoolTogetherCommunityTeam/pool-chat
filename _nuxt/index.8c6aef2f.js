import{a as r,l as n,c as i,D as p,o as c}from"./entry.15ab15d4.js";import{C as m}from"./ChatFeed.9a3382d3.js";import"./ChatPost.098b07b9.js";import"./user.c713bfde.js";import"./ProfileImage.228fba58.js";import"./WaitingToast.384942ee.js";import"./textUtils.5b6cf38d.js";import"./MintedPostImage.3011f00d.js";import"./storageUtils.215ac5b7.js";import"./SwitchChainButton.a24eae00.js";import"./site.bf89fb00.js";import"./ConnectWalletButton.7040fe50.js";import"./FileUploadModal.94d1762e.js";const a={name:"index",components:{ChatFeed:m},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,u,f,h,e){const s=p("ChatFeed");return c(),i(s,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(a,[["render",d]]);export{Q as default};