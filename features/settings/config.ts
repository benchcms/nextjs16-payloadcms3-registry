import type { Feature } from "@core/types";
import { Settings } from "./globals/Settings";
import { seedSettings } from "./seed/settings";

const settingsConfig: Feature = {
  globals: [Settings],
  collections: [],
  seeds: [seedSettings],
};

export default settingsConfig;
