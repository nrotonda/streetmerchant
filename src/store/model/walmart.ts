import {Store} from './store';

export const Walmart: Store = {
  currency: '$',
  labels: {
    inStock: [{
      container: '.button.spin-button.prod-ProductCTA--primary.button--primary',
      text: ['add to cart'],
    }, {
      container: '[data-automation-id="atc"]',
      text: ['add to cart'],
    }],
    maxPrice: {
      container: '[data-fs-element="price"]',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.walmart.com/ip/Keurig-K-compact-Brewer-Black-Coffee-Maker/806217614',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.walmart.com/ip/PlayStation5-Console/363472942',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.walmart.com/ip/Sony-PlayStation-5-Digital-Edition/493824815',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.walmart.com/ip/Xbox-Series-X/443574645',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.walmart.com/ip/Xbox-Series-S/606518560',
    },
    {
      brand: 'corsair',
      model: '750 platinum',
      series: 'sf',
      url: 'https://www.walmart.com/ip/SF750-Power-Supply/197046151',
    },
    {
      brand: 'corsair',
      model: '600 platinum',
      series: 'sf',
      url: 'https://www.walmart.com/ip/Corsair-SF-Series-600W-80-Platinum-Power-Supply/250717047',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.walmart.com/ip/AMD-Ryzen-9-5900X-12-core-24-thread-Desktop-Processor/647899167',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3060ti',
      url: 'https://www.walmart.com/ip/912221235',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.walmart.com/ip/804934537',
    },
    {
      brand: 'pokemon',
      model: 'accessory pouch',
      series: 'prismatic evolutions',
      url: 'https://www.walmart.com/ip/Pokemon-Trading-Card-Games-Scarlet-Violet-8-5-Prismatic-Evolutions-Accessory-Pouch/14169661774?classType=REGULAR',
      maxPrice: 30,
    },
    {
      brand: 'pokemon',
      model: 'poster',
      series: 'prismatic evolutions',
      url: 'https://www.walmart.com/ip/Pokemon-Trading-Card-Games-Scarlet-Violet-8-5-Prismatic-Evolutions-Poster-Box/14091452016',
      maxPrice: 16,
    },
    {
      brand: 'pokemon',
      model: 'binder',
      series: 'prismatic evolutions',
      url: 'https://www.walmart.com/ip/Pokemon-Trading-Card-Games-Scarlet-Violet-8-5-Prismatic-Evolutions-Binder-Collection/14078321300?classType=REGULAR&athbdg=L1100',
      maxPrice: 30,
    },
    {
      brand: 'pokemon',
      model: 'etb',
      series: 'prismatic evolutions',
      url: 'https://www.walmart.com/ip/Pokemon-Scarlet-and-Violet-8-5-Prismatic-Evolutions-Elite-Trainer-Box/13816151308',
      maxPrice: 55,
    },
    {
      brand: 'pokemon',
      model: 'booster bundle',
      series: '151',
      url: 'https://www.walmart.com/ip/Pokemon-Trading-Card-Games-Scarlet-Violet-3-5-151-Booster-Bundle-with-6-Booster-Card-Packs/1160437186',
      maxPrice: 30,
    },
    {
      brand: 'pokemon',
      model: 'premium collection',
      series: 'paldean fates',
      url: 'https://www.walmart.com/ip/Pokemon-Trading-Card-Games-SV4-5-Paldean-Fates-Skeledirge-EX-Premium-Collection/5286564403?classType=VARIANT&from=/search',
      maxPrice: 48,
    },
  ],
  name: 'walmart',
  discordWebhook: process.env.DISCORD_WEB_HOOK_WALMART,
};
