import { CSSProperties, FC, useEffect, useRef, useState } from "react";

import EndlessCarousel from "../../catalog/EndlessCarousel/EndlessCarousel";

import { ThemePalette } from "@services/Theme.service";

import { typedMemo } from "@utils";

import styles from "./CarouselMenu.module.scss";

export interface CarouselMenuItemProps<T> {
    current: T;
    forward: (menu: T) => void;
    back: () => void;
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
    menus: Record<T, CarouselMenuItem<T>>;
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
    menus,
    style = initialStyle,
    delay = 300,
    palette = "primary",
}: CarouselMenuProps<T>) {
    const history = useRef<T[]>([]);

    const names = Object.keys(menus) as T[];

    const [current, setCurrent] = useState<T>(names[0]);

    const [index, setIndex] = useState(1);

    const [slides, setSlides] = useState<Slides<T>>([Empty, Empty, Empty]);

    const Header = menus[current]?.header;
    const Footer = menus[current]?.footer;

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
            items[realIndex] = menus[current].component;
        }

        if (realIndex < 0) {
            items[slides.length - 1] = menus[current].component;
        }

        if (realIndex > slides.length - 1) {
            items[0] = menus[current].component;
        }

        setSlides(items);
    }, [index]);

    return (
        <div className={styles.menu} style={getStyle(style, palette)}>
            {Header && (
                <div>
                    <Header current={current} forward={forward} back={back} />
                </div>
            )}

            <EndlessCarousel index={index} setIndex={setIndex} delay={delay}>
                {slides.map((Item, idx) => (
                    <Item
                        key={idx}
                        current={current}
                        forward={forward}
                        back={back}
                    />
                ))}
            </EndlessCarousel>

            {Footer && (
                <div>
                    <Footer current={current} forward={forward} back={back} />
                </div>
            )}
        </div>
    );
}

const getStyle = (
    style: CarouselMenuStyle,
    palette: ThemePalette
): CSSProperties => ({
    ...Object.assign({}, initialStyle, style),
});

export default typedMemo(CarouselMenu);