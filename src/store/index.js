import { createStore, createLogger } from "vuex";

export default createStore({
  state: {
    notes: [],
    activeNote: null,
  },
  getters: {
    getNoteById: (state) => (noteId) =>
      state.note.find((note) => note.id === noteId),
  },
  mutations: {
    setNotes: (state, notes) => (state.notes = notes),
    setActiveNote: (state, noteId = null) => (state.activeNote = noteId),
  },
  actions: {},
  modules: {},
  plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
});
