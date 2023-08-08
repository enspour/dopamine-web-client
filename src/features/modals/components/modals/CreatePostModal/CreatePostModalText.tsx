import { FC, memo } from "react";

import MultiLineInput from "@components/ui/catalog/MultiLineInput/MultiLineInput";

import styles from "./CreatePostModal.module.scss";

interface CreatePostModalTextProps {
    setText: (text: string) => void;
}

const CreatePostModalText: FC<CreatePostModalTextProps> = ({ setText }) => {
    return (
        <div className={styles.modal__form__text}>
            <MultiLineInput
                onChange={setText}
                placeholder="Type something..."
            />
        </div>
    );
};

export default memo(CreatePostModalText);
