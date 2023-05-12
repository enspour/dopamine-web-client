import { FC, useState } from "react";

import Box from "@components/ui/catalog/Box/Box";
import SimpleCarousel from "@components/ui/catalog/SimpleCarousel/SimpleCarousel";

import type { ThemePalette } from "@services/Theme.service";

import { typedMemo } from "@utils";

import styles from "./Stepper.module.scss";

export interface StepperStepProps {
    next: () => void;
    prev: () => void;
    palette: ThemePalette;
}

export interface StepperHeaderProps {
    next: () => void;
    prev: () => void;
    palette: ThemePalette;
}

export interface StepperFooterProps {
    next: () => void;
    prev: () => void;
    palette: ThemePalette;
}

interface StepperProps<ExtraProps> {
    steps: FC<StepperStepProps & ExtraProps>[];
    headers: FC<StepperHeaderProps & ExtraProps>[];
    footers: FC<StepperFooterProps & ExtraProps>[];

    extraProps: ExtraProps;

    height?: string;
    maxHeight?: string;
    minHeight?: string;

    width?: string;
    maxWidth?: string;
    minWidth?: string;

    palette?: ThemePalette;
}

const Stepper = <ExtraProps,>({
    steps,
    footers,
    headers,

    extraProps,

    height = "100%",
    maxHeight = "inherit",
    minHeight = "inherit",

    width = "100%",
    maxWidth = "inherit",
    minWidth = "inherit",

    palette = "primary",
}: StepperProps<ExtraProps>) => {
    const [index, setIndex] = useState(0);

    const Header = headers[index];
    const Footer = footers[index];

    const next = () => {
        if (index + 1 < steps.length) {
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
                <Header
                    next={next}
                    prev={prev}
                    palette={palette}
                    {...extraProps}
                />
            </div>

            <SimpleCarousel index={index}>
                {steps.map((Step, idx) => (
                    <div key={idx} className={styles.step}>
                        <Step
                            next={next}
                            prev={prev}
                            palette={palette}
                            {...extraProps}
                        />
                    </div>
                ))}
            </SimpleCarousel>

            <div className={styles.footer}>
                <Footer
                    next={next}
                    prev={prev}
                    palette={palette}
                    {...extraProps}
                />
            </div>
        </Box>
    );
};

export default typedMemo(Stepper);
