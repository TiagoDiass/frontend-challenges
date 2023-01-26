<script lang="ts" setup>
type Person = {
  name: string;
  age: number;
};

const { person } = defineProps<{ person: Person }>();

const emit = defineEmits<{
  (e: 'clickedPerson', person: Person): void;
}>();
</script>

<template>
  <div
    class="p-6 bg-blue-400 rounded shadow flex items-center justify-center flex flex-col"
  >
    <h3 class="text-white font-bold text-3xl">Name: {{ person.name }}</h3>
    <h2 class="text-white font-bold text-3xl">Age: {{ person.age }}</h2>

    <button
      class="mt-4 bg-neutral-50 py-2 px-4 text-blue-400"
      @click="emit('clickedPerson', person)"
    >
      CLICK
    </button>
  </div>
</template>
