"use client";

import { FC, memo } from "react";

import Select from "@components/ui/catalog/Select/Select";
import SelectItem from "@components/ui/catalog/Select/SelectItem";

import type { CarouselMenuItemProps } from "@components/ui/navigation/CarouselMenu/CarouselMenu";
import type { Menu } from "../../SettingsModal";

import { isLocate } from "@features/internationalization";
import { useLocate } from "@features/internationalization/client";

import styles from "./Languages.module.scss";

const Languages: FC<CarouselMenuItemProps<Menu>> = ({ forward, back }) => {
    const [locate, setLocate] = useLocate();

    const handle = (id: string) => {
        if (isLocate(id)) {
            setLocate(id);
        }
    };

    return (
        <div className={styles.section}>
            <Select currentId={locate}>
                <SelectItem id="en-US" onClick={handle}>
                    English
                </SelectItem>

                <SelectItem id="ru-RU" onClick={handle}>
                    Russian
                </SelectItem>
            </Select>
        </div>
    );
};

export default memo(Languages);
