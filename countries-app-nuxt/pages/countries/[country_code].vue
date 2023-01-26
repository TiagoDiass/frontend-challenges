<script setup lang="ts">
console.log('#### running country details vue component');

const router = useRouter();
const navigateBack = router.back;

const route = useRoute();

const countryCode = route.params.country_code;

const { data: country } = await useFetch(`/api/countries/${countryCode}`);

const title = country
  ? `Details of ${country.value?.name.common} ${country.value?.flagEmoji}`
  : 'No country with this code';

useHead({
  title,
});
</script>

<template>
  <div class="p-14">
    <button @click="navigateBack" class="bg-blue-500 text-white p-4 rounded">
      ⬅️ Go back to countries list
    </button>

    <div v-if="!country">
      <p>Loading...</p>
    </div>
    <main v-else class="mt-10 flex gap-20 h-[36rem]">
      <img :src="country.flag_url" :alt="country.name.common" class="h-full" />

      <div class="flex flex-col gap-12">
        <h1 class="text-5xl text-neutral-900 font-bold">
          {{ country.name.common }} {{ country.flagEmoji }}
        </h1>

        <ul>
          <li>
            <strong>Official Name:</strong>
            {{ country.name.official }}
          </li>
          <li>
            <strong>Population:</strong>
            {{ country.population }}
          </li>
          <li>
            <strong>Region:</strong>
            {{ country.region }}
          </li>
          <li>
            <strong>Subregion</strong>
            {{ country.subregion }}
          </li>
          <li>
            <strong>Capital:</strong>
            {{ country.capital }}
          </li>
          <li>
            <strong>Top Level Domains:</strong>
            {{ country.topLevelDomains.join(', ') }}
          </li>
          <li>
            <strong>Currencies:</strong>
            {{ country.currencies.join(', ') }}
          </li>
          <li>
            <strong>Languages:</strong>
            {{ country.languages.join(', ') }}
          </li>
        </ul>

        <div v-if="country.borderCountries.length">
          <strong>Border countries: </strong>

          <div class="flex gap-2 flex-wrap">
            <NuxtLink
              v-for="borderCountry in country.borderCountries"
              :to="`/countries/${borderCountry.code}`"
              :key="borderCountry.code"
              class="border border-neutral-400 bg-neutral-50 px-4 py-1 shadow-sm rounded hover:bg-neutral-200 flex items-center"
            >
              {{ borderCountry.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
