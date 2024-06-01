/**
 * Recursively remove props from an object, if the prop's value matches `valueToRemove`
 */
export declare function removeProp(payload: {
    [key in string | number | symbol]: unknown;
}, valueToRemove: unknown, ...valuesToRemove: unknown[]): {
    [key in string | number | symbol]: unknown;
};
/**
 * @deprecated use `removeProp` instead and pass multiple parameters
 */
export declare const removeProps: (payload: {
    [x: string]: unknown;
    [x: number]: unknown;
    [x: symbol]: unknown;
}, valuesToRemove: unknown[]) => {
    [x: string]: unknown;
    [x: number]: unknown;
    [x: symbol]: unknown;
};
