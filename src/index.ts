import { teams } from "./data/teams";
import { crewMembers } from "./data/crewMembers";
import {
  createCrewCards,
  findTeamById,
  getDisplayName,
  hasSkill,
  isAvailable,
} from "./crew";
import type { CrewCard } from "./types/CrewCard";
import { removePartner, updateTeamPartnership } from "./partnerships";
import type { Team } from "./types/Team";
import { findById, replaceById } from "./collections";
import { describeMissionState } from "./mission";
import type { MissionState } from "./types/MissionState";
import { loadCrewMembersFromFile } from "./validations/loadCrewMembersFromFile";
import { loadMissionState } from "./validations/loadMissionState";

console.log("Le centre de contrôle de Foundations est opérationnel.");

//1.3
/*
const firstTeam = teams[0]; // --> récupérez la première équipe

// Verifier d'abord qu'elle existe
if (firstTeam) {
  //destructuration
  const [firstTeam, ...reste] = teams;
  //extraction de ses propriétés name et title
  console.log(firstTeam?.name + " : " + firstTeam?.title);
}

console.table(teams);

*/
/*
//2.3

console.log("Membre chercher ayant le nom prenom : Alonzo Church");
console.log(
  crewMembers.find((crewMember) => crewMember.name === "Alonzo Church"),
);

console.log("Membres disponibles : ");
console.table(crewMembers.filter((crewMember) => isAvailable(crewMember)));

console.log("Membres ayant le skill communication : ");
console.table(
  crewMembers.filter((crewMember) => hasSkill(crewMember, "communication")),
);

console.log("Tableau content le nom d'affichage de chaque membre");
console.table(crewMembers.map((crewMember) => getDisplayName(crewMember)));

console.log(crewMembers.filter(isAvailable));


//3

const crewCards: Array<CrewCard> = createCrewCards(crewMembers);

console.log("Tableau de crewCards : ");
console.table(crewCards);



// 4
/*
const withAurorePartnership: Array<Team> = updateTeamPartnership(teams, 1, 2);

const partnerTeams: Array<Team> = updateTeamPartnership(
  withAurorePartnership,
  2,
  1,
);

console.table(partnerTeams);
*/

//5
const crewCards: Array<CrewCard> = createCrewCards(crewMembers);

const loadingState: MissionState = { status: "loading" };

const successState: MissionState = { status: "success", data: crewCards };
const errorState: MissionState = {
  status: "error",
  message: "Communication avec la base interrompue",
};

//console.log(successState.data) => "ReferencError : Cannot acces 'sucessState' before intialisation."

console.log(describeMissionState(errorState));
console.log(describeMissionState(successState));
console.log(describeMissionState(loadingState));

//6

console.table(findById(teams, 3));

//Remplace l'équipe ayant l'identifiant 3 sans modifier le tableau original.

const teamToReplace = findById(teams, 1);
const teamWithToReplace = findById(teams, 3);
if (teamToReplace && teamWithToReplace) {
  const updatedTeams = replaceById(teams, {
    ...teamToReplace,
    id: teamWithToReplace.id,
  });

  console.table(updatedTeams);
}

//const loadCrewMembers = await loadCrewMembersFromFile();
const missionstate = await loadMissionState(loadCrewMembersFromFile);
//console.log(loadCrewMembers);
console.log(missionstate);
console.log(describeMissionState(missionstate));
