import { configureStore } from "@reduxjs/toolkit";

import internationalizationSlice from "./slices/internationalization.slice";
import modalsSlice from "./slices/modals.slice";
import userSlice from "./slices/user.slice";

const store = configureStore({
    reducer: {
        internationalizationSlice,
        modalsSlice,
        userSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
