import type { MissionState } from "./types/MissionState";

export function describeMissionState(state: MissionState): string {
  switch (state.status) {
    case "loading":
      return "Chargement de l'équipage...";
    case "success":
      return `${state.data.length > 1 ? state.data.length + " membres" : state.data.length === 1 ? state.data.length + " membre " : "aucun membre "} dans l\'équipage`;
    case "error":
      return `ERREUR : ${state.message}`;
    default: {
      const unreachable: never = state;
      return unreachable;
    }
  }
}
