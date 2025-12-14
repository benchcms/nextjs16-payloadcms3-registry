import { Payload } from "payload";
import { faker } from "@faker-js/faker";

export async function seedSettings(payload: Payload) {
  console.log("🌱 Seeding settings...");

  await payload.updateGlobal({
    slug: "settings",
    data: {
      // Contact - use faker for realistic data
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.location.streetAddress(true),
      // Socials - hardcoded base URLs
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      // Analytics - empty (requires manual setup)
      googleAnalyticsId: "",
    },
  });

  console.log("✅ Settings seeded");
}
