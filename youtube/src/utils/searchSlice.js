import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchResults: [],
        searchQuery: "",
        searchSuggestions: {},
    },
    // complete this slice
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSearchSuggestions: (state, action) => {
            state = Object.assign(state, action.payload);
        },
    },
});


export const { setSearchResults, setSearchQuery, setSearchSuggestions } = searchSlice.actions;
export default searchSlice.reducer;
