import { describe, expect, it } from 'vitest';
import { APICountry, Country } from '~~/types/Country';
import { formatAPICountry } from './formatAPICountry';

describe('Name of the group', () => {
  it('should format an APICountry correctly', () => {
    const APICountry: APICountry = {
      cca2: 'BEL',
      flags: {
        png: 'https://flagcdn.com/w320/be.png',
        svg: 'https://flagcdn.com/be.svg',
      },
      name: {
        common: 'Belgium',
        official: 'Kingdom of Belgium',
      },
      tld: ['.be'],
      currencies: {
        EUR: {
          name: 'Euro',
        },
      },
      capital: ['Brussels'],

      region: 'Europe',
      subregion: 'Western Europe',
      languages: {
        deu: 'German',
        fra: 'French',
        nld: 'Dutch',
      },
      borders: ['FRA', 'DEU', 'LUX', 'NLD'],
      flag: '🇧🇪',
      population: 11555997,
    };

    const formattedCountry: Country = {
      code: 'BEL',
      flag_url: 'https://flagcdn.com/be.svg',
      name: {
        common: 'Belgium',
        official: 'Kingdom of Belgium',
      },
      topLevelDomains: ['.be'],
      currencies: ['Euro'],
      capital: 'Brussels',
      region: 'Europe',
      subregion: 'Western Europe',
      languages: ['German', 'French', 'Dutch'],
      borderCountries: ['FRA', 'DEU', 'LUX', 'NLD'],
      flagEmoji: '🇧🇪',
      population: 11555997,
    };

    expect(formatAPICountry(APICountry)).toEqual(formattedCountry);
  });
});
