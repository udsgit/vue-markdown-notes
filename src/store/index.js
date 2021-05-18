import { createStore, createLogger } from "vuex";

export default createStore({
  state: {
    notes: [],
    activeNote: null,
  },
  getters: {
    getNoteById: (state) => (noteId) =>
      state.notes.find((note) => note.id === noteId),
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
    },
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
});
