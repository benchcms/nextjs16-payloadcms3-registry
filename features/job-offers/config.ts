import type { Feature } from "@core/types";
import { seedJobOffers } from "./seed/jobOffers";
import { JobOffers } from "./collections/JobOffers";

const jobOffersConfig: Feature = {
  globals: [],
  collections: [JobOffers],
  seeds: [seedJobOffers],
};

export default jobOffersConfig;
