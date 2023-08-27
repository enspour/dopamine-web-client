import { CSSProperties, DragEvent, FC, memo, useRef } from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./DroppingFiles.module.scss";

interface DroppingFilesProps {
    handler: (files: File[]) => void;
    palette?: ThemePalette;
}

const DroppingFiles: FC<DroppingFilesProps> = ({
    handler,
    palette = "primary",
}) => {
    const droppingRef = useRef<HTMLDivElement>(null);

    const handleOver = (e: DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: DragEvent) => {
        e.preventDefault();

        const files = Array.from(e.dataTransfer?.files || []);
        handler(files);
    };

    return (
        <div
            ref={droppingRef}
            className={styles.dropping}
            onDragOver={handleOver}
            onDrop={handleDrop}
            style={getStyle(palette)}
        >
            Drag and drop your files here
        </div>
    );
};

const getStyle = (palette: ThemePalette): CSSProperties => ({
    backgroundColor: getThemePropertyValue("bg", palette),
    border: `0.1rem solid ${getThemePropertyValue("border", palette)}`,
});

export default memo(DroppingFiles);
