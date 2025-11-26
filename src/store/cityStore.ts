import type { City } from "@/Pages/admin/cities/api/types";
import { createCrudStore } from "./useCrudStore";

export const useCityStore = createCrudStore<City>();
