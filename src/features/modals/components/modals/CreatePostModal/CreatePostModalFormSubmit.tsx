"use client";

import { FC, memo } from "react";

import AsyncButton from "@components/ui/catalog/AsyncButton/AsyncButton";

import { useRequest } from "@hooks/client";

import {
    useCreatePostModal,
    useCreatePostModalData,
} from "@features/modals/client";

import { PostsApi } from "@features/posts";

import { events } from "@utils";

const CreatePostModalFormSubmit: FC = () => {
    const { text, files, reset } = useCreatePostModalData();

    const { close } = useCreatePostModal();

    const request = useRequest(PostsApi.create);

    const submit = async (): Promise<void> => {
        const data = { text, files };

        const response = await request.run(data);

        if (response.statusCode === 201) {
            const { post } = response.data;

            events.dispatch("posts/user-create-one", post);

            reset();

            close();
        }
    };

    return (
        <AsyncButton width="13rem" onClick={submit}>
            Post
        </AsyncButton>
    );
};

export default memo(CreatePostModalFormSubmit);
