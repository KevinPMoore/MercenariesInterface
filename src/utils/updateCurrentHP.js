const updateCurrentHP = (character, adjustment = 0) => {
    //TODO: See if there is a way to optimize this and not have to check !character?.currentHP
    if (!character?.currentHP) {
        Object.assign(character, { currentHP: character?.currentHPMax });
    } else {
        let newHP;
        if (character.currentHP - adjustment > 0) {
            newHP = character.currentHP - adjustment;
        } else {
            newHP = 0;
        }
        Object.assign(character, { currentHP: newHP });
    }
};

export default updateCurrentHP;
