const setMercenaryStatsForLevel = (mercenary) => {
    const growthModifier = mercenary.level / 50;

    const levelStats = {
        currentHPMax: Math.round((growthModifier * mercenary.baseHP) + mercenary.level + 10),
        currentAttack: Math.round((growthModifier * mercenary.baseAttack) + 5),
        currentDefense: Math.round((growthModifier * mercenary.baseDefense) + 5),
        currentSpecialAttack: Math.round((growthModifier * mercenary.baseSpecialAttack) + 5),
        currentSpecialDefense: Math.round((growthModifier * mercenary.baseSpecialDefense) + 5),
        currentSpeed: Math.round((growthModifier * mercenary.baseSpeed) + 5),
    };

    Object.assign(mercenary, levelStats);
};

export default setMercenaryStatsForLevel;
