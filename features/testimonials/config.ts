import type { Feature } from "@features/types";
import { seedTestimonials } from "./seed/testimonials";
import { Testimonials } from "./collections/Testimonials";

const testimonialsConfig: Feature = {
  globals: [],
  collections: [Testimonials],
  seeds: [seedTestimonials],
};

export default testimonialsConfig;
