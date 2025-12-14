"use server";

import { cache } from "react";
import { getPayloadClient } from "@core/utils/payload";
import type { Contact } from "../types";

// PUBLIC API

/**
 * Get contact information and social media links
 *
 * This function is cached per-request to prevent redundant database queries
 * when multiple components need contact data on the same page.
 */
export const getContact = cache(async (): Promise<Contact> => {
  const payload = await getPayloadClient();

  return await payload.findGlobal({
    slug: "contact",
  });
});
