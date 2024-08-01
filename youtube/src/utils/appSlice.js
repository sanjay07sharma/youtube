import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        videoData: {},
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        addVideoData: (state, action) => {
            state.videoData = action.payload;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
    },
});

export default appSlice.reducer;
export const { toggleMenu, addVideoData, closeMenu } = appSlice.actions;
