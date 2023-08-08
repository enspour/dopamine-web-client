"use client";

import { FC, FormEvent, memo, useEffect, useRef } from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./MultiLineInput.module.scss";

interface MultiLineInputProps {
    placeholder?: string;
    onChange: (value: string) => void;
    palette?: ThemePalette;
}

const MultiLineInput: FC<MultiLineInputProps> = ({
    onChange,
    placeholder,
    palette = "primary",
}) => {
    const inputRef = useRef<HTMLDivElement>(null);

    const handleInput = (e: FormEvent<HTMLDivElement>) => {
        onChange(e.currentTarget.textContent || "");
    };

    useEffect(() => {
        const input = inputRef.current;

        if (input) {
            input.style.setProperty(
                "--placeholder",
                getThemePropertyValue("placeholder", palette)
            );

            input.style.setProperty(
                "--thumb",
                getThemePropertyValue("scroll-thumb", palette)
            );
            input.style.setProperty(
                "--thumb-hover",
                getThemePropertyValue("scroll-thumb-hover", palette)
            );
        }
    }, []);

    return (
        <div className={styles.container}>
            <div
                ref={inputRef}
                className={styles.input}
                placeholder={placeholder}
                onInput={handleInput}
                contentEditable
            ></div>
        </div>
    );
};

export default memo(MultiLineInput);
