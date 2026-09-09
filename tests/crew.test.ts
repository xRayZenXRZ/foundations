import { describe, expect, test } from "bun:test";
import { getDisplayName } from "../src/crew";
import type { CrewMember } from "../src/types/CrewMember";

describe("getDisplayName", () => {
    test("affiche le rôle lorsqu'il est défini", () => {
        const member: CrewMember = {
            id: 2,
            name: "Haskell Curry",
            teamId: 1,
            status: "disponible",
            role: "Commandant de mission",
            skills: ["communication"],
        };

        expect(getDisplayName(member)).toBe(
            "Haskell Curry : Commandant de mission",
        );
    });

    test("utilise une valeur par défaut lorsque le rôle est absent", () => {
        const member: CrewMember = {
            id: 1,
            name: "Alonzo Church",
            teamId: 1,
            status: "disponible",
            skills: ["navigation", "ingénierie"],
        };

        expect(getDisplayName(member)).toBe("Alonzo Church : Sans rôle");
    });
});