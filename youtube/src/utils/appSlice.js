import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        videoData: {},
        buttonOptionsClick:{
            buttonText:"",
            handleClick: () => {},
        }
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
        buttonOptionsClick: (state, action) => {
            state.buttonOptions = action.payload;
        },
    },
});

export default appSlice.reducer;
export const { toggleMenu, addVideoData, closeMenu,buttonOptionsClick } = appSlice.actions;
