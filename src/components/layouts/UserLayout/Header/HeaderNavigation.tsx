"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, memo } from "react";

import styles from "./Header.module.scss";

export interface Navigation {
    id: string;
    href: string;
    text: string;
}

interface HeaderNavigation {
    navigation: Navigation[];
}

const navigation = [
    {
        id: "browse",
        href: "/browse",
        text: "Browse",
    },
    {
        id: "store",
        href: "/store",
        text: "Store",
    },
    {
        id: "feed",
        href: "/feed",
        text: "Feed",
    },
];

const HeaderNavigation: FC<HeaderNavigation> = ({ navigation }) => {
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname.startsWith(href);
    };

    return (
        <div className={styles.header__navigation}>
            {navigation.map((nav) => (
                <Link
                    key={nav.id}
                    href={nav.href}
                    className={
                        isActive(nav.href)
                            ? styles.header__navigation__item__active
                            : styles.header__navigation__item
                    }
                >
                    {nav.text}
                </Link>
            ))}
        </div>
    );
};

export default memo(HeaderNavigation);
