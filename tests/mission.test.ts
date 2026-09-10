import { describe, expect, test } from "bun:test";
import { describeMissionState } from "../src/mission.ts";
import { createCrewCards } from "../src/crew.ts";
import { MissionState } from "../src/types/MissionState.ts";
import { crewMembers } from "../src/data/crewMembers";
import { CrewCard } from "../src/types/CrewCard.ts";

describe("describeMissionState", () => {
  test("affiche le statut du succès de la mission mission", () => {
    const crewCards: Array<CrewCard> = createCrewCards(crewMembers);

    const successState: MissionState = { status: "success", data: crewCards };

    expect(describeMissionState(successState)).toBe(
      `${crewCards.length} membres dans l'équipage`,
    );
  });

  test("affiche le statut du chargement de la mission", () => {
    const loadingState: MissionState = { status: "loading" };

    expect(describeMissionState(loadingState)).toBe(
      "Chargement de l'équipage...",
    );
  });

  test("affiche le statut d'erreur sur la mission", () => {
    const errorState: MissionState = {
      status: "error",
      message: "Communication avec la base interrompue",
    };

    expect(describeMissionState(errorState)).toBe(
      "ERREUR : Communication avec la base interrompue",
    );
  });
});
