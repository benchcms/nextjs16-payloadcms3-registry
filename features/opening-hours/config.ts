import type { Feature } from "@core/types";
import { seedOpeningHours } from "./seed/openingHours";
import { OpeningHours } from "./collections/OpeningHours";

const openingHoursConfig: Feature = {
  globals: [],
  collections: [OpeningHours],
  seeds: [seedOpeningHours],
};

export default openingHoursConfig;
