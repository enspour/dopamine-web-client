import { FC, memo } from "react";

import UserAvatar from "@components/others/UserAvatar";
import MultiLineInput from "@components/ui/catalog/MultiLineInput/MultiLineInput";

import { useCreatePostModalData } from "@features/modals/client";

import styles from "./CreatePostModal.module.scss";

const CreatePostModalFormMain: FC = () => {
    const { setText } = useCreatePostModalData();

    return (
        <div className={styles.form__main}>
            <UserAvatar diameter="5rem" />

            <div className={styles.form__main__text}>
                <MultiLineInput
                    onChange={setText}
                    placeholder="Type something..."
                />
            </div>
        </div>
    );
};

export default memo(CreatePostModalFormMain);
