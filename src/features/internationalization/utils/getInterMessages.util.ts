import { InterMessages, Locate } from "../interfaces";

export const getInterMessages = async (
    locate: Locate
): Promise<InterMessages> => {
    const result = await import(
        `@features/internationalization/assets/interMessages/${locate}.json`
    );

    return result.default;
};
