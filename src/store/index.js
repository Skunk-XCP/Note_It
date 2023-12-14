import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./note/note-slice";

export const store = configureStore({
  reducer: {
    // Intègre le reducer de notes dans le store Redux sous la clé 'NOTE'
    NOTE: noteReducer,
  },
});
