import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@redux/store";

import { User, getDefaultUser } from "@features/users";

import { without } from "@utils";

export interface UserState {
    user: Omit<User, "createdAt" | "modifiedAt">;
    followingIds: number[];
}

const initialState: UserState = {
    user: without(getDefaultUser(), "createdAt", "modifiedAt"),
    followingIds: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },

        setFollowingIds: (state, action: PayloadAction<number[]>) => {
            state.followingIds = action.payload;
        },
    },
});

export const { setUser, setFollowingIds } = userSlice.actions;

export const selectUser = (state: RootState): UserState["user"] =>
    state.user.user;

export const selectFollowingIds = (
    state: RootState
): UserState["followingIds"] => state.user.followingIds;

export const userReducer = userSlice.reducer;
