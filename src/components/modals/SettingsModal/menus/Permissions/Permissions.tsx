import { FC, memo } from "react";

import type { CarouselMenuItemProps } from "@components/ui/navigation/CarouselMenu/CarouselMenu";
import type { Menu } from "../../SettingsModal";

const Permissions: FC<CarouselMenuItemProps<Menu>> = ({ forward, back }) => {
    return <div></div>;
};

export default memo(Permissions);
