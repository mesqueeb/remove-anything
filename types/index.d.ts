declare type PlainObject = Record<string, any>;
export declare function removeProps<Payload extends PlainObject>(payload: Payload, valuesToRemove: any[]): Payload;
export declare function removeProp<Payload extends PlainObject>(payload: Payload, valueToRemove: any): Payload;
export {};
