import type { BaseLocation } from "./BaseLocation";

export type Team = {
    /**identifiant unique*/
    id : number 
    /**nom de l'équipe*/
    name : string 
    /**implantation principale*/
    base : BaseLocation
    /**slogan*/
    title : string
    /**nombre de membres*/
    memberCount : number 

    partners : Array<number>
}
