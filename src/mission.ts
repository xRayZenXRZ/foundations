import type { MissionState } from "./types/MissionState";

export function describeMissionState(state: MissionState): string {
  switch (state.status) {
    case "loading":
      return "Chargement de l'équipage...";
    case "success":
      return `${state.data.length > 1 ? state.data.length + " membres" : state.data.length + " membre"} dans l\'équipage`;
    case "error":
      return `ERREUR : ${state.message}`;
    case "empty":
      return "L'équipage est vide...";
    default: {
      const unreachable: never = state;
      return unreachable;
    }
  }
}
