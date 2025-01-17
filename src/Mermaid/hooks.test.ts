import { isMermaidCode } from "./hooks";

describe("isMermaidCode", () => {
  describe("returns true when", () => {
    it("mermaid code exists", () => {
      const mermaidCode = "sequenceDiagram foo foo2 foo-->foo2";

      const result = isMermaidCode(mermaidCode);

      expect(result).toBe(true);
    });

    it("mermaid code exists with directive", () => {
      const mermaidCode = `%%{init: { 'logLevel': 'debug', 'theme': 'dark' } }%%
graph LR
A-->B`;

      const result = isMermaidCode(mermaidCode);

      expect(result).toBe(true);
    });
  });

  describe("returns false when", () => {
    it("contains no mermaid code", () => {
      const mermaidCode = "this isnt mermaid code";

      const result = isMermaidCode(mermaidCode);

      expect(result).toBe(false);
    });

    it("mermaid directive but not mermaid start keyword", () => {
      const mermaidCode = `%%{init: { 'logLevel': 'debug', 'theme': 'dark' } }%%
invalid LR
A-->B`;

      const result = isMermaidCode(mermaidCode);

      expect(result).toBe(false);
    });

    it("improper directive", () => {
      const mermaidCode = `%%{init: { 'logLevel': 'debug', 'theme': 'dark' } 
invalid LR
A-->B`;

      const result = isMermaidCode(mermaidCode);

      expect(result).toBe(false);
    });
  });
});
