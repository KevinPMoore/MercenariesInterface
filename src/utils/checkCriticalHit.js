const checkCriticalHit = () => {
    const critChance = 5;
    //TODO: Accept move as an argument, check attack for crit chance modifiers and apply if appropriate
    //TODO: Accept attacker as an argurment, check for any crit modifiers

    const critCheck = Math.floor(Math.random() * 100) + 1 <= critChance;
    if (critCheck) {
        //TODO: Remove console statement after testing
        console.log("Critical hit!");
        return 2;
    }

    return 1;
};

export default checkCriticalHit;
