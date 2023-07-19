"use client";

import { CSSProperties, FC, useState } from "react";

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
    headers?: FC<StepperHeaderProps & ExtraProps>[];
    footers?: FC<StepperFooterProps & ExtraProps>[];
    extraProps: ExtraProps;
    style?: StepperStyle;
    palette?: ThemePalette;
}

interface StepperStyle {
    gap?: string;
}

const initialStyle: StepperStyle = {
    gap: "2rem",
};

const Stepper = <ExtraProps,>({
    steps,
    footers,
    headers,
    extraProps,
    style = initialStyle,
    palette = "primary",
}: StepperProps<ExtraProps>) => {
    const [index, setIndex] = useState(0);

    const Header = headers ? headers[index] : null;
    const Footer = footers ? footers[index] : null;

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
        <div className={styles.stepper} style={getStyle(style, palette)}>
            {Header && (
                <div className={styles.header}>
                    <Header
                        next={next}
                        prev={prev}
                        palette={palette}
                        {...extraProps}
                    />
                </div>
            )}

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

            {Footer && (
                <div className={styles.footer}>
                    <Footer
                        next={next}
                        prev={prev}
                        palette={palette}
                        {...extraProps}
                    />
                </div>
            )}
        </div>
    );
};

const getStyle = (
    style: StepperStyle,
    palette: ThemePalette
): CSSProperties => ({
    ...Object.assign({}, initialStyle, style),
});

export default typedMemo(Stepper);
