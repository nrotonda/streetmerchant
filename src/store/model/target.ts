import {Store} from './store';

export const Target: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container: '[data-test="preorderButton"]',
        text: ['Preorder now'],
      },
      {
        container: '[data-test="shipItButton"]',
        text: ['Ship it'],
      },
      {
        container: '[data-test="shippingButton"]',
        text: ['Add to cart'],
      },
    ],
    maxPrice: {
      container: '[data-test="product-price"]',
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.target.com/p/playstation-5-console/-/A-87716467',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.target.com/p/playstation-5-digital-edition-console/-/A-81114596',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.target.com/p/xbox-series-x-console/-/A-80790841',
    },
    {
      brand: 'pokemon',
      model: 'poster',
      series: 'prismatic evolutions',
      url: 'https://www.target.com/p/2025-pokemon-scarlet-violet-s8-5-poster-collection--no-aasa/-/A-93803457',
    },
    {
      brand: 'pokemon',
      model: 'etb',
      series: 'prismatic evolutions',
      url: 'https://www.target.com/p/2024-pok-scarlet-violet-s8-5-elite-trainer-box/-/A-93954435',
    },
    {
      brand: 'pokemon',
      model: 'etb',
      series: 'paldean fates',
      url: 'https://www.target.com/p/pok-233-mon-trading-card-game-scarlet-38-violet-8212-paldean-fates-elite-trainer-box/-/A-89432659',
    },
  ],
  name: 'target',
  discordWebhook: process.env.DISCORD_WEB_HOOK_TARGET,
};
