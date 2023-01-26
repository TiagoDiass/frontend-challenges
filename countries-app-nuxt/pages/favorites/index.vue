<script setup lang="ts">
import { LOCAL_STORAGE_KEYS } from '~~/constants/local-storage-keys';
import { FavoriteCountry } from '~~/types/Country';

const favorites = useFavoriteCountries();

function handleRemoveCountryFromFavorites(country: FavoriteCountry) {
  const newFavoriteCountries = favorites.value.filter(
    (c) => c.code !== country.code
  );

  favorites.value = newFavoriteCountries;
  localStorage.setItem(
    LOCAL_STORAGE_KEYS.favoriteCountries,
    JSON.stringify(newFavoriteCountries, null, 4)
  );
}

useHead({
  title: 'Favorite countries ❤️',
});
</script>

<template>
  <div class="px-14">
    <h1 class="text-2xl text-neutral-700 font-bold">Favorites countries ❤️</h1>

    <ul class="mt-6 grid grid-cols-5 gap-6">
      <li
        v-for="country in favorites"
        :key="country.code"
        class="flex flex-col rounded bg-neutral-50 shadow"
      >
        <img
          :src="country.flag_url"
          :alt="country.name.common"
          class="w-full h-60 rounded-tl rounded-tr"
        />

        <div class="px-4 py-6">
          <h6 class="text-neutral-900 font-bold text-lg mb-2">
            {{ country.name.common }}
          </h6>

          <NuxtLink
            :to="`/countries/${country.code}`"
            class="block mt-4 bg-blue-500 text-center py-2 text-neutral-50 rounded font-semibold"
            >Details ➡️</NuxtLink
          >

          <button
            @click="handleRemoveCountryFromFavorites(country)"
            class="w-full mt-2 bg-red-600 text-center py-2 text-neutral-50 rounded font-semibold hover:bg-red-700 transition"
          >
            Remove from favorites 🗑️
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
