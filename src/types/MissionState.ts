import type { CrewCard } from "./CrewCard";

export type MissionState =
  | { status: "loading" }
  | { status: "empty" }
  | { status: "success"; data: Array<CrewCard> }
  | { status: "error"; message: string };
