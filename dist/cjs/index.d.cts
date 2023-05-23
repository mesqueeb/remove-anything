/**
 * Recursively remove props from an object, if the prop's value matches `valueToRemove`
 */
declare function removeProp(payload: Record<string, any>, valueToRemove: any, ...valuesToRemove: any[]): Record<string, unknown>;
/**
 * @deprecated use `removeProp` instead and pass multiple parameters
 */
declare const removeProps: (payload: Record<string, any>, valuesToRemove: any[]) => Record<string, unknown>;

export { removeProp, removeProps };
