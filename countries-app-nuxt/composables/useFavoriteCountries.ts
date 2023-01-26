import { LOCAL_STORAGE_KEYS } from '~~/constants/local-storage-keys';
import { FavoriteCountry } from '~~/types/Country';

export const useFavoriteCountries = () =>
  useState<FavoriteCountry[]>('favoriteCountries', () => {
    if (!process.client) return [];

    const favoriteCountriesFromStorage = localStorage.getItem(
      LOCAL_STORAGE_KEYS.favoriteCountries
    );

    return favoriteCountriesFromStorage
      ? (JSON.parse(favoriteCountriesFromStorage) as FavoriteCountry[])
      : [];
  });
