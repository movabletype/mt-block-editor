export declare const debounce: <T extends (...args: unknown[]) => void>(fn: T, delay: number) => (...args: Parameters<T>) => void;
