import { teams } from "./data/teams";
import { crewMembers } from "./data/crewMembers";
import {
  getDisplayName,
  hasSkill,
  isAvailable,
  createCrewCards,
  getTeamName,
  findTeamById,
} from "./crew";
import {
  addPartner,
  createPartnership,
  updateTeamPartnership,
} from "./partnerships";
import { describeMissionState } from "./mission";
import { findById, replaceById } from "./collections";
import type { MissionState } from "./types/MissionState";
import type { CrewCard } from "./types/CrewCard";
import type { Team } from "./types/Team";
import { loadCrewMembersFromFile } from "./validations/loadCrewMembersFromFile";
import { loadMissionState } from "./validations/loadMissionState";
import type { TeamSummary } from "./types/TeamSummary";

console.log("Le centre de contrôle de Foundations est opérationnel.");

// 1.
console.log("\n");
console.log("Exercice 1 :");
const firstTeam = teams[0];
if (firstTeam) {
  const { name, title } = firstTeam;
  console.log(`${name} : ${title}`);
}
console.table(teams);

// 2.
console.log("\n");
console.log("Exercice 2 :");
const alonzo = crewMembers.find((member) => member.name === "Alonzo Church");
console.log("Alonzo Church :", alonzo);

const availableMembers = crewMembers.filter(isAvailable);
console.log("Membres disponibles :", availableMembers);

const commSpecialists = crewMembers.filter((member) =>
  hasSkill(member, "communication"),
);
console.log("Spécialistes en communication :", commSpecialists);

const displayNames = crewMembers.map(getDisplayName);
console.log("Noms d'affichage :", displayNames);

// 3.
console.log("\n");
console.log("Exercice 3 :");
const crewCards: Array<CrewCard> = createCrewCards(crewMembers);
console.table(crewCards);

// 4.
console.log("\n");
console.log("Exercice 4 :");
const auroreTeam = teams[0];
if (auroreTeam) {
  const updatedAurore = addPartner(auroreTeam, 2);
  console.log("Objet d'origine (Aurore) :", auroreTeam);
  console.log("Résultat (Aurore avec partenaire 2) :", updatedAurore);
}

const withAurorePartnership: Array<Team> = updateTeamPartnership(teams, 1, 2);
const partnerTeams: Array<Team> = updateTeamPartnership(
  withAurorePartnership,
  2,
  1,
);
console.table(partnerTeams);

// 5.
console.log("\n");
console.log("Exercice 5 :");
const loadingState: MissionState = { status: "loading" };
const successState: MissionState = { status: "success", data: crewCards };
const errorState: MissionState = {
  status: "error",
  message: "Communication avec la base interrompue",
};

console.log(describeMissionState(loadingState));
console.log(describeMissionState(successState));
console.log(describeMissionState(errorState));

// 6.
console.log("\n");
console.log("Exercice 6 :");
const team3 = findById(teams, 3);
console.log("Équipe trouvée par ID 3 :", team3);

const member5 = findById(crewMembers, 5);
console.log("Membre trouvé par ID 5 :", member5);

const card2 = findById(crewCards, 2);
console.log("Fiche d'équipage trouvée par ID 2 :", card2);

// Test de replaceById avec un membre
if (member5) {
  const updatedMember5 = { ...member5, status: "indisponible" as const };
  const updatedMembers = replaceById(crewMembers, updatedMember5);
  console.log(
    "Résultat de replaceById (Membre modifié) :",
    findById(updatedMembers, 5),
  );
}

// Test de replaceById avec une équipe
if (team3) {
  const updatedTeam3 = { ...team3, memberCount: 1000 };
  const updatedTeams = replaceById(teams, updatedTeam3);
  console.log(
    "Résultat de replaceById (Équipe modifiée) :",
    findById(updatedTeams, 3),
  );
}

/*
// Test de fonctionnement avec crewMembers.json
const loadCrewMembers = await loadCrewMembersFromFile();
const missionstate = await loadMissionState(loadCrewMembersFromFile);
console.log(missionstate);
console.log(describeMissionState(missionstate));
*/

// Exercice pour aller plus loin.
if (teams) {
  const teamsSortedByMemberCount = [...teams].sort(
    (a, b) => b.memberCount - a.memberCount,
  );
  console.log(teamsSortedByMemberCount);
}

const Summary: Array<TeamSummary> = [...teams].map((team) => ({
  name: team.name,
  base: team.base,
  memberCount: team.memberCount,
}));

console.table(Summary);

const emptyState: MissionState = { status: "empty" };

console.log(describeMissionState(emptyState));
