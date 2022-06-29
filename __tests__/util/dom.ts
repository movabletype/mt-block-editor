import { escapeSingleQuoteAttribute } from "../../src/util/dom";

describe("escapeSingleQuoteAttribute", () => {
  test("escape", () => {
    expect(escapeSingleQuoteAttribute("&<>'\t\n\r")).toBe(
      "&amp;&lt;&gt;&#x27;&#x08;&#x0A;&#x0D;"
    );
  });
  test("preserve", async () => {
    expect(escapeSingleQuoteAttribute('"')).toBe('"');
  });
});
