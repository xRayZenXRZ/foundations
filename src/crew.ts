import { crewMembers } from "./data/crewMembers";
import { teams } from "./data/teams";
import type { CrewCard } from "./types/CrewCard";
import type { CrewMember } from "./types/CrewMember";
import type { Team } from "./types/Team";

export const getDisplayName = (crewMember: CrewMember) => crewMember.name + ":" + crewMember.role

export const hasSkill = (crewMember: CrewMember, skill: string) => crewMember.skills.includes(skill)

export const isAvailable = (crewMember : CrewMember) => crewMember.status === "disponible"

export const findTeamById = (teamId : number) : Team | undefined => teams.find(team => team.id === teamId)

export const findTeamName = (crewMember : CrewMember) : string => {
    const team = findTeamById(crewMember.teamId)
    return team?.name ?? "Équipe inconnue"
}

export const createCrewCards = (crewMember : Array<CrewMember>) : Array<CrewCard> => crewMember.map(member => ({id: member.id, label: getDisplayName(member), teamName: findTeamName(member), isAvailable: isAvailable(member)}))
