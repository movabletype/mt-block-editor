declare class MockDataTransfer implements DataTransfer {
    private data;
    dropEffect: "none" | "copy" | "link" | "move";
    effectAllowed: "none" | "copy" | "link" | "move" | "copyLink" | "copyMove" | "linkMove" | "all" | "uninitialized";
    files: FileList;
    items: DataTransferItemList;
    types: readonly string[];
    constructor();
    getData(format: string): string;
    setData(format: string, data: string): void;
    clearData(): void;
    setDragImage(): void;
}
