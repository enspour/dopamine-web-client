export const without = <T extends Object, K extends keyof T>(
    object: T,
    ...keys: K[]
): Omit<T, K> => {
    return (Object.keys(object) as Array<keyof T>).reduce((acc, key) => {
        if (!keys.includes(key as K)) {
            acc[key] = object[key];
        }

        return acc;
    }, {} as T);
};
