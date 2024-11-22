import {Store} from './store';

export const PokemonCenter: Store = {
  backoffStatusCodes: [403, 429, 503],
  captchaDeterrent: {
    hardLinks: [
      'https://www.pokemoncenter.com/category/delicious-adventure-figures',
      'https://www.pokemoncenter.com/category/new-releases',
      'https://www.pokemoncenter.com/category/video-game',
    ],
    searchTerms: ['pokemon', 'plushie'],
    searchUrl: 'https://www.pokemoncenter.com/search/',
  },
  currency: '$',
  labels: {
    inStock: [
      {
        container: '.add-to-cart-button--PZmQF btn--ICBoB btn-secondary--mtUol',
        text: ['Add to Cart'],
      },
    ],
    outOfStock: {
      container: '.add-to-cart-button--PZmQF btn--ICBoB btn-tertiary--_2uKVi disabled--vkECP',
      text: ['Unavailable'],
    },
  },
  links: [
    {
      brand: 'pokemon',
      model: 'etb-pokemon-center',
      series: 'Prismatic Evolution',
      url: 'https://www.pokemoncenter.com/product/100-10019/pokemon-tcg-scarlet-and-violet-prismatic-evolutions-pokemon-center-elite-trainer-box',
    },
  ],
  name: 'pokemoncenter',
  discordWebhook: process.env.DISCORD_WEB_HOOK_POKEMONCCENTER,
};
