import { teams } from "./data/teams";
import type { CrewCard } from "./types/CrewCard";
import type { CrewMember } from "./types/CrewMember";
import type { Team } from "./types/Team";

export const getDisplayName = (member: CrewMember): string => {
  return `${member.name} : ${member.role ?? "Sans rôle"}`;
};

export const hasSkill = (member: CrewMember, skill: string): boolean =>
  member.skills.includes(skill);

export const isAvailable = (member: CrewMember): boolean =>
  member.status === "disponible";

export const findTeamById = (teamId: number): Team | undefined =>
  teams.find((team) => team.id === teamId);

export const getTeamName = (member: CrewMember): string => {
  const team = findTeamById(member.teamId);
  return team?.name ?? "Équipe inconnue";
};

export const createCrewCards = (member: Array<CrewMember>): Array<CrewCard> =>
  member.map((member) => ({
    id: member.id,
    label: getDisplayName(member),
    teamName: getTeamName(member),
    isAvailable: isAvailable(member),
  }));
