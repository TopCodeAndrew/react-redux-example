import { createSlice } from "@reduxjs/toolkit";

export const letterSlice = createSlice({
    name: "letter",
    initialState: {
        value: "a",
    },
    reducers: {
        changeLetter: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeLetter } = letterSlice.actions;

export const selectLetter = (state) => state.letter.currentLetter;

export default letterSlice.reducer;
