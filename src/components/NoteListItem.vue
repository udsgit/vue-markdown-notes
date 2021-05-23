<template>
  <article @click="setActiveNote()">
    {{ title }}
  </article>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "NoteListItem",
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    return {
      title: computed(() => store.getters.getNoteTitle(props.note.id)),
      setActiveNote: () => store.commit("setActiveNote", props.note.id),
    };
  },
};
</script>

<style scoped></style>
