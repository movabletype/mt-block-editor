// Polyfills and mocks for jsdom (Vitest)
import { vi, afterEach } from "vitest";

// matchMedia mock
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// permissions mock
Object.defineProperty(navigator, "permissions", {
  writable: true,
  value: {
    query: vi.fn().mockResolvedValue({ state: "granted" }),
  },
});

// Cleanup pending React scheduler tasks after each test
// to prevent "window is not defined" errors after jsdom teardown
afterEach(() => {
  // Wait for React scheduler to flush pending tasks
  return new Promise<void>((resolve) => {
    // Use setTimeout to let setImmediate callbacks run first
    setTimeout(() => {
      resolve();
    }, 0);
  });
});
