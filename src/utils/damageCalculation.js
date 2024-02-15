const damageCalculation = (attacker, defender, move) => {
    const atkStat = move?.damageType === "physical" ? attacker?.attack : attacker?.specialAttack;
    const defStat = move?.damageType === "physical" ? defender?.defense : defender?.specialDefense;
    const movePower = typeof move?.power === "number" ? move?.power : 0;

    const critCheck = Math.floor(Math.random() * 100) <= 4;
    if (critCheck) {
        console.log("Critical hit!");
    }

    //TODO: Modify damage calculation for crits
    //TODO: Check for special modifiers (eg. reflect/light screen)
    //TODO: Check for some minimum damage value?
    const damage = Math.round(movePower * (atkStat / defStat));
    //TODO: Fx call for secondary effects/non-damaging moves
    return damage;
};

export default damageCalculation;
