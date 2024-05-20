import { createSlice } from "@reduxjs/toolkit";


interface freeContactsState {
}

const initialState: freeContactsState = {
};

export const freeContactsSlice = createSlice({
	name: "freeContacts",
	initialState,
	reducers: {
	},
	extraReducers: () => {},
});

export const freeContactsReducer = freeContactsSlice.reducer;


