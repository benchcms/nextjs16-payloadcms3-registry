import { describe, it, expect } from "vitest";
import { getSettings } from "../queries/settings";

describe("Settings queries", () => {
  describe("getSettings", () => {
    it("returns settings object", async () => {
      const result = await getSettings();
      expect(result).toBeDefined();
    });

    it("includes contact information fields", async () => {
      const result = await getSettings();
      expect(result).toHaveProperty("email");
      expect(result).toHaveProperty("phone");
      expect(result).toHaveProperty("address");
    });

    it("includes social media URLs", async () => {
      const result = await getSettings();
      expect(result).toHaveProperty("facebook");
      expect(result).toHaveProperty("instagram");
      expect(result).toHaveProperty("linkedin");
      expect(result).toHaveProperty("twitter");
    });

    it("includes google analytics ID", async () => {
      const result = await getSettings();
      expect(result).toHaveProperty("googleAnalyticsId");
    });
  });
});
