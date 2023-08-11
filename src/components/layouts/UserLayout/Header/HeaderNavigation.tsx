"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, memo } from "react";

import { InterMessage } from "@features/inter/client";

import { navigation } from "@interfaces";

import styles from "./Header.module.scss";

const HeaderNavigation: FC = () => {
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname.startsWith(href);
    };

    return (
        <div className={styles.header__navigation}>
            {navigation.map((nav) => (
                <Link
                    key={nav.id}
                    href={nav.path}
                    className={
                        isActive(nav.path)
                            ? styles.header__navigation__item__active
                            : styles.header__navigation__item
                    }
                >
                    <InterMessage id={`nav.${nav.id}.name`} />
                </Link>
            ))}
        </div>
    );
};

export default memo(HeaderNavigation);
