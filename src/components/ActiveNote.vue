<template>
  <div v-if="activeNote" class="h-full gap-3 | flex flex-col">
    <!-- Editing -->

    <div class="flex-1 flex">
      <section class="flex-1">
        <ActiveNoteMd
          v-model:body="activeNote.body"
          @blur-note="blurNote"
          class="w-full h-full p-3 | bg-gray-200"
        />
      </section>
      <ActiveNoteHtml
        :body="activeNote.body"
        class="p-3 | bg-gray-900 text-white | flex-1"
      />
    </div>
    <!-- Note info & actions -->
    <section class="gap-3 | flex justify-between items-center">
      <div class="text-sm">
        Created on {{ noteDate }} contain {{ noteLength }} words
      </div>
      <div>
        <a
          @click="deleteNote"
          href="#"
          class="py-1 px-3 | text-red-700 rounded-md"
          >Delete note</a
        >
        <a
          @click="closeNote"
          href="#"
          class="py-1 px-3 | bg-gray-200 rounded-md"
          >Close note</a
        >
      </div>
    </section>
  </div>
  <div v-else class="h-full | flex justify-center items-center">
    Please select a note to start editing or&nbsp;
    <a @click="createNote" class="underline font-bold" href="#">create a note</a
    >&nbsp;✍
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ActiveNoteHtml from "./ActiveNoteHtml";
import ActiveNoteMd from "./ActiveNoteMd";

export default {
  name: "ActiveNote",
  components: {
    ActiveNoteMd,
    ActiveNoteHtml,
  },
  setup() {
    const store = useStore();
    const activeNote = computed(() =>
      store.state.activeNote
        ? store.getters.getNoteById(store.state.activeNote)
        : null
    );
    const updateNote = ($event) =>
      store.commit("updateNote", {
        id: activeNote.value.id,
        body: $event.target.value,
      });
    const closeNote = () => store.commit("setActiveNote");
    const createNote = () => store.dispatch("createNote");
    const deleteNote = () => store.commit("setDeleting", true);
    const blurNote = (value) => !value.length && deleteNote();
    return {
      activeNote,
      updateNote,
      closeNote,
      createNote,
      deleteNote,
      blurNote,
      noteDate: computed(() => new Date(activeNote.value.id).toLocaleString()),
      noteLength: computed(() => activeNote.value.body.split(/\W+/).length),
    };
  },
};
</script>
