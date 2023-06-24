import { FC, memo } from "react";

import type { CarouselMenuItemProps } from "@components/ui/navigation/CarouselMenu/CarouselMenu";

import type { Menus } from "../../SettingsModal";

const Languages: FC<CarouselMenuItemProps<Menus>> = ({ forward, back }) => (
    <div></div>
);

export default memo(Languages);
