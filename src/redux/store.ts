import { configureStore } from "@reduxjs/toolkit";

import { modalsReducer as modals } from "@features/modals/client";
import followingsSlice from "./slices/followings.slice";
import internationalizationSlice from "./slices/internationalization.slice";
import userSlice from "./slices/user.slice";

const store = configureStore({
    reducer: {
        followingsSlice,
        internationalizationSlice,
        modals,
        userSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
