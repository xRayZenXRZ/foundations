import { teams } from "./data/teams";
import type { CrewCard } from "./types/CrewCard";
import type { CrewMember } from "./types/CrewMember";
import type { Team } from "./types/Team";

export const getDisplayName = (crewMember: CrewMember): string => {
  return `${crewMember.name} : ${crewMember.role ?? "Sans rôle"}`;
};

export const hasSkill = (crewMember: CrewMember, skill: string): boolean =>
  crewMember.skills.includes(skill);

export const isAvailable = (crewMember: CrewMember): boolean =>
  crewMember.status === "disponible";

export const findTeamById = (teamId: number): Team | undefined =>
  teams.find((team) => team.id === teamId);

export const getTeamName = (crewMember: CrewMember): string => {
  const team = findTeamById(crewMember.teamId);
  return team?.name ?? "Équipe inconnue";
};

export const createCrewCards = (
  crewMember: Array<CrewMember>,
): Array<CrewCard> =>
  crewMember.map((crewMember) => ({
    id: crewMember.id,
    label: getDisplayName(crewMember),
    teamName: getTeamName(crewMember),
    isAvailable: isAvailable(crewMember),
  }));
