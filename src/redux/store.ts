import { configureStore } from "@reduxjs/toolkit";

import { interReducer as inter } from "@features/inter/client";

import {
    createPostModalDataReducer as createPostModalData,
    modalsReducer as modals,
} from "@features/modals/client";

import { userReducer as user } from "@features/users/client";

const store = configureStore({
    reducer: {
        user,
        inter,
        modals,
        createPostModalData,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
