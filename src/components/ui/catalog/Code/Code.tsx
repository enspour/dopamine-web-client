"use client";

import { CSSProperties, ChangeEvent, FC, memo, useEffect, useRef } from "react";

import { ThemePalette } from "@services/Theme.service";

import { getThemePropertyValue } from "@utils";

import styles from "./Code.module.scss";

interface CodeProps {
    code: string;
    setCode: (code: string) => void;
    palette?: ThemePalette;
}

const Code: FC<CodeProps> = ({ code, setCode, palette = "code" }) => {
    const codeRef = useRef<HTMLDivElement>(null);

    const length = code.length;

    const handlerChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const entered = e.target.value.slice(1);

        if (!Number(entered)) {
            return;
        }

        const start = code.slice(0, index);
        const end = code.slice(index + 1);

        const result = (start + entered + end).slice(0, length);

        setCode(result);

        const target = codeRef.current;

        if (target) {
            const position =
                index + entered.length < length
                    ? index + entered.length
                    : length - 1;

            const element = target.childNodes[position].childNodes[0];

            if (element instanceof HTMLInputElement) {
                element.focus();
                element.setSelectionRange(1, 1);
            }
        }
    };

    useEffect(() => {
        const target = codeRef.current;

        if (target) {
            target.style.setProperty(
                "--bg-focus",
                getThemePropertyValue("bg-focus", palette)
            );

            target.style.setProperty(
                "--border-focus",
                getThemePropertyValue("border-focus", palette)
            );
        }
    }, []); //eslint-disable-line

    return (
        <div ref={codeRef} className={styles.code} style={getStyle(palette)}>
            {code.split("").map((digit, index) => (
                <div
                    key={index}
                    className={styles.code__digit}
                    style={getDigitStyle(palette)}
                >
                    <input
                        value={digit}
                        onChange={(e) => handlerChange(e, index)}
                        onClick={(e) => e.currentTarget.setSelectionRange(1, 1)}
                    />
                </div>
            ))}
        </div>
    );
};

const getStyle = (palette: ThemePalette): CSSProperties => ({
    backgroundColor: getThemePropertyValue("bg", palette),
    color: getThemePropertyValue("color", palette),
});

const getDigitStyle = (palette: ThemePalette): CSSProperties => ({
    border: `0.1rem solid ${getThemePropertyValue("border", palette)}`,
});

export default memo(Code);
