const setStatsForLevel = (mercenary) => {
    const growthModifier = mercenary.level / 50;

    const levelHP = Math.round((growthModifier * mercenary.hp) + mercenary.level + 10);
    const levelAtk = Math.round((growthModifier * mercenary.attack) + 5);
    const levelDef = Math.round((growthModifier * mercenary.defense) + 5);
    const levelSpAtk = Math.round((growthModifier * mercenary.specialAttack) + 5);
    const levelSpDef = Math.round((growthModifier * mercenary.specialDefense) + 5);
    const levelSpeed = Math.round((growthModifier * mercenary.speed) + 5);
    console.log("levelHP is", levelHP);
    console.log("levelAtk is", levelAtk);
    console.log("levelDef is", levelDef);
    console.log("levelSpAtk is", levelSpAtk);
    console.log("levelSpDef is", levelSpDef);
    console.log("levelSpeed is", levelSpeed);

    //TODO: Apply these stats to the mercenary
};

export default setStatsForLevel;
