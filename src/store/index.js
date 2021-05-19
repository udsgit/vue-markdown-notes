import { createStore, createLogger } from "vuex";

export default createStore({
  state: {
    notes: [],
    activeNote: null,
    deleting: false,
  },
  getters: {
    getNoteById: (state) => (noteId) =>
      state.notes.find((note) => note.id === noteId),
    getNoteTitle: (state) => (noteId) => {
      const removeMd = require("remove-markdown");
      const id = noteId ? noteId : state.activeNote;
      const body = state.notes.find((note) => note.id === id).body;
      return removeMd(body.substring(0, 20));
    },
  },
  mutations: {
    setNotes: (state, notes) => (state.notes = notes),
    setActiveNote: (state, noteId = null) => (state.activeNote = noteId),
    updateNote: (state, { id, body }) =>
      (state.notes.find((note) => note.id === id).body = body),
    createNote: (state, note) => state.notes.unshift(note),
    deleteNote: (state) => {
      const index = state.notes.findIndex(
        (note) => note.id === state.activeNote
      );
      state.notes.splice(index, 1);
      state.activeNote = null;
      state.deleting = false;
    },
    setDeleting: (state, deleting) => (state.deleting = deleting),
  },
  actions: {
    createNote({ commit }) {
      const note = { body: "", id: Date.now() };
      commit("createNote", note);
      commit("setActiveNote", note.id);
    },
  },
  modules: {},
  plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
  struct: true,
});
