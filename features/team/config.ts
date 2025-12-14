import type { Feature } from "@core/types";
import { seedTeam } from "./seed/team";
import { Team } from "./collections/Team";

const teamConfig: Feature = {
  globals: [],
  collections: [Team],
  seeds: [seedTeam],
};

export default teamConfig;
