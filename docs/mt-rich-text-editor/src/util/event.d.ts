export declare const debounce: <T extends (...args: any[]) => void>(fn: T, delay: number) => (...args: Parameters<T>) => void;
