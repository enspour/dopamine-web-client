import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@redux/store";

import { Followings } from "@features/users";

export interface FollowingsState {
    followings: Followings;
}

const initialState: FollowingsState = {
    followings: [],
};

export const followingsSlice = createSlice({
    name: "followings",
    initialState,
    reducers: {
        setFollowings: (state, action: PayloadAction<Followings>) => {
            state.followings = action.payload;
        },
    },
});

export const { setFollowings } = followingsSlice.actions;

export const selectFollowings = (
    state: RootState
): FollowingsState["followings"] => state.followings.followings;

export const followingsReducer = followingsSlice.reducer;
