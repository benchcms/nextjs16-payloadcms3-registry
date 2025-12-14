import type { Feature } from "@core/types";
import { seedRestaurantMenu } from "./seed/restaurantMenu";
import { RestaurantMenu } from "./collections/RestaurantMenu";

const restaurantMenuConfig: Feature = {
  globals: [],
  collections: [RestaurantMenu],
  seeds: [seedRestaurantMenu],
};

export default restaurantMenuConfig;
