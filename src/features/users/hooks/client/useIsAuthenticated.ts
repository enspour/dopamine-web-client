import { useEffect, useState } from "react";

import { useUser } from "./useUser";

export const useIsAuthenticated = () => {
    const { user } = useUser();

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (user.id) {
            setIsAuthenticated(true);
        }
    }, [user]);

    return isAuthenticated;
};
