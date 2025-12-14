"use server";

import { cache } from "react";
import { getPayloadClient } from "@core/utils/payload";
import type { Socials } from "../types";

export const getSocials = cache(async (): Promise<Socials> => {
  const payload = await getPayloadClient();
  return payload.findGlobal({
    slug: "socials",
  });
});
