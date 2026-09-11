import { createCrewCards } from "../crew";
import type { CrewMember } from "../types/CrewMember";
import type { MissionState } from "../types/MissionState";

export const loadMissionState = async (
  loader: () => Promise<Array<CrewMember>>,
): Promise<MissionState> => {
  try {
    const crew = await loader();
    if (!crew) {
      throw new Error("data manquante");
    }
    const crewCards = createCrewCards(crew);

    if (crewCards.length === 0) {
      return {
        status: "empty",
      };
    }

    return {
      status: "success",
      data: crewCards,
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? error.message : "erreur inconnue",
    };
  }
};
