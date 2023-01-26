<template>
  <div example="composables/use-state">
    <div class="flex flex-col items-center gap-3">
      <h2>Favorite countries:</h2>

      <ul class="flex flex-col gap-3">
        <PersonCard
          :person="{ name: 'Tiago', age: 21 }"
          @clicked-person="handleClick"
        />
        <PersonCard
          :person="{ name: 'Moisés', age: 19 }"
          @clicked-person="handleClick"
        />
        <PersonCard
          :person="{ name: 'Lucas', age: 19 }"
          @clicked-person="handleClick"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
type Person = {
  name: string;
  age: number;
};

const handleClick = (v: Person) => console.log(v);
</script>
