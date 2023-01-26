<script setup lang="ts">
const favoriteCountries = useFavoriteCountries();
</script>

<template>
  <div class="bg-neutral-200 min-h-screen">
    <header
      class="bg-neutral-50 py-4 px-10 mb-4 shadow-sm flex justify-between items-center"
    >
      <!-- TODO: mudar isso aqui pra um Link interno do Nuxt, não sei como é exatamente mas deve ser parecido com o <Link /> do Next -->
      <NuxtLink to="/countries" class="text-neutral-900 text-2xl font-bold">
        <h2>Where in the world?</h2>
      </NuxtLink>

      <NuxtLink to="/favorites" class="text-lg text-blue-500 font-semibold">
        Favorite countries ({{ favoriteCountries.length }})
      </NuxtLink>
    </header>

    <NuxtPage />
  </div>
</template>
