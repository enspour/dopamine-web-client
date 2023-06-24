import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ModalsState {
    isOpenSearchModal: boolean;
    isOpenSettingsModal: boolean;
}

const initialState: ModalsState = {
    isOpenSearchModal: false,
    isOpenSettingsModal: false,
};

export const modalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        openSearchModal: (state) => {
            state.isOpenSearchModal = true;
        },

        closeSearchModal: (state) => {
            state.isOpenSearchModal = false;
        },

        openSettingsModal: (state) => {
            state.isOpenSettingsModal = true;
        },

        closeSettingsModal: (state) => {
            state.isOpenSettingsModal = false;
        },
    },
});

export const {
    openSearchModal,
    closeSearchModal,
    openSettingsModal,
    closeSettingsModal,
} = modalsSlice.actions;

export const selectIsOpenSearchModal = (state: RootState) =>
    state.modalsSlice.isOpenSearchModal;

export const selectIsOpenSettingsModal = (state: RootState) =>
    state.modalsSlice.isOpenSettingsModal;

export default modalsSlice.reducer;
