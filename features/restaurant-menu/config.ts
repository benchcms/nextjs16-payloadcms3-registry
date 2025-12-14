import type { Feature } from "@features/types";
import { seedRestaurantMenu } from "./seed/restaurantMenu";
import { RestaurantMenu } from "./collections/RestaurantMenu";

const restaurantMenuConfig: Feature = {
  globals: [],
  collections: [RestaurantMenu],
  seeds: [seedRestaurantMenu],
};

export default restaurantMenuConfig;
