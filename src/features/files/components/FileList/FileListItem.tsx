import { FC, memo } from "react";

import { FileMetadata } from "@features/files";

import styles from "./FileList.module.scss";

interface FileListItemProps {
    file: FileMetadata;
}

const FileListItem: FC<FileListItemProps> = ({ file }) => {
    return (
        <img
            className={styles.list__file}
            src={`api/v1/files/download/${file.id}`}
        />
    );
};

export default memo(FileListItem);
