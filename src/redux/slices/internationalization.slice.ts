import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import {
    InterMessages,
    Internationalization,
    Locate,
} from "@features/internationalization";

import { INTER_MESSAGES } from "@features/internationalization";

export type InternationalizationState = Internationalization;

const initialState: InternationalizationState = {
    locate: "en-US",
    interMessages: INTER_MESSAGES,
};

export const internationalizationSlice = createSlice({
    name: "internationalization",
    initialState,
    reducers: {
        setLocate: (state, action: PayloadAction<Locate>) => {
            state.locate = action.payload;
        },

        setInterMessages: (state, action: PayloadAction<InterMessages>) => {
            state.interMessages = action.payload;
        },

        setInternationalization: (
            state,
            action: PayloadAction<InternationalizationState>
        ) => {
            state.locate = action.payload.locate;
            state.interMessages = action.payload.interMessages;
        },
    },
});

export const { setLocate, setInterMessages, setInternationalization } =
    internationalizationSlice.actions;

export const selectLocate = (
    state: RootState
): InternationalizationState["locate"] =>
    state.internationalizationSlice.locate;

export const selectInterMessages = (
    state: RootState
): InternationalizationState["interMessages"] =>
    state.internationalizationSlice.interMessages;

export default internationalizationSlice.reducer;
