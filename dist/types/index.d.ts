/**
 * Recursively remove props from an object, if the prop's value matches any of those in `valuesToRemove`
 */
export declare function removeProps(payload: Record<string, any>, valuesToRemove?: any[]): Record<string, unknown>;
export declare function removeProp<Payload extends Record<string, any>>(payload: Payload, valueToRemove: any): Payload;
