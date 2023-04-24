import { useState, useRef, memo, FC } from "react";

import Box from "@components/ui/catalog/Box/Box";
import SimpleCarousel from "@components/ui/catalog/SimpleCarousel/SimpleCarousel";

import type { ThemePalette } from "@services/Theme.service";

import styles from "./BoxStep.module.scss";

export type SharedData = { [key: string]: any };

export interface BoxStepSlideProps {
    data: SharedData;
    next: () => void;
    prev: () => void;
    palette: ThemePalette;
}

export interface BoxStepHeaderProps {
    index: number;
    size: number;
    data: SharedData;
    next: () => void;
    prev: () => void;
    palette: ThemePalette;
}

export interface BoxStepFooterProps {
    index: number;
    size: number;
    data: SharedData;
    next: () => void;
    prev: () => void;
    palette: ThemePalette;
}

interface BoxStepProps {
    slides: FC<BoxStepSlideProps>[];
    footer?: FC<BoxStepFooterProps>;
    header?: FC<BoxStepHeaderProps>;

    height?: string;
    maxHeight?: string;
    minHeight?: string;

    width?: string;
    maxWidth?: string;
    minWidth?: string;

    palette?: ThemePalette;
}

const BoxStep: FC<BoxStepProps> = ({
    slides,
    footer: Footer,
    header: Header,

    height = "100%",
    maxHeight = "inherit",
    minHeight = "inherit",

    width = "100%",
    maxWidth = "inherit",
    minWidth = "inherit",

    palette = "primary",
}) => {
    const sharedData = useRef({});

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
            gap="0rem"
            palette={palette}
        >
            {Header && (
                <Header
                    index={index}
                    size={slides.length}
                    data={sharedData.current}
                    next={next}
                    prev={prev}
                    palette={palette}
                />
            )}

            <SimpleCarousel index={index}>
                {slides.map((Slide, idx) => (
                    <div key={idx} className={styles.slide}>
                        <Slide
                            data={sharedData.current}
                            next={next}
                            prev={prev}
                            palette={palette}
                        />
                    </div>
                ))}
            </SimpleCarousel>

            {Footer && (
                <Footer
                    index={index}
                    size={slides.length}
                    data={sharedData.current}
                    next={next}
                    prev={prev}
                    palette={palette}
                />
            )}
        </Box>
    );
};

export default memo(BoxStep);
