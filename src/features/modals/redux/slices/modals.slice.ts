import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@redux/store";

interface ModalsState {
    isOpenSearchModal: boolean;
    isOpenSettingsModal: boolean;
    isOpenMenuModal: boolean;
}

const initialState: ModalsState = {
    isOpenSearchModal: false,
    isOpenSettingsModal: false,
    isOpenMenuModal: false,
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

        openMenuModal: (state) => {
            state.isOpenMenuModal = true;
        },

        closeMenuModal: (state) => {
            state.isOpenMenuModal = false;
        },
    },
});

export const {
    openSearchModal,
    closeSearchModal,
    openSettingsModal,
    closeSettingsModal,
    openMenuModal,
    closeMenuModal,
} = modalsSlice.actions;

export const selectIsOpenSearchModal = (state: RootState) =>
    state.modals.isOpenSearchModal;

export const selectIsOpenSettingsModal = (state: RootState) =>
    state.modals.isOpenSettingsModal;

export const selectIsOpenMenuModal = (state: RootState) =>
    state.modals.isOpenMenuModal;

export const modalsReducer = modalsSlice.reducer;
