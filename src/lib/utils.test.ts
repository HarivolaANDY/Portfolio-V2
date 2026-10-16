import test from "node:test";
import assert from "node:assert/strict";
import { sanitizeUrl } from "./utils.ts";

test("sanitizeUrl allows valid HTTP and HTTPS URLs", () => {
  assert.equal(sanitizeUrl("https://github.com"), "https://github.com");
  assert.equal(sanitizeUrl("http://example.com/path?query=1"), "http://example.com/path?query=1");
});

test("sanitizeUrl allows mailto and tel schemes", () => {
  assert.equal(sanitizeUrl("mailto:user@example.com"), "mailto:user@example.com");
  assert.equal(sanitizeUrl("tel:+1234567890"), "tel:+1234567890");
});

test("sanitizeUrl allows relative paths and anchor links", () => {
  assert.equal(sanitizeUrl("/projects"), "/projects");
  assert.equal(sanitizeUrl("#contact"), "#contact");
});

test("sanitizeUrl blocks javascript pseudoprotocol", () => {
  assert.equal(sanitizeUrl("javascript:alert(1)"), "#");
  assert.equal(sanitizeUrl("javascript:void(0)"), "#");
  assert.equal(sanitizeUrl("  JAVASCRIPT:alert('xss')  "), "#");
  assert.equal(sanitizeUrl("java\0script:alert(1)"), "#");
});

test("sanitizeUrl blocks data, vbscript and other dangerous schemes", () => {
  assert.equal(sanitizeUrl("data:text/html,<script>alert(1)</script>"), "#");
  assert.equal(sanitizeUrl("vbscript:msgbox(1)"), "#");
  assert.equal(sanitizeUrl("file:///etc/passwd"), "#");
});

test("sanitizeUrl handles empty, undefined, or invalid inputs", () => {
  assert.equal(sanitizeUrl(undefined), "#");
  assert.equal(sanitizeUrl(""), "#");
  assert.equal(sanitizeUrl("   "), "#");
});
