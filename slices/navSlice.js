import { createSlice } from "@reduxjs/toolkit";
import { action } from "commander";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.origin = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            setTravelTimeInformation = action.payload;
        }
    }
})

export const { setOrigin, setDestination, setTravelTimeInformation } =
    navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;