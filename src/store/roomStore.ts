import type { Room } from "@/Pages/admin/rooms/api/types";
import { createCrudStore } from "./useCrudStore";

export const useRoomStore = createCrudStore<Room>();
