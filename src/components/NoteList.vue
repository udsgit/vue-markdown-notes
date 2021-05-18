<template>
  <NoteListItem
    v-for="note in notes"
    :key="note.id"
    :note="note"
    class="
      p-3
      my-4
      h-14
      |
      border-2 border-white
      bg-gray-300
      shadow-xl
      rounded-md
      |
      cursor-pointer
    "
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import NoteListItem from "./NoteListItem";
export default {
  name: "NoteList",
  components: {
    NoteListItem,
  },
  setup() {
    const store = useStore();

    return {
      notes: computed(() => store.state.notes),
    };
  },
};
</script>

<style scoped></style>
