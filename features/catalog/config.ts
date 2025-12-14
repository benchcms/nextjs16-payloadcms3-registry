import type { Feature } from "@core/types";
import { seedCatalog } from "./seed/catalog";
import { CatalogCategories } from "./collections/CatalogCategories";
import { CatalogItems } from "./collections/CatalogItems";

const catalogConfig: Feature = {
  globals: [],
  collections: [CatalogCategories, CatalogItems],
  seeds: [seedCatalog],
};

export default catalogConfig;
