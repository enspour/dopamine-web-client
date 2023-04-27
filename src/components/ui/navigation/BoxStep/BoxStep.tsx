import { useState, FC } from "react";

import Box from "@components/ui/catalog/Box/Box";
import SimpleCarousel from "@components/ui/catalog/SimpleCarousel/SimpleCarousel";

import type { ThemePalette } from "@services/Theme.service";

import { typedMemo } from "@utils";

import styles from "./BoxStep.module.scss";

export interface BoxStepSlideProps {
    next: () => void;
    prev: () => void;
    palette: ThemePalette;
}

export interface BoxStepHeaderProps {
    index: number;
    size: number;
    next: () => void;
    prev: () => void;
    palette: ThemePalette;
}

export interface BoxStepFooterProps {
    index: number;
    size: number;
    next: () => void;
    prev: () => void;
    palette: ThemePalette;
}

interface BoxStepProps<T> {
    slides: FC<BoxStepSlideProps & T>[];
    header?: FC<BoxStepHeaderProps & T>;
    footer?: FC<BoxStepFooterProps & T>;

    extraProps: T;

    height?: string;
    maxHeight?: string;
    minHeight?: string;

    width?: string;
    maxWidth?: string;
    minWidth?: string;

    palette?: ThemePalette;
}

const BoxStep = <T,>({
    slides,
    footer: Footer,
    header: Header,

    extraProps,

    height = "100%",
    maxHeight = "inherit",
    minHeight = "inherit",

    width = "100%",
    maxWidth = "inherit",
    minWidth = "inherit",

    palette = "primary",
}: BoxStepProps<T>) => {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index + 1 < slides.length) {
            setIndex(index + 1);
        }
    };

    const prev = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1);
        }
    };

    return (
        <Box
            height={height}
            maxHeight={maxHeight}
            minHeight={minHeight}
            width={width}
            maxWidth={maxWidth}
            minWidth={minWidth}
            padding="0rem"
            gap="4rem"
            palette={palette}
        >
            <div className={styles.header}>
                {Header && (
                    <Header
                        index={index}
                        size={slides.length}
                        next={next}
                        prev={prev}
                        palette={palette}
                        {...extraProps}
                    />
                )}
            </div>

            <SimpleCarousel index={index}>
                {slides.map((Slide, idx) => (
                    <div key={idx} className={styles.slide}>
                        <Slide
                            next={next}
                            prev={prev}
                            palette={palette}
                            {...extraProps}
                        />
                    </div>
                ))}
            </SimpleCarousel>

            <div className={styles.footer}>
                {Footer && (
                    <Footer
                        index={index}
                        size={slides.length}
                        next={next}
                        prev={prev}
                        palette={palette}
                        {...extraProps}
                    />
                )}
            </div>
        </Box>
    );
};

export default typedMemo(BoxStep);
