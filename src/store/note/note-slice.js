import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "noteSlice",
    initialState: {
        noteList: [],
    },
    reducers: {
        // Reducer pour mettre à jour la liste des notes
        // 'currentSlice' représente l'état actuel du slice, 
        // 'action' contient les données à utiliser pour la mise à jour
        setNoteList: (currentSlice, action) => {
            currentSlice.noteList = action.payload;
        },
        addNote: (currentSlice, action) => {
            currentSlice.noteList.push(action.payload);
        },
    },
});

export const noteReducer = noteSlice.reducer;

export const { setNoteList, addNote } = noteSlice.actions;