import { FC, memo } from "react";

import FileGalleryCard from "./FileGalleryCard";

import { FileMetadata } from "@features/files";

import styles from "./FileGallery.module.scss";

interface FileGalleryProps {
    files: FileMetadata[];
}

const FileGallery: FC<FileGalleryProps> = ({ files }) => {
    return (
        <div className={styles.gallery}>
            {files.map((file) => (
                <FileGalleryCard key={file.id} file={file} />
            ))}
        </div>
    );
};

export default memo(FileGallery);
