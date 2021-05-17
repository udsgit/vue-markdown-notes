<template>
  <div class="dev | container | p-3 my-3 mx-auto | flex">
    <!-- Left Side -->
    <section class="dev | w-1/4 p-3 mr-3">
      <!-- Search Notes -->
      <p>Search Notes</p>
      <NoteList />
    </section>

    <!--Right side -->
    <section class="dev | p-3 | flex-grow">
      <ActiveNote />
    </section>
  </div>
</template>

<script>
import NoteList from "./components/NoteList";
import ActiveNote from "./components/ActiveNote";

export default {
  name: "App",
  components: {
    NoteList,
    ActiveNote,
  },
};
</script>

<style>
.dev {
  border: 1px solid red;
}
</style>
