import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://nuxt.com/docs/api/configuration/nuxt-config 
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        { // Bootstrap
          rel: "stylesheet",
          href: "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        },
        { // Bootstrap icons
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        },
        { // Custom
          rel: "stylesheet",
          href: "/css/custom.css"
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        }
      ]
    }
  },
  components: false,
  css: [
    'vue-toastification/dist/index.css' 
  ],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  router: {
    options: {
      hashMode: false
    }
  },
  runtimeConfig: {
    public: {
      activityPointsAddress: "",
      airdropApAddress: "", // chat token claim for APs
      airdropClaimDomainsAddress: "", // chat token claim for domain holders
      blockExplorerBaseUrl: "https://optimistic.etherscan.io",
      chatTokenAddress: "0x395ae52bb17aef68c2888d941736a71dc6d4e125", // chat token address
      chatTokenImage: "https://chat.pooly.me/img/pool-token.svg", // chat token image
      chatTokenSymbol: "POOL", // chat token symbol or name
      domainRequiredToPost: true,
      expiryCollections: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      expiryUsernames: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      favicon: "/img/favicon.svg",
      fileUploadEnabled: true, // enable/disable file uploads (enable only if external file storage is used, e.g. IPFS via Spheron)
      fileUploadSizeLimit: 1 * 1024 * 1024, // max file upload size in bytes (1 * 1024 * 1024 = 1 MB)
      fileUploadTokenService: process.env.FILE_UPLOAD_SERVICE || "netlify", // "netlify" or "vercel" (or leave empty for no file uploads)
      getPostsLimit: 30, // number of posts to fetch from Orbis in the getPosts() function
      governanceUrl: "https://gov.pooltogether.com/", // governance url (snapshot, Tally, etc.)
      iggyPostAddress: "0x2D4144B4E00cf1dC1c4DeDa37cb1CaCEda030998",
      iggyPostMinterAddress: "0x99Dbf11aCd46baFBCE82506FaeB4F13E6Ea1726A",
      iggyPostStatsAddress: "0xce314209aB485bE222CE85F653Ac918f54532503",
      ipfsGateway: "https://cloudflare-ipfs.com/ipfs/",
      keysAddress: "", // FriendKeys contract address 
      keysContext: "kjzl6cwe1jw14bbpho1p8trf30fcwloknxlg4o12yyqf1f16gcy8qsf89bzt8lt",
      keysFeatured: ["noxe", "tempe", "tekr"],
      linkPreviews: process.env.LINK_PREVIEW_SERVICE || "netlify", // "netlify", "vercel", or "microlink" (or leave empty for no link previews)
      lpTokenAddress: "", // liquidity pool token (token to stake in the staking contract)
      lpTokenSymbol: "LP tokens", // LP token symbol
      marketplacePostNftUrl: "https://opensea.io/assets/optimism/0x2D4144B4E00cf1dC1c4DeDa37cb1CaCEda030998",
      marketplacePostNftItemUrl: "https://opensea.io/assets/optimism/0x2D4144B4E00cf1dC1c4DeDa37cb1CaCEda030998/", // url (append nft id to it)
      marketplaceNftCollectionBaseUrl: "https://opensea.io/assets/optimism/", // url (append nft address to it)
      newsletterLink: "https://pooltogethercommunity.substack.com/s/community-newsletter",
      nftDefaultRatio: 1, // default ratio for the NFT price bonding curve
      nftLaunchpadBondingAddress: "", // NFT launchpad with bonding curve contract address
      nftLaunchpadLatestItems: 4, // number of latest NFTs to show in the NFT launchpad
      nftOrbisContext: "kjzl6cwe1jw149xvb1pc3wjqnqc9xckuhn0ybvaybayssdstzia2cfebu1kdlq7", // Orbis context for NFT collection pages
      orbisCategories: [ // use only alphanumeric ASCII characters for slugs! (no spaces, only dash is allowed)
        { "slug": "all", "title": "All posts", "hidden": false }, // not a real tag, just denotes the absence of a tag (always keep it here)
        { "slug": "general", "title": "General discussion", "hidden": false },
        { "slug": "shill", "title": "Shill & discuss projects", "hidden": true },
        { "slug": "nfts", "title": "Memes & NFTs", "hidden": false }, // keep this category for the purpose of the NFT launchpad
        { "slug": "governance", "title": "Governance", "hidden": true },
        { "slug": "food", "title": "Food & recipes", "hidden": true },
        { "slug": "movie", "title": "Movies & Music", "hidden": false },
        { "slug": "music", "title": "Music", "hidden": true },
        { "slug": "random", "title": "Random", "hidden": false },
      ],
      orbisContext: "kjzl6cwe1jw149uevmi815c06fw6eor47hf44d5zpp7fmqabtchw40m5zipz0zz", // production context
      orbisTest: false, // if true, test context will be used instead of the production one
      orbisTestContext: "kjzl6cwe1jw145tfqv2eqv8tiz6puo27meyz4smz40atppuc13tulqca87k35z2", // test context
      previewImage: "/img/covers/cover.jpg",
      previewImageAirdrop: "/img/covers/cover-airdrop.jpg",
      previewImageNftCollection: "/img/covers/cover-nft-collection.jpg",
      previewImageNftCreate: "/img/covers/cover-nft-create.jpg",
      previewImageNftLaunchpad: "/img/covers/cover-nft-launchpad.jpg",
      previewImagePost: "/img/covers/cover-post.jpg",
      previewImagePostNft: "/img/covers/cover-post-nft.jpg",
      previewImageProfile: "/img/covers/cover-profile.jpg",
      previewImageStake: "/img/covers/cover-stake.jpg",
      profileMintedPostIdsMax: 36, // max number of minted post ids to show in the profile page
      projectMetadataTitle: "Pool Chat | Web3 Social chat for the PoolTogether community",
      projectName: "Pool Chat",
      projectDescription: "This is a decentralized social chat for the PoolTogether community. Brought to you by Pooly.me and Iggy Social.",
      projectTwitter: "https://twitter.com/PoolTogether_",
      projectUrl: "https://chat.pooly.me", // without trailing slash!
      punkMinterAddress: "0x77AE10Dd2E7Fc7b2819602D483765D705E9B8DDA", // punk domain minter contract address
      punkNumberOfPrices: 5, // number of different prices (based on domain length), usually 1 (price()) or 5 (price1char() - price5char())
      punkTldAddress: "0xf2C9E463592BD440f0D422E944E5F95c79404586", // punk domain TLD address
      randomPostsNumber: 1, // number of random post NFTs to show in the sidebar widget
      rpcCustom: process.env.RPC_CUSTOM || "https://mainnet.optimism.io", // Custom RPC URL
      showFeatures: { // show/hide features in sidebars (if you have too many "true", make the sidebar scrollable --> sidebarLeftSticky: false)
        "activityPoints": false, 
        "airdrop": false, 
        "friendKeys": false, 
        "governance": true,
        "newsletter": true, 
        "nftLaunchpad": false, 
        "randomMintedPosts": true, 
        "swap": false, 
        "stake": false, 
        "sendTokens": true, 
        "spotify": false
      }, 
      showRepliesOnHomepage: true, // show replies on the homepage  
      sidebarLeftSticky: true, // make the left sidebar sticky (always visible)
      spotifyPlaylistId: "5y7f2Wxfq49G5KuNQfMPbk", // enter just the ID of the playlist (not the full URL)  
      stakingContractAddress: "", // this is also the stake/gov token address
      stakeTokenSymbol: "IGT", // stake token symbol (governance token symbol)
      supportedChainId: 10,
      swapPriceImpactMaxBps: 1000, // max price impact in bips (1 bps = 0.01%, 1000bps = 10%) for the swap function
      swapRouterAddress: "", // iggy swap router contract address
      tenorApiKey: process.env.TENOR_KEY || "AIzaSyCLhy2FZduniivfDWAV7wgpGmSnrXBeq-8",
      tldName: ".pool",
      tokenAddress: null, // leave null if it's a native token of the chain
      tokenDecimals: 18,
      tokenSymbol: "ETH"
    }
  },
  vite: {
    build: {
      target: ['es2020'] // fix big integer literals error
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'  // fix nuxt3 global
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,  // fix nuxt3 process
            buffer: true
          }),
          NodeModulesPolyfillPlugin()
        ],
        target: "es2020" // fix big integer literals error
      }
    }
  }
})
