const updateCurrentHP = (mercenary, adjustment = 0) => {
    //TODO: See if there is a way to optimize this and not have to check !mercenary?.currentHP
    if (!mercenary?.currentHP) {
        Object.assign(mercenary, { currentHP: mercenary?.currentHPMax });
    } else {
        let newHP;
        if (mercenary.currentHP - adjustment > 0) {
            newHP = mercenary.currentHP - adjustment;
        } else {
            newHP = 0;
        }
        Object.assign(mercenary, { currentHP: newHP });
    }
};

export default updateCurrentHP;
