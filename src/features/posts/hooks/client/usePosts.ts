import { useState } from "react";

import { useRequest } from "@hooks/client";

import { Post, PostsApi } from "@features/posts";

import { useFollowings, useUser } from "@features/users/client";

export const usePosts = () => {
    const { user } = useUser();

    const { followings } = useFollowings();

    const [posts, setPosts] = useState<Post[]>([]);

    const request = useRequest(PostsApi.getManyByUserIds);

    const update = async () => {
        const userIds = followings.map((following) => following.user.id);

        const response = await request.run([user.id, ...userIds]);
        if (response.statusCode === 200) {
            const { posts } = response.data;
            setPosts(posts);
        }
    };

    return { posts, update, request };
};
