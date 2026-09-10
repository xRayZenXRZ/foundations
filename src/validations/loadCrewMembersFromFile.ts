import { connect } from "bun";
import type { CrewMember } from "../types/CrewMember";
import { parseCrewMembersResponse } from "../validations/parseCrewMembersResponse";
import { loadCrewMembers } from "./loadCrewMembers";

export const loadCrewMembersFromFile = async (
  path: string = "./src/data/crewMembers.json",
): Promise<Array<CrewMember>> => {
  try {
    const file = Bun.file(path);

    const response = await file.json();

    return parseCrewMembersResponse(response);
  } catch (error) {
    throw new Error(
      `Échec du chargement : ${error instanceof Error ? error.message : error}`,
    );
  }
};
