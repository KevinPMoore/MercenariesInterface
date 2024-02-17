import checkCriticalHit from "./checkCriticalHit";

const calculateDamage = (attacker, defender, move) => {
    const atkStat = move?.damageType === "physical" ? attacker?.attack : attacker?.specialAttack;
    const defStat = move?.damageType === "physical" ? defender?.defense : defender?.specialDefense;
    const movePower = typeof move?.power === "number" ? move?.power : 0;

    const critModifier = checkCriticalHit(attacker, move);

    const damageRoll = Math.floor(Math.random() * (100 - 85)) + 86;

    //TODO: Check for special modifiers (eg. reflect/light screen)
    //TODO: Check for some minimum damage value?
    const damage = Math.round(((((2 * attacker.level) / 5 + 2) * movePower * (atkStat / defStat)) / 50 + 2) * critModifier * damageRoll);
    //TODO: Fx call for secondary effects/non-damaging moves
    return damage;
};

export default calculateDamage;
