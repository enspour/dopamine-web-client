import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@redux/store";

export interface FollowingsState {
    ids: number[];
}

const initialState: FollowingsState = {
    ids: [],
};

export const followingsSlice = createSlice({
    name: "followings",
    initialState,
    reducers: {
        setFollowingIds: (state, action: PayloadAction<number[]>) => {
            state.ids = action.payload;
        },
    },
});

export const { setFollowingIds } = followingsSlice.actions;

export const selectFollowingIds = (state: RootState): FollowingsState["ids"] =>
    state.followings.ids;

export const followingsReducer = followingsSlice.reducer;
