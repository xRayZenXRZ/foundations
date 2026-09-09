import { isAvailable, hasSkill, getDisplayName } from "../crew";
import { teams } from "../data/teams";
import type { Team } from "./Team";
import type { CrewMember } from "./CrewMember";

export type CrewCard = {
    id : number,
    label : string,
    teamName : string,
    isAvailable : boolean
}
