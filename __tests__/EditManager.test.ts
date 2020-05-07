import Editor from "../src/Editor";
import Text from "../src/Block/Text";
import EditManager from "../src/EditManager";

const editorContextProps = {
  editor: {} as Editor,
  setFocusedId: (id, opts) => {},
  getFocusedId: () => null,
};

test("constructor", () => {
  const manager = new EditManager();
  expect(manager).toBeInstanceOf(EditManager);
});

describe("add/canUndo/canRedo", () => {
  describe("simple case", () => {
    const manager = new EditManager();

    let count = 0;
    const history = {
      block: new Text(),
      data: {},
      handlers: {
        id: Symbol("test"),
        undo() {
          count++;
        },
        redo() {
          count--;
        },
      },
    };

    expect(manager.canUndo()).toBe(false);
    expect(manager.canRedo()).toBe(false);

    manager.add(history);
    manager.add(history);
    expect(manager.canUndo()).toBe(true);
    expect(manager.canRedo()).toBe(false);

    manager.undo(editorContextProps);
    expect(manager.canUndo()).toBe(true);
    expect(manager.canRedo()).toBe(true);
    expect(count).toBe(1);

    manager.undo(editorContextProps);
    expect(manager.canUndo()).toBe(false);
    expect(manager.canRedo()).toBe(true);
    expect(count).toBe(2);

    manager.redo(editorContextProps);
    expect(manager.canUndo()).toBe(true);
    expect(manager.canRedo()).toBe(true);
    expect(count).toBe(1);

    manager.redo(editorContextProps);
    expect(manager.canUndo()).toBe(true);
    expect(manager.canRedo()).toBe(false);
    expect(count).toBe(0);
  });

  describe("merge", () => {
    const manager = new EditManager();

    let count = 0;
    const history = {
      block: new Text(),
      handlers: {
        id: Symbol("test"),
        merge(a, b) {
          a.data.c *= b.data.c;
          return a;
        },
        undo(hist) {
          count += hist.data.c;
        },
        redo() {
          count += hist.data.c;
        },
      },
    };

    manager.add(Object.assign({}, history, { data: { c: 2 } }));
    manager.undo(editorContextProps);
    expect(count).toBe(2);

    count = 0;

    manager.add(Object.assign({}, history, { data: { c: 2 } }));
    manager.add(Object.assign({}, history, { data: { c: 2 } })); // merged
    manager.add(Object.assign({}, history, { data: { c: 2 } })); // merged
    manager.undo(editorContextProps);
    expect(count).toBe(8);
  });

  describe("dedup (by merge)", () => {
    const manager = new EditManager();

    let count = 0;
    const history = {
      block: new Text(),
      handlers: {
        id: Symbol("test"),
        merge(a, b) {
          return a.data.c === b.data.c ? a : null;
        },
        undo(hist) {
          count += hist.data.c;
        },
        redo() {
          count += hist.data.c;
        },
      },
    };

    manager.add(Object.assign({}, history, { data: { c: 1 } }));
    manager.add(Object.assign({}, history, { data: { c: 2 } }));
    manager.add(Object.assign({}, history, { data: { c: 2 } })); // dedupped
    manager.add(Object.assign({}, history, { data: { c: 3 } }));

    manager.undo(editorContextProps);
    expect(count).toBe(3);

    manager.undo(editorContextProps);
    expect(count).toBe(5);

    manager.undo(editorContextProps);
    expect(count).toBe(6);
  });

  describe("limit option", () => {
    test.each([50, 100])("limit: %i", (limit) => {
      const manager = new EditManager({ limit });

      let count = 0;
      const history1 = {
        block: new Text(),
        data: {},
        handlers: {
          id: Symbol("test"),
          undo() {
            count++;
          },
          redo() {
            count--;
          },
        },
      };
      const history2 = {
        block: new Text(),
        data: {},
        handlers: {
          id: Symbol("test"),
          undo() {
            count += 2;
          },
          redo() {
            count += 2;
          },
        },
      };
      for (let i = 0; i < limit; i++) {
        manager.add(history1);
      }
      for (let i = 0; i < limit; i++) {
        manager.add(history2);
      }
      for (let i = 0; i < limit*2; i++) {
        manager.undo(editorContextProps);
      }

      expect(count).toBe(limit * 2);
    });
  });
});

describe("undo/redo", () => {
  test("simple case", () => {
    const manager = new EditManager();

    let count = 0;
    const history = {
      block: new Text(),
      data: {},
      handlers: {
        id: Symbol("test"),
        undo() {
          count++;
        },
        redo() {
          count--;
        },
      },
    };

    for (let i = 0; i < 10; i++) {
      manager.add(history);
    }

    manager.undo(editorContextProps);
    expect(count).toBe(1);

    manager.undo(editorContextProps);
    expect(count).toBe(2);

    manager.redo(editorContextProps);
    expect(count).toBe(1);

    manager.redo(editorContextProps);
    expect(count).toBe(0);
  });

  test("add method is ignored while undo/redo", () => {
    const manager = new EditManager();

    let count = 0;
    const errorHistory = {
      block: new Text(),
      data: {},
      handlers: {
        id: Symbol("test"),
        undo() {
          throw "Error";
        },
        redo() {
          throw "Error";
        },
      },
    };
    const history = {
      block: new Text(),
      data: {},
      handlers: {
        id: Symbol("test"),
        undo() {
          manager.add(errorHistory);
          count++;
        },
        redo() {
          manager.add(errorHistory);
          count--;
        },
      },
    };

    for (let i = 0; i < 10; i++) {
      manager.add(history);
    }

    manager.undo(editorContextProps);
    expect(count).toBe(1);

    manager.undo(editorContextProps);
    expect(count).toBe(2);

    manager.redo(editorContextProps);
    expect(count).toBe(1);

    manager.redo(editorContextProps);
    expect(count).toBe(0);
  });
});

test("generateGroup", () => {
  const manager = new EditManager();
  expect(typeof manager.generateGroup()).toBe("number");
});

describe("group", () => {
  let manager;
  let group;
  let count;

  const history = {
    block: new Text(),
    data: {},
    handlers: {
      id: Symbol("test"),
      undo() {
        count++;
      },
      redo() {
        count--;
      },
    },
  };

  beforeEach(() => {
    manager = new EditManager();
    group = manager.generateGroup();
    count = 0;
  });

  describe("by generateGroup", () => {
    test("grouped", () => {
      manager.add(Object.assign({}, history, { group }));
      manager.add(Object.assign({}, history, { group }));

      manager.undo(editorContextProps);
      expect(count).toBe(2);

      manager.redo(editorContextProps);
      expect(count).toBe(0);
    });

    test("interrupted", () => {
      manager.add(Object.assign({}, history, { group }));
      manager.add(Object.assign({}, history, { group }));
      manager.add(Object.assign({}, history));
      manager.add(Object.assign({}, history, { group }));
      manager.add(Object.assign({}, history, { group }));
      manager.add(Object.assign({}, history, { group }));

      manager.undo(editorContextProps);
      expect(count).toBe(3);

      manager.undo(editorContextProps);
      expect(count).toBe(4);

      manager.undo(editorContextProps);
      expect(count).toBe(6);
    });
  });

  describe("by beginGrouping/endGrouping", () => {
    test("grouped", () => {
      manager.beginGrouping();
      manager.add(Object.assign({}, history));
      manager.add(Object.assign({}, history));
      manager.endGrouping();

      manager.undo(editorContextProps);
      expect(count).toBe(2);

      manager.redo(editorContextProps);
      expect(count).toBe(0);
    });

    test("interrupted", () => {
      manager.beginGrouping();
      manager.add(Object.assign({}, history));
      manager.add(Object.assign({}, history));
      manager.endGrouping();
      manager.add(Object.assign({}, history));
      manager.beginGrouping();
      manager.add(Object.assign({}, history));
      manager.add(Object.assign({}, history));
      manager.add(Object.assign({}, history));
      manager.endGrouping();
      manager.add(Object.assign({}, history));

      manager.undo(editorContextProps);
      expect(count).toBe(1);

      manager.undo(editorContextProps);
      expect(count).toBe(4);

      manager.undo(editorContextProps);
      expect(count).toBe(5);

      manager.undo(editorContextProps);
      expect(count).toBe(7);
    });
  });
});
