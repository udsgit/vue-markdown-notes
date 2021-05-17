<template>
  <NoteListItem v-for="note in notes" :key="note.id" :note="note" />
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
