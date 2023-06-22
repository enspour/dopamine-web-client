import { CSSProperties, FC, ReactNode, memo } from "react";

import styles from "./SimpleCarousel.module.scss";

interface SimpleCarouselProps {
    index: number;
    children: ReactNode[];
}

const SimpleCarousel: FC<SimpleCarouselProps> = ({ index, children }) => {
    return (
        <div className={styles.carousel}>
            {children.map((child, idx) => (
                <div
                    key={idx}
                    className={styles.carousel__slide}
                    style={getSlideStyle(index)}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

const getSlideStyle = (index: number): CSSProperties => ({
    transform: `translateX(-${index * 100}%)`,
});

export default memo(SimpleCarousel);
