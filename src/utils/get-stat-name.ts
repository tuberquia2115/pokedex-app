export const getStatName = (statName: string) => {
  const names: { [key: string]: string } = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    speed: "SPD",
  };

  return names[statName];
};
