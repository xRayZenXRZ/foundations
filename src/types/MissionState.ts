import type { CrewCard } from "./CrewCard";

export type MissionState =
| { status: "loading" }
| { status: "success"; data: Array<CrewCard> }
| { status: "error"; message: string };

export function describeMissionState(state: MissionState) : string {
    switch(state.status) {
        case "loading" : 
            return "Chargement de l'équipage…";
            break;
        case "success" :
            return "N membre(s) dans l'équipage"
            break;
        case "error" : 
            return "Erreur : MESSAGE"
            break;
        default: {
            const unreachable: never = state;
            return unreachable;
        }
    }
}