import { test, describe } from "node:test";
import assert from "node:assert";
import { sanitizeUrl } from "./utils.ts";

describe("sanitizeUrl", () => {
  test("allows valid http and https URLs", () => {
    assert.strictEqual(sanitizeUrl("https://example.com"), "https://example.com");
    assert.strictEqual(sanitizeUrl("http://example.com/path?query=1#hash"), "http://example.com/path?query=1#hash");
  });

  test("allows valid relative URLs and anchor fragments", () => {
    assert.strictEqual(sanitizeUrl("/projects"), "/projects");
    assert.strictEqual(sanitizeUrl("#contact"), "#contact");
    assert.strictEqual(sanitizeUrl("#"), "#");
  });

  test("allows mailto and tel URLs", () => {
    assert.strictEqual(sanitizeUrl("mailto:user@example.com"), "mailto:user@example.com");
    assert.strictEqual(sanitizeUrl("tel:+1234567890"), "tel:+1234567890");
  });

  test("sanitizes dangerous javascript: scheme", () => {
    assert.strictEqual(sanitizeUrl("javascript:alert(1)"), "#");
    assert.strictEqual(sanitizeUrl("JAVASCRIPT:alert('xss')"), "#");
    assert.strictEqual(sanitizeUrl("  javascript:alert(1)  "), "#");
    assert.strictEqual(sanitizeUrl("javascript :alert(1)"), "#");
  });

  test("sanitizes javascript: scheme with control characters", () => {
    assert.strictEqual(sanitizeUrl("java\x00script:alert(1)"), "#");
    assert.strictEqual(sanitizeUrl("java\x09script:alert(1)"), "#");
    assert.strictEqual(sanitizeUrl("java\x0ascript:alert(1)"), "#");
  });

  test("sanitizes vbscript: and data: schemes", () => {
    assert.strictEqual(sanitizeUrl("vbscript:msgbox(1)"), "#");
    assert.strictEqual(sanitizeUrl("data:text/html,<script>alert(1)</script>"), "#");
  });

  test("handles empty, invalid, or non-string inputs gracefully", () => {
    assert.strictEqual(sanitizeUrl(""), "#");
    assert.strictEqual(sanitizeUrl(null), "#");
    assert.strictEqual(sanitizeUrl(undefined), "#");
    assert.strictEqual(sanitizeUrl("invalid_url_with_no_protocol"), "#");
  });

  test("respects custom fallback parameter", () => {
    assert.strictEqual(sanitizeUrl("javascript:alert(1)", "/fallback"), "/fallback");
    assert.strictEqual(sanitizeUrl(null, "https://default.com"), "https://default.com");
  });
});
