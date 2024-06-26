import calculateDamage from "./calculateDamage";
import updateCurrentHP from "./updateCurrentHP";

function handleMove(attacker, defender, move) {
    console.log(attacker);
    console.log(defender);
    console.log(move);

    if (move?.damageType === "status") {
        console.log("not a damaging move");
        //TODO: Return result of status application
    }

    const damage = calculateDamage(attacker, defender, move);

    updateCurrentHP(defender, damage);
}

export default handleMove;
