"use client";

import { usePathname } from "next/navigation";

import HorizontalList from "@components/ui/catalog/HorizontalList/HorizontalList";
import HorizontalListElement from "@components/ui/catalog/HorizontalList/HorizontalListElement";

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
        <HorizontalList currentId={pathname} style={getMenuStyles()}>
            {navigation.map((nav) => (
                <HorizontalListElement
                    key={nav.id}
                    id={nav.path}
                    onClick={handleClick}
                >
                    <InterMessage id={`nav.${nav.id}.name`} />
                </HorizontalListElement>
            ))}
        </HorizontalList>
    );
};

const getMenuStyles = () => {
    return {
        justifyContent: "center",
    } as const;
};

export default MenuModalNavigation;
