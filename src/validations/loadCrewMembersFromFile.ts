import { connect } from "bun";
import type { CrewMember } from "../types/CrewMember";
import { parseCrewMembersResponse } from "../validations/parseCrewMembersResponse";
import { loadCrewMembers } from "./loadCrewMembers";

export const loadCrewMembersFromFile = async (
  path: string = "./src/data/crewMembers.json",
): Promise<Array<CrewMember>> => {
  const file = Bun.file(path);
  const exists = await file.exists();
  if (!exists) {
    throw new Error(`Fichier introuvable : ${path}`);
  }
  const response = await file.json();
  return parseCrewMembersResponse(response);
};
