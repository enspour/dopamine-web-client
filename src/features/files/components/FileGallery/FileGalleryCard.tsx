import { FC } from "react";

import { FileMetadata } from "@features/files";

import styles from "./FileGallery.module.scss";

interface FileGalleryCardProps {
    file: FileMetadata;
}

const FileGalleryCard: FC<FileGalleryCardProps> = ({ file }) => {
    return (
        <img
            className={styles.gallery__card}
            src={`api/v1/files/download/${file.id}`}
        />
    );
};

export default FileGalleryCard;
