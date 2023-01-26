<script setup lang="ts">
import { Country } from '~~/types/Country';

const { country } = defineProps<{ country: Country }>();
const emit = defineEmits<{
  (e: 'addCountryToFavorites', country: Country): void;
}>();
</script>

<template>
  <li class="flex flex-col rounded bg-neutral-50 shadow">
    <img
      :src="country.flag_url"
      :alt="country.name.common"
      class="w-full h-60 rounded-tl rounded-tr"
    />

    <div class="px-4 py-6">
      <h6 class="text-neutral-900 font-bold text-lg mb-2">
        {{ country.name.common }}
      </h6>

      <span class="block text-sm">
        <strong>Population:</strong>
        {{ country.population }}
      </span>

      <span class="block text-sm">
        <strong>Region:</strong>
        {{ country.region }}
      </span>

      <span class="block text-sm">
        <strong>Capital:</strong>
        {{ country.capital }}
      </span>

      <NuxtLink
        :to="`/countries/${country.code}`"
        class="block mt-4 bg-blue-500 text-center py-2 text-neutral-50 rounded font-semibold"
        >Details ➡️</NuxtLink
      >

      <button
        @click="emit('addCountryToFavorites', country)"
        class="w-full mt-2 bg-neutral-400 text-center py-2 text-neutral-50 rounded font-semibold hover:bg-neutral-500 transition"
      >
        Add to favorites 🤍
      </button>
    </div>
  </li>
</template>
