import { teams } from "./data/teams";
import { crewMembers } from "./data/crewMembers";
import { createCrewCards, getDisplayName, hasSkill, isAvailable } from "./crew";
import type { CrewCard } from "./types/CrewCard";
import { removePartner, updateTeamPartnership } from "./partnerships";
import type { Team } from "./types/Team";
import { describeMissionState, type MissionState } from "./types/MissionState";
import { findById } from "./collections";

console.log("Le centre de contrôle de Foundations est opérationnel.");


// Verifier d'abord qu'elle existe 
//...
//console.log(teams)

//destructuration.
//const [team_1, team_2, ...reste] = teams

//console.log(team_1?.name + " : " + team_1?.title)


//2.3

const crewMember = crewMembers[0];

//console.log(crewMembers.find(crewMember => crewMember.name === "Alonzo Church"))

//console.log(crewMembers.filter(isAvailable))

//console.log(crewMembers.filter(crewMember => hasSkill(crewMember, "communication")))

//console.log(crewMembers.map(crewMember=>getDisplayName(crewMember)))

//3 

//const crewCards : Array<CrewCard> = createCrewCards(crewMembers)

//console.table(crewCards)

//console.table(teams)

//const withAurorePartnership: Array<Team> = updateTeamPartnership(teams, 1, 2);
//const partnerTeams: Array<Team> = updateTeamPartnership(withAurorePartnership, 2, 1);

//console.table(partnerTeams)

//const loadingState: MissionState = { status: "loading" };
//const successState: MissionState = { status: "success" ,data : crewCards };
//const errorState: MissionState = { status: "error", message : "Communication avec la base interrompue"}

//describeMissionState(loadingState)

//6

console.log(findById(teams, 3))

console.log(findById(crewMembers, 5))

console.log(findById(createCrewCards(crewMembers),2))



