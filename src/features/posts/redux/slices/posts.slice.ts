import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@redux/store";

import { Post } from "@features/posts";

export interface PostsState {
    posts: Post[];
    lastPage: number;
}

const initialState: PostsState = {
    posts: [],
    lastPage: -1,
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        insertPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = [...action.payload, ...state.posts];
        },

        appendPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = [...state.posts, ...action.payload];
            state.lastPage += 1;
        },

        clearPosts: (state) => {
            state.posts = [];
            state.lastPage = -1;
        },
    },
});

export const { insertPosts, appendPosts, clearPosts } = postsSlice.actions;

export const selectPosts = (state: RootState): PostsState["posts"] =>
    state.posts.posts;

export const selectPostsLastPage = (state: RootState): PostsState["lastPage"] =>
    state.posts.lastPage;

export const postsReducer = postsSlice.reducer;
