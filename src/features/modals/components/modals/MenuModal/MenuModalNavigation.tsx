"use client";

import { usePathname } from "next/navigation";

import HorizontalMenu from "@components/ui/navigation/HorizontalMenu/HorizontalMenu";
import HorizontalMenuButton from "@components/ui/navigation/HorizontalMenu/HorizontalMenuButton";

import { InterMessage } from "@features/inter/client";

import { useMenuModal } from "@features/modals/client";

import { useCustomRouter } from "@hooks/client";

import { navigation } from "@interfaces";

const MenuModalNavigation = () => {
    const pathname = usePathname();

    const router = useCustomRouter();

    const { close } = useMenuModal();

    const handleClick = async (id: string) => {
        await router.push(id);
        close();
    };

    return (
        <HorizontalMenu currentId={pathname} style={getMenuStyles()}>
            {navigation.map((nav) => (
                <HorizontalMenuButton
                    key={nav.id}
                    id={nav.href}
                    onClick={handleClick}
                >
                    <InterMessage id={`nav.${nav.id}.name`} />
                </HorizontalMenuButton>
            ))}
        </HorizontalMenu>
    );
};

const getMenuStyles = () => {
    return {
        justifyContent: "center",
    } as const;
};

export default MenuModalNavigation;