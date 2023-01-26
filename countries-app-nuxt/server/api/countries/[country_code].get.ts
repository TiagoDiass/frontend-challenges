import { api } from '~~/services/api';
import { APICountry, CountryWithBorderCountries } from '~~/types/Country';
import { formatAPICountry } from '~~/utils/formatAPICountry';

export default defineEventHandler(async (ctx) => {
  const { country_code } = ctx.context.params;

  const response = await api.get<APICountry>(`/alpha/${country_code}`, {
    params: {
      fields: [
        'name',
        'population',
        'region',
        'subregion',
        'capital',
        'tld',
        'currencies',
        'languages',
        'borders',
        'flag',
        'flags',
        'cca2',
      ].join(','),
    },
  });

  const country = formatAPICountry(response.data);

  let borderCountries: Array<Pick<APICountry, 'name' | 'cca2'>> = [];

  if (country.borderCountries.length) {
    const borderCountriesResponse = await api.get<
      Array<Pick<APICountry, 'name' | 'cca2'>>
    >('/alpha', {
      params: {
        codes: country.borderCountries.join(','),
        fields: 'name,cca2',
      },
    });

    borderCountries = borderCountriesResponse.data;
  }

  const countryWithBorderCountries: CountryWithBorderCountries = {
    ...country,
    borderCountries: borderCountries.map((borderCountry) => ({
      name: borderCountry.name.common,
      code: borderCountry.cca2,
    })),
  };

  return countryWithBorderCountries;
});
