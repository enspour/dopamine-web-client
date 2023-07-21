"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, memo } from "react";

import { Navigation } from "./Header";

import { InterMessage } from "@features/internationalization/client";

import styles from "./Header.module.scss";

interface HeaderNavigationProps {
    navigation: Navigation[];
}

const HeaderNavigation: FC<HeaderNavigationProps> = ({ navigation }) => {
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
                    <InterMessage id={`header.nav.${nav.id}.name`} />
                </Link>
            ))}
        </div>
    );
};

export default memo(HeaderNavigation);
