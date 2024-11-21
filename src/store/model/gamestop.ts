import {Store} from './store';

export const Gamestop: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container: '.add-to-cart',
        text: ['add to cart'],
      },
      {
        container: '.add-to-cart',
        text: ['Pre-Order'],
      },
    ],
    maxPrice: {
      container: '.primary-details-row .actual-price',
      euroFormat: false,
    },
    outOfStock: {
      container: '.add-to-cart',
      text: ['not available'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3080-ftw3-ultra-gaming-graphics-card/11121601.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3090',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3090-24-gb-gddr6x-suprim-x-graphic-card/11118698.html',
    },
    {
      brand: 'evga',
      model: 'xc gaming',
      series: '3060',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3060-xc-gaming-graphics-card/11121604.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3070-8-gb-gddr6-suprim-x-graphic-card/11118700.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3080-10-gb-gddr6x-strix-graphic-card/11112926.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/tuf-gaming-geforce-rtx-3080-graphics-card/11109446.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3070-8-gb-gddr6-gaming-x-trio-graphic-card/11118701.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3060ti',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3060-ti-ftw3-ultra-gaming-graphics-card/11121603.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3080-10-gb-gddr6x-gaming-x-trio-graphic-card/11118753.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3060-8-gb-gddr6-ti-gaming-x-trio-graphic-card/11118702.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3090-24gb-gddr6x-pci-express-4.0-strix-graphics-card/11112502.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3070-ftw3-ultra-gaming-graphics-card/11121602.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3090-24-gb-gddr6x-gaming-x-trio-graphic-card/11118752.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3090-ftw3-ultra-gaming-graphics-card/11121600.html',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5/11108140',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5-digital-edition/11108141',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.gamestop.com/video-games/xbox-series-x/consoles/products/xbox-series-x/B224744V.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.gamestop.com/video-games/xbox-series-x/consoles/products/xbox-series-s-digital-edition/B224746K.html',
    },
    {
      brand: 'pokemon',
      model: 'blooming waters',
      series: '151',
      url: 'https://www.gamestop.com/toys-games/trading-cards/products/pokemon-trading-card-game-blooming-waters-premium-collection/418863.html',
    },
    {
      brand: 'pokemon',
      model: 'tin',
      series: '151',
      url: 'https://www.gamestop.com/toys-games/trading-cards/products/pokemon-trading-card-game-scarlet-and-violet-151-collection-mini-tin-styles-may-vary/395214.html',
      maxPrice: 12,
      enabled: false,
    },
    {
      brand: 'pokemon',
      model: '2 pack blister',
      series: 'prismatic evolutions',
      url: 'https://www.gamestop.com/toys-games/trading-cards/products/pokemon-trading-card-game-prismatic-evolutions-blister---two-pack/418758.html',
    },
    {
      brand: 'pokemon',
      model: 'tin',
      series: 'prismatic evolutions',
      url: 'https://www.gamestop.com/toys-games/trading-cards/products/pokemon-trading-card-game-prismatic-evolutions-mini-tin-styles-may-vary/418756.html',
    },
    {
      brand: 'pokemon',
      model: 'etb',
      series: 'prismatic evolutions',
      url: 'https://www.gamestop.com/toys-games/trading-cards/products/pokemon-trading-card-game-prismatic-evolutions-elite-trainer-box/20018505.html',
    },
    {
      brand: 'pokemon',
      model: 'binder',
      series: 'prismatic evolutions',
      url: 'https://www.gamestop.com/toys-games/trading-cards/products/pokemon-trading-card-game-prismatic-evolutions-binder-collection/20018509.html',
    },
    {
      brand: 'pokemon',
      model: '3 pack blister',
      series: 'prismatic evolutions',
      url: 'https://www.gamestop.com/toys-games/trading-cards/products/pokemon-trading-card-game-prismatic-evolutions-tech-sticker-collection/20018508.html',
    },
    {
      brand: 'pokemon',
      model: 'poster',
      series: 'prismatic evolutions',
      url: 'https://www.gamestop.com/toys-games/trading-cards/products/pokemon-trading-card-game-prismatic-evolutions-poster-collection/20018506.html',
    },
  ],
  name: 'gamestop',
  discordWebhook: process.env.DISCORD_WEB_HOOK_GAMESTOP,
  successStatusCodes: [[0, 399], 404],
};
