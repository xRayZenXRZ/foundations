import { crewMembersResponseSchema } from "./crewMembersResponseSchema";

export function parseCrewMembersResponse(valeur: unknown) {
  const result = crewMembersResponseSchema.safeParse(valeur);
  if (!result.success) {
    throw new Error("Validation des données échouée");
  }
  return result.data.data;
}
