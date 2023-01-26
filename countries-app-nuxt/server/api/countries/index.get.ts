import { api } from '~~/services/api';
import { APICountry } from '~~/types/Country';
import { formatAPICountry } from '~~/utils/formatAPICountry';

export default defineEventHandler(async () => {
  const response = await api.get<APICountry[]>('/subregion/south%20america', {
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

  const formattedCountries = response.data.map((apiCountry) =>
    formatAPICountry(apiCountry)
  );

  return formattedCountries;
});
