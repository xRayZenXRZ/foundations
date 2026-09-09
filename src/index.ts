import { teams } from "./data/teams";
import { crewMembers } from "./data/crewMembers";
import { createCrewCards, findTeamById, getDisplayName, hasSkill, isAvailable } from "./crew";
import type { CrewCard } from "./types/CrewCard";
import { removePartner, updateTeamPartnership } from "./partnerships";
import type { Team } from "./types/Team";
import { findById, replaceById } from "./collections";
import { describeMissionState } from "./mission";
import type { MissionState } from "./types/MissionState";

console.log("Le centre de contrôle de Foundations est opérationnel.");


// Verifier d'abord qu'elle existe 
//...

//destructuration.
const [team_1, team_2, ...reste] = teams

console.log(team_1?.name + " : " + team_1?.title)

console.table(teams)


//2.3

console.table(crewMembers.find(crewMember => crewMember.name === "Alonzo Church"))

console.table(crewMembers.filter(crewMember => isAvailable(crewMember)))

console.table(crewMembers.filter(crewMember => hasSkill(crewMember, "communication")))

console.table(crewMembers.map(crewMember=>getDisplayName(crewMember)))

//3 

const crewCards : Array<CrewCard> = createCrewCards(crewMembers)

console.table(crewCards)

const withAurorePartnership: Array<Team> = updateTeamPartnership(teams, 1, 2);

const partnerTeams: Array<Team> = updateTeamPartnership(withAurorePartnership, 2, 1);

console.table(partnerTeams)


//5

const loadingState: MissionState = { status: "loading" };
const successState: MissionState = { status: "success" , data : crewCards };
const errorState: MissionState = { status: "error", message : "Communication avec la base interrompue"}

//console.log(successState.data) => "ReferencError : Cannot acces 'sucessState' before intialisation."

console.log(describeMissionState(errorState))
console.log(describeMissionState(successState))
console.log(describeMissionState(loadingState))

//6

console.table(findById(teams, 3))

//Remplace l'équipe ayant l'identifiant 3 sans modifier le tableau original.

const teamToReplace = findById(teams, 1);
const teamWithToReplace = findById(teams,3)
if (teamToReplace && teamWithToReplace) {
	const updatedTeams = replaceById(teams, { ...teamToReplace, id: teamWithToReplace.id });

	console.table(updatedTeams);
}
