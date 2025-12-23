import type { Hotel } from "@/Pages/admin/hotels/api/types";
import { createCrudStore } from "./useCrudStore";

export const useHotelStore = createCrudStore<Hotel>();
