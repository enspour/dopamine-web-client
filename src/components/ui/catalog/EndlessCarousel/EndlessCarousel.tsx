import { CSSProperties, FC, ReactNode, memo, useEffect, useRef } from "react";

import styles from "./EndlessCarousel.module.scss";

interface EndlessCarouselProps {
    children: ReactNode[];
    index: number;
    setIndex: (index: number) => void;
    delay?: number;
}

const EndlessCarousel: FC<EndlessCarouselProps> = ({
    children,
    index,
    setIndex,
    delay = 300,
}) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const previousIndexRef = useRef(0);

    const slides = [children[children.length - 1], ...children, children[0]];

    useEffect(() => {
        const carousel = carouselRef.current;

        if (!carousel) {
            return;
        }

        const previousIndex = previousIndexRef.current;

        if (Math.abs(index - previousIndex) > 1) {
            carousel.style.transition = "0ms";
        } else {
            carousel.style.transition = `${delay}ms`;
        }

        if (index === 0) {
            setTimeout(setIndex, delay, slides.length - 2);
        }

        if (index === slides.length - 1) {
            setTimeout(setIndex, delay, 1);
        }

        previousIndexRef.current = index;
    }, [index]);

    return (
        <div ref={carouselRef} className={styles.carousel}>
            {slides.map((slide, idx) => (
                <div
                    key={idx}
                    className={styles.carousel__slide}
                    style={getSlideStyle(index)}
                >
                    {slide}
                </div>
            ))}
        </div>
    );
};

const getSlideStyle = (index: number): CSSProperties => ({
    transform: `translateX(-${index * 100}%)`,
});

export default memo(EndlessCarousel);
