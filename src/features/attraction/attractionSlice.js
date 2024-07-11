import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
};

export const attractionSlice = createSlice({
    name: "attraction",
    initialState,
    reducers: {
        setAttractionId: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setAttractionId } = attractionSlice.actions;

export default attractionSlice.reducer;
