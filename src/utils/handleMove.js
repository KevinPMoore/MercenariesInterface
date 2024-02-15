import damageCalculation from "./damageCalculation";

const handleMove = (attacker, defender, move) => {
    if (move?.damageType === "status") {
        console.log("not a damaging move");
        //TODO: Return result of status application
    }

    return damageCalculation(attacker, defender, move);
};

export default handleMove;
