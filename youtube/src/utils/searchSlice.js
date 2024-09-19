import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchQuery: "",
        searchSuggestions: {},
    },
    reducers: {
        setSearchSuggestions: (state, action) => {
            state = Object.assign(state, action.payload);
        },
    },
});


export const { setSearchSuggestions } = searchSlice.actions;
export default searchSlice.reducer;
