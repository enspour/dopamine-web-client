export type BinarySearchArrayType = number;

export const binarySearch = <T extends BinarySearchArrayType>(
    searchedItem: T,
    sortedItems: T[]
): number => {
    let start = 0;
    let end = sortedItems.length - 1;

    while (end >= start) {
        const middle = Math.trunc((end - start) / 2 + start);

        if (searchedItem === sortedItems[middle]) {
            return middle;
        }

        if (searchedItem > sortedItems[middle]) {
            start = middle + 1;
        }

        if (searchedItem < sortedItems[middle]) {
            end = middle - 1;
        }
    }

    return -1;
};
