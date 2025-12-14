import type { Feature } from "@features/types";
import { Socials } from "./globals/Socials";
import { seedSocials } from "./seed/socials";

const socialsConfig: Feature = {
  globals: [Socials],
  collections: [],
  seeds: [seedSocials],
};

export default socialsConfig;
