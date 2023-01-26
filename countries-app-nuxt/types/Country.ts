export type APICountry = {
  cca2: string;
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
  };
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  capital: string[];

  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  borders: string[];
  flag: string;
  population: number;
};

export type Country = {
  code: string;
  flag_url: string;
  name: {
    common: string;
    official: string;
  };
  topLevelDomains: string[];
  currencies: string[];
  capital: string;
  region: string;
  subregion: string;
  languages: string[];
  borderCountries: string[];
  flagEmoji: string;
  population: number;
};

export interface CountryWithBorderCountries
  extends Omit<Country, 'borderCountries'> {
  borderCountries: Array<{
    name: string;
    code: string;
  }>;
}

export type FavoriteCountry = Pick<Country, 'code' | 'name' | 'flag_url'>;
