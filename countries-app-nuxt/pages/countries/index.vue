<script lang="ts" setup>
import { LOCAL_STORAGE_KEYS } from '~~/constants/local-storage-keys';
import { Country, FavoriteCountry } from '~~/types/Country';
const { data: countries } = await useFetch('/api/countries');
const favoriteCountries = useFavoriteCountries();

function handleAddCountryToFavorites(country: Country) {
  const newFavoriteCountries: FavoriteCountry[] = [
    ...favoriteCountries.value,
    {
      code: country.code,
      name: country.name,
      flag_url: country.flag_url,
    },
  ];

  favoriteCountries.value = newFavoriteCountries;
  localStorage.setItem(
    LOCAL_STORAGE_KEYS.favoriteCountries,
    JSON.stringify(newFavoriteCountries, null, 4)
  );
}

useHead({
  title: 'Countries listing',
});
</script>

<template>
  <div class="px-14">
    <h1 class="text-2xl text-neutral-700 font-bold">Countries listing</h1>

    <ul
      v-if="countries && countries.length"
      class="mt-6 grid grid-cols-5 gap-6"
    >
      <CountryCard
        v-for="country in countries"
        :key="country.code"
        :country="country"
        @add-country-to-favorites="handleAddCountryToFavorites"
      />
    </ul>
  </div>
</template>
