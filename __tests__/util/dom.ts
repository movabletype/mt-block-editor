import { escapeSingleQuoteAttribute } from "../../src/util/dom";

describe("escapeSingleQuoteAttribute()", () => {
  test.each`
    input               | expected
    ${"\t"}             | ${"&#x08;"}
    ${"\n"}             | ${"&#x0A;"}
    ${"\r"}             | ${"&#x0D;"}
    ${"&"}              | ${"&amp;"}
    ${"'"}              | ${"&#x27;"}
    ${'"'}              | ${"&quot;"}
    ${"<"}              | ${"&lt;"}
    ${">"}              | ${"&gt;"}
    ${"‘"}              | ${"&#x2018;"}
    ${"’"}              | ${"&#x2019;"}
    ${"“"}              | ${"&#x201c;"}
    ${"”"}              | ${"&#x201d;"}
    ${"test"}           | ${"test"}
    ${"a & b or c & d"} | ${"a &amp; b or c &amp; d"}
  `("Should replace $input with $expected.", ({ input, expected }) => {
    expect(escapeSingleQuoteAttribute(input)).toBe(expected);
  });
});
