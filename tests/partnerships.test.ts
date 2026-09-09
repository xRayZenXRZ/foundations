import { describe, expect, test } from "bun:test";
import { addPartner } from "../src/partnerships";
import type { Team } from "../src/types/Team";

describe("addPartner", () => {
  test("ajoute un partenaire sans modifier l'équipe d'origine", () => {
    const auroreTeam: Team = {
      id: 1,
      name: "Aurore",
      base: "Europe",
      title: "Explorer pour comprendre",
      memberCount: 120,
      partners: [],
    };

    const updatedAurore: Team = addPartner(auroreTeam, 2);

    expect(updatedAurore).not.toBe(auroreTeam);
    expect(auroreTeam.partners).toEqual([]);
    expect(updatedAurore.partners).toEqual([2]);
  });

  test("ne duplique pas un partenaire existant", () => {
    const auroreTeam: Team = {
      id: 1,
      name: "Aurore",
      base: "Europe",
      title: "Explorer pour comprendre",
      memberCount: 120,
      partners: [2],
    };

    expect(addPartner(auroreTeam, 2).partners).toEqual([2]);
  });
});
