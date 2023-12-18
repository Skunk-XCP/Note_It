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
        updateNote: (currentSlice, action) => {
            const indexToUpdate = currentSlice.noteList.findIndex((note) => note.id === action.payload.id);
            currentSlice.noteList[indexToUpdate] = action.payload;
        },
        deleteNote: (currentSlice, action) => {
            currentSlice.noteList.push(action.payload);
            const filteredNoteList = currentSlice.noteList.filter((note) => note.id !== action.payload.id);
            currentSlice.noteList = filteredNoteList;
        },
    },
});

export const noteReducer = noteSlice.reducer;

export const { setNoteList, addNote, updateNote, deleteNote } = noteSlice.actions;