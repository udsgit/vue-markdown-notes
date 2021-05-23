<template>
  <transition-group name="list-complete">
    <NoteListItem
      v-for="note in notes"
      :key="note.id"
      :note="note"
      class="
        list-complete-item
        |
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
  </transition-group>
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
      notes: computed(() => store.getters.getNotesBySearchTerm),
    };
  },
};
</script>

<style>
.list-complete-item {
  transition: all 0.5s ease-in-out;
}
.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
}
.list-complete-leave-active {
  position: relative;
}
</style>
