import type { Feature } from "@core/types";
import { seedPressReleases } from "./seed/pressReleases";
import { PressReleases } from "./collections/PressReleases";

const pressReleasesConfig: Feature = {
  globals: [],
  collections: [PressReleases],
  seeds: [seedPressReleases],
};

export default pressReleasesConfig;
