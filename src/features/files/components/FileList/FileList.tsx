import { FC, memo } from "react";

import { FileMetadata } from "@features/files";

import FileListItem from "./FileListItem";

import styles from "./FileList.module.scss";

interface FileListProps {
    files: FileMetadata[];
}

const FileList: FC<FileListProps> = ({ files }) => {
    return (
        <div className={styles.list}>
            {files.map((file) => (
                <FileListItem key={file.id} file={file} />
            ))}
        </div>
    );
};

export default memo(FileList);
