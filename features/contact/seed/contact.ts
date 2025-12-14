import { Payload } from "payload";
import { faker } from "@faker-js/faker";

export async function seedContact(payload: Payload) {
  console.log("🌱 Seeding contact...");

  await payload.updateGlobal({
    slug: "contact",
    data: {
      email: faker.internet.email(),
    },
  });

  console.log("✅ Contact seeded");
}
