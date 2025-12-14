import type { Feature } from "@features/types";
import { seedCatalog } from "./seed/catalog";
import { CatalogCategories } from "./collections/CatalogCategories";
import { CatalogItems } from "./collections/CatalogItems";

const catalogConfig: Feature = {
  globals: [],
  collections: [CatalogCategories, CatalogItems],
  seeds: [seedCatalog],
};

export default catalogConfig;
