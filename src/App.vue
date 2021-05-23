<template>
  <DeleteNote v-if="$store.state.deleting" />
  <div
    v-if="$store.state.user"
    class="
      container
      |
      min-h-1/2
      p-3
      my-3
      mx-auto
      |
      bg-white
      rounded-xl
      shadow-2xl
      |
      md:flex
    "
  >
    <!-- Left Side -->
    <section class="md:w-1/4 p-3 mr-3 | bg-gray-100">
      <!-- Search Notes -->
      <a
        @click="$store.dispatch('userLogout')"
        href="#"
        class="mb-3 | underline text-center font-bold | block"
        >User logout</a
      >
      <SearchNote />
      <NoteList />
    </section>

    <!--Right side -->
    <section class="p-3 | flex-grow">
      <ActiveNote />
    </section>
  </div>
  <div v-else>
    <a
      @click="$store.dispatch('userLogin')"
      href="#"
      class="w-full h-screen | flex justify-center items-center | underline"
      >Login please</a
    >
  </div>
</template>

<script>
import NoteList from "./components/NoteList";
import ActiveNote from "./components/ActiveNote";
import DeleteNote from "./components/DeleteNote";
import SearchNote from "./components/SearchNote";

export default {
  name: "App",
  components: {
    NoteList,
    ActiveNote,
    DeleteNote,
    SearchNote,
  },
};
</script>

<style>
.dev {
  border: 1px solid red;
}
</style>
