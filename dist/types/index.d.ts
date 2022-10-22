/**
 * Recursively remove props from an object, if the prop's value matches `valueToRemove`
 */
export declare function removeProp(payload: Record<string, any>, valueToRemove: any, ...valuesToRemove: any[]): Record<string, unknown>;
/**
 * @deprecated use `removeProp` instead and pass multiple parameters
 */
export declare const removeProps: (payload: Record<string, any>, valuesToRemove: any[]) => Record<string, unknown>;
