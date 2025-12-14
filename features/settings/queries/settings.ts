"use server";

import { cache } from "react";
import { getPayloadClient } from "@core/utils/payload";
import type { Settings } from "../types";

export const getSettings = cache(async (): Promise<Settings> => {
  const payload = await getPayloadClient();
  return await payload.findGlobal({
    slug: "settings",
  });
});
