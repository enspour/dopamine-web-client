"use client";

import { usePathname } from "next/navigation";

import VerticalList from "@components/ui/catalog/VerticalList/VerticalList";
import VerticalListElement from "@components/ui/catalog/VerticalList/VerticalListElement";

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
        <VerticalList currentId={pathname} style={getMenuStyles()}>
            {navigation.map((nav) => (
                <VerticalListElement
                    key={nav.id}
                    id={nav.path}
                    onClick={handleClick}
                >
                    <InterMessage id={`nav.${nav.id}.name`} />
                </VerticalListElement>
            ))}
        </VerticalList>
    );
};

const getMenuStyles = () => {
    return {
        justifyContent: "center",
    } as const;
};

export default MenuModalNavigation;
