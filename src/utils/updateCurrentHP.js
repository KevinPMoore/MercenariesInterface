const updateCurrentHP = (mercenary, adjustment = 0) => {
    //TODO: See if there is a way to optimize this and not have to check !mercenary?.currentHP
    if (!mercenary?.currentHP) {
        Object.assign(mercenary, { currentHP: mercenary?.currentHPMax });
    } else {
        const newHP = mercenary.currentHP + adjustment;
        Object.assign(mercenary, { currentHP: newHP });
    }
};

export default updateCurrentHP;
