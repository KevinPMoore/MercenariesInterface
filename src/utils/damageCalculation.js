const damageCalculation = (attacker, defender, move) => {
    if (move?.damageType === "status") {
        console.log("not a damaging move");
    }
    const atkStat = move?.damageType === "physical" ? attacker?.attack : attacker?.specialAttack;
    const defStat = move?.damageType === "physical" ? defender?.defense : defender?.specialDefense;
    const movePower = typeof move?.power === "number" ? move?.power : 0;
    //TODO: Check for crit
    //TODO: Check for special modifiers
    //TODO: Fx call for secondary effects/non-damaging moves
    const damage = Math.round(movePower * (atkStat / defStat));
    return damage;
};

export default damageCalculation;
