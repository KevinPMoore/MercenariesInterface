import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import TurnIndicator from "./TurnIndicator";

function TurnTracker({ combatants }) {
    const [turnList, setTurnList] = useState([]);

    useEffect(() => {
        const sortedCombatants = combatants.sort((a, b) => b.currentSpeed - a.currentSpeed);

        setTurnList(sortedCombatants);
    }, [combatants]);

    //TODO: Update turn list somehow
    //TODO: Set a cap for displayed indicators at 6
    return (
        <Grid container spacing={2} direction="column" height="100%">
            <TurnIndicator turnList={turnList} />
        </Grid>
    );
}

TurnTracker.propTypes = {
    combatants: PropTypes.arrayOf(PropTypes.object)
};

export default TurnTracker;
