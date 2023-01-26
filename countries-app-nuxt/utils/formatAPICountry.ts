import { APICountry, Country } from '~~/types/Country';

export function formatAPICountry(apiCountry: APICountry): Country {
  return {
    code: apiCountry.cca2,
    flag_url: apiCountry.flags.svg,
    name: apiCountry.name,
    topLevelDomains: apiCountry.tld,
    currencies: Object.values(apiCountry.currencies).map(
      (currency) => currency.name
    ),
    capital: apiCountry.capital[0] || 'No capital',
    region: apiCountry.region,
    subregion: apiCountry.subregion,
    languages: Object.values(apiCountry.languages),
    borderCountries: apiCountry.borders,
    flagEmoji: apiCountry.flag,
    population: apiCountry.population,
  };
}
