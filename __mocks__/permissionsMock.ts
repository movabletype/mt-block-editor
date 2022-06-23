Object.defineProperty(navigator, "permissions", {
  writable: true,
  value: {
    query: jest.fn().mockImplementation(() =>
      Promise.resolve({
        state: "granted",
      })
    ),
  },
});
