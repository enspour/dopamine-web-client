"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

import styles from "./Header.module.scss";

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

const HeaderNavigation = () => {
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
