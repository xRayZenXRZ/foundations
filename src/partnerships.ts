// fonction de l'exercice 4 
import type { Team } from "./types/Team";

export const addPartner = (teamet : Team, partnerId : number ) : Team => {
    return { ...teamet, partners: [...teamet.partners, partnerId] };
};

export const updateTeamPartnership = ( allTeams : Array<Team>, teamId : number, partnerId : number) : Array<Team> => {

    const teamExists = allTeams.some((team) => team.id === teamId);

    if (!teamExists) {
        return allTeams;
    }

    return allTeams.map((team) => team.id === teamId ? addPartner(team, partnerId) : team);
};

export const removePartner = (team : Team , partnerId : number) : Team => {
    return { ...team, partners: team.partners.filter((number) => number !== partnerId)};
};
