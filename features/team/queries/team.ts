"use server";

import { getPayloadClient } from "@core/utils/payload";
import type { Team } from "../types";

// PUBLIC API

/**
 * Get all team groups with their members
 */
export async function getTeamSections(): Promise<Team[]> {
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "team",
    sort: "order",
    depth: 2,
  });

  return docs as Team[];
}

/**
 * Get a single team group by slug
 */
export async function getTeamSection(slug: string): Promise<Team | null> {
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "team",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 2,
  });

  return (docs[0] as Team) || null;
}
