"use client";

import { FC, memo, useState } from "react";

import AsyncButton from "@components/ui/catalog/AsyncButton/AsyncButton";

import CreatePostModalText from "./CreatePostModalText";
import CreatePostModalUser from "./CreatePostModalUser";

import { useRequest } from "@hooks/client";

import { PostsApi } from "@features/posts";

import { useCreatePostModal } from "@features/modals/client";

import { events } from "@utils";

import styles from "./CreatePostModal.module.scss";

const CreatePostModalForm: FC = () => {
    const { close } = useCreatePostModal();

    const [text, setText] = useState("");

    const request = useRequest(PostsApi.create);

    const submit = async (): Promise<void> => {
        const data = { text };

        const response = await request.run(data);

        if (response.statusCode === 201) {
            const { post } = response.data;

            events.dispatch("posts/user-create-one", post);

            close();
        }
    };

    return (
        <div className={styles.modal__form}>
            <div className={styles.modal__form__content}>
                <CreatePostModalUser />
                <CreatePostModalText setText={setText} />
            </div>

            <div className={styles.modal__form__submit}>
                <AsyncButton width="13rem" onClick={submit}>
                    Post
                </AsyncButton>
            </div>
        </div>
    );
};

export default memo(CreatePostModalForm);
