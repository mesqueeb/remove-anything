/** Recursively remove props from an object, if the prop's value matches `valueToRemove` */
export declare function removeProp(payload: {
    [key in string | number | symbol]: unknown;
}, valueToRemove: unknown, ...valuesToRemove: unknown[]): {
    [key in string | number | symbol]: unknown;
};
/** @deprecated Use `removeProp` instead and pass multiple parameters */
export declare function removeProps(payload: {
    [key in string | number | symbol]: unknown;
}, valuesToRemove: unknown[]): {
    [key in string | number | symbol]: unknown;
};
