import { crewMembersResponseSchema } from "./crewMembersResponseSchema";

export function parseCrewMembersResponse(valeur: unknown) {
  try {
    const result = crewMembersResponseSchema.safeParse(valeur);

    if (!result.success) {
      throw new Error(`Données invalides : ${result.error.message}`);
    }

    return result.data.data;
  } catch (error) {
    console.error("Erreur attrapée :", (error as Error).message);
    throw error;
  }
}
