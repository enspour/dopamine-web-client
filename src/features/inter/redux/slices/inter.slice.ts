import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@redux/store";

import { INTER_MESSAGES, Inter, InterMessages, Locate } from "@features/inter";

export type InterState = Inter;

const initialState: InterState = {
    locate: "en-US",
    interMessages: INTER_MESSAGES,
};

export const interSlice = createSlice({
    name: "inter",
    initialState,
    reducers: {
        setLocate: (state, action: PayloadAction<Locate>) => {
            state.locate = action.payload;
        },

        setInterMessages: (state, action: PayloadAction<InterMessages>) => {
            state.interMessages = action.payload;
        },

        setInter: (state, action: PayloadAction<InterState>) => {
            state.locate = action.payload.locate;
            state.interMessages = action.payload.interMessages;
        },
    },
});

export const { setLocate, setInterMessages, setInter } = interSlice.actions;

export const selectLocate = (state: RootState): InterState["locate"] =>
    state.inter.locate;

export const selectInterMessages = (
    state: RootState
): InterState["interMessages"] => state.inter.interMessages;

export const interReducer = interSlice.reducer;
