import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@redux/store";

import { FileMetadata } from "@features/files";

interface CreatePostModalDataState {
    text: string;
    files: FileMetadata[];
}

const initialState: CreatePostModalDataState = {
    text: "",
    files: [],
};

export const createPostModalDataSlice = createSlice({
    name: "create-post-modal-data",
    initialState,
    reducers: {
        setCreatePostModalDataText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },

        setCreatePostModalDataFiles: (
            state,
            action: PayloadAction<FileMetadata[]>
        ) => {
            state.files = action.payload;
        },

        resetCreatePostModalData: (state) => {
            state.text = "";
            state.files = [];
        },
    },
});

export const {
    setCreatePostModalDataText,
    setCreatePostModalDataFiles,
    resetCreatePostModalData,
} = createPostModalDataSlice.actions;

export const selectCreatePostModalDataText = (state: RootState) =>
    state.createPostModalData.text;

export const selectCreatePostModalDataFiles = (state: RootState) =>
    state.createPostModalData.files;

export const createPostModalDataReducer = createPostModalDataSlice.reducer;
