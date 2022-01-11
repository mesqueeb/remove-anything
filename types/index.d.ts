export declare function removeProps<Payload extends Record<string, any>>(payload: Payload, valuesToRemove: any[]): Payload;
export declare function removeProp<Payload extends Record<string, any>>(payload: Payload, valueToRemove: any): Payload;
/**
 * Recursively removes empty objects from an object
 */
export declare function removeEmptyObjects(payload: Record<string, any>): Record<string, any>;
