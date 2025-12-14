import type { Feature } from "@core/types";
import { seedFAQ } from "./seed/faq";
import { FAQ } from "./collections/FAQ";

const faqConfig: Feature = {
  globals: [],
  collections: [FAQ],
  seeds: [seedFAQ],
};

export default faqConfig;
