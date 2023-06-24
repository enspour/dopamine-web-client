import { FC, memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";
import PaginationDots from "./PaginationDots";
import PaginationNumber from "./PaginationNumber";

import type { ThemePalette } from "@services/Theme.service";

import NextIcon from "@assets/icons/pagination/next.svg";
import PrevIcon from "@assets/icons/pagination/prev.svg";

import styles from "./Pagination.module.scss";

interface PaginationProps {
    total: number;
    page: number;
    setPage: (page: number) => void;
    palette?: ThemePalette;
}

const Pagination: FC<PaginationProps> = ({
    total,
    page,
    setPage,
    palette = "primary",
}) => {
    const prev = () => {
        if (page - 1 > 0) {
            setPage(page - 1);
        }
    };

    const next = () => {
        if (page + 1 <= total) {
            setPage(page + 1);
        }
    };

    const open = (page: number) => {
        if (0 < page && page <= total) {
            setPage(page);
        }
    };

    if (total < 2) {
        return null;
    }

    if (total < 8) {
        return (
            <div className={styles.pagination}>
                <div className={styles.pagination__control}>
                    <Icon svg={PrevIcon} onClick={prev} palette={palette} />
                </div>

                {new Array(total).fill(0).map((_, index) => (
                    <PaginationNumber
                        page={index + 1}
                        open={open}
                        isActive={page === index + 1}
                        palette={palette}
                    />
                ))}

                <div className={styles.pagination__control}>
                    <Icon svg={NextIcon} onClick={next} palette={palette} />
                </div>
            </div>
        );
    }

    return (
        <div className={styles.pagination}>
            <div className={styles.pagination__control}>
                <Icon svg={PrevIcon} onClick={prev} palette={palette} />
            </div>

            <PaginationNumber
                page={1}
                open={open}
                isActive={page === 1}
                palette={palette}
            />

            {page > 3 && page < total - 3 ? (
                <>
                    <PaginationDots palette={palette} />

                    <PaginationNumber
                        page={page - 1}
                        open={open}
                        palette={palette}
                    />

                    <PaginationNumber
                        page={page}
                        open={open}
                        isActive
                        palette={palette}
                    />

                    <PaginationNumber
                        page={page + 1}
                        open={open}
                        palette={palette}
                    />

                    <PaginationDots palette={palette} />
                </>
            ) : page <= 3 ? (
                <>
                    <PaginationNumber
                        page={2}
                        open={open}
                        isActive={page === 2}
                        palette={palette}
                    />

                    <PaginationNumber
                        page={3}
                        open={open}
                        isActive={page === 3}
                        palette={palette}
                    />

                    <PaginationNumber
                        page={4}
                        open={open}
                        isActive={page === 4}
                        palette={palette}
                    />

                    <PaginationNumber
                        page={5}
                        open={open}
                        isActive={page === 5}
                        palette={palette}
                    />

                    <PaginationDots palette={palette} />
                </>
            ) : (
                <>
                    <PaginationDots palette={palette} />

                    <PaginationNumber
                        page={total - 4}
                        open={open}
                        isActive={page === total - 4}
                        palette={palette}
                    />

                    <PaginationNumber
                        page={total - 3}
                        open={open}
                        isActive={page === total - 3}
                        palette={palette}
                    />

                    <PaginationNumber
                        page={total - 2}
                        open={open}
                        isActive={page === total - 2}
                        palette={palette}
                    />

                    <PaginationNumber
                        page={total - 1}
                        open={open}
                        isActive={page === total - 1}
                        palette={palette}
                    />
                </>
            )}

            <PaginationNumber
                page={total}
                open={open}
                isActive={page === total}
                palette={palette}
            />

            <div className={styles.pagination__control}>
                <Icon svg={NextIcon} onClick={next} palette={palette} />
            </div>
        </div>
    );
};

export default memo(Pagination);
