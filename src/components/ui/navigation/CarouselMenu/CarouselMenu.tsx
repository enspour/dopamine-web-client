"use client";

import { CSSProperties, FC, useEffect, useRef, useState } from "react";

import EndlessCarousel from "../../catalog/EndlessCarousel/EndlessCarousel";

import { type ThemePalette } from "@features/theme";

import { typedMemo } from "@utils";

import styles from "./CarouselMenu.module.scss";

export interface CarouselMenuItemProps<T> {
    current: T;
    forward: (menu: T) => void;
    back: () => void;
    palette: ThemePalette;
}

interface CarouselMenuItem<T> {
    component: FC<CarouselMenuItemProps<T>>;
    header?: FC<CarouselMenuItemProps<T>>;
    footer?: FC<CarouselMenuItemProps<T>>;
}

interface CarouselMenuStyle {
    gap?: string;
}

const initialStyle: CarouselMenuStyle = {
    gap: "2rem",
};

interface CarouselMenuProps<T extends string> {
    menu: Record<T, CarouselMenuItem<T>>;
    style?: CarouselMenuStyle;
    delay?: number;
    palette?: ThemePalette;
}

type Slides<T> = [
    FC<CarouselMenuItemProps<T>>,
    FC<CarouselMenuItemProps<T>>,
    FC<CarouselMenuItemProps<T>>
];

function Empty<T extends string>(_: CarouselMenuItemProps<T>) {
    return <div></div>;
}

function CarouselMenu<T extends string>({
    menu,
    style = initialStyle,
    delay = 300,
    palette = "primary",
}: CarouselMenuProps<T>) {
    const history = useRef<T[]>([]);

    const names = Object.keys(menu) as T[];

    const [current, setCurrent] = useState<T>(names[0]);

    const [index, setIndex] = useState(1);

    const [slides, setSlides] = useState<Slides<T>>([Empty, Empty, Empty]);

    const Header = menu[current]?.header;
    const Footer = menu[current]?.footer;

    const forward = (menu: T) => {
        history.current.push(current);
        setCurrent(menu);
        setIndex((prev) => prev + 1);
    };

    const back = () => {
        const previous = history.current.pop();
        if (previous) {
            setCurrent(previous);
            setIndex((prev) => prev - 1);
        }
    };

    useEffect(() => {
        const items: Slides<T> = [...slides];

        const realIndex = index - 1;

        if (0 <= realIndex && realIndex <= slides.length - 1) {
            items[realIndex] = menu[current].component;
        }

        if (realIndex < 0) {
            items[slides.length - 1] = menu[current].component;
        }

        if (realIndex > slides.length - 1) {
            items[0] = menu[current].component;
        }

        setSlides(items);
    }, [index]);

    return (
        <div className={styles.menu} style={getStyle(style)}>
            {Header && (
                <div>
                    <Header
                        current={current}
                        forward={forward}
                        back={back}
                        palette={palette}
                    />
                </div>
            )}

            <EndlessCarousel index={index} setIndex={setIndex} delay={delay}>
                {slides.map((Item, idx) => (
                    <Item
                        key={idx}
                        current={current}
                        forward={forward}
                        back={back}
                        palette={palette}
                    />
                ))}
            </EndlessCarousel>

            {Footer && (
                <div>
                    <Footer
                        current={current}
                        forward={forward}
                        back={back}
                        palette={palette}
                    />
                </div>
            )}
        </div>
    );
}

const getStyle = (style: CarouselMenuStyle): CSSProperties => ({
    ...Object.assign({}, initialStyle, style),
});

export default typedMemo(CarouselMenu);
