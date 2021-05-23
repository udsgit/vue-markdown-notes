<template>
  <input
    v-model="searchTerm"
    type="search"
    placeholder="Search notes"
    class="border-2 p-2 w-full | rounded-md"
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "SearchNote",
  setup() {
    const store = useStore();
    const searchTerm = computed({
      get: () => store.state.searchTerm,
      set: (value) => store.commit("setSearchTerm", value),
    });
    return {
      searchTerm,
    };
  },
};
</script>

<style scoped></style>
