/** Recursively remove props from an object, if the prop's value matches `valueToRemove` */
export declare function removeProp(payload: {
    [key in string | number | symbol]: unknown;
}, valueToRemove: unknown, ...valuesToRemove: unknown[]): {
    [key in string | number | symbol]: unknown;
};
/**
 * Recursively remove props from an object, if the prop's value matches `valueToRemove`
 *
 * This function mutates the passed object in place and returns void.
 */
export declare function removePropInPlace(payload: {
    [key in string | number | symbol]: unknown;
}, valueToRemove: unknown, ...valuesToRemove: unknown[]): void;
/** @deprecated Use `removeProp` instead and pass multiple parameters */
export declare function removeProps(payload: {
    [key in string | number | symbol]: unknown;
}, valuesToRemove: unknown[]): {
    [key in string | number | symbol]: unknown;
};
