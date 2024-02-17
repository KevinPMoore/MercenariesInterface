import { useState } from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import EnemyCard from "./EnemyCard";

function Enemies({ enemyList }) {
    //TODO: Determine if this can be combined with other battle character collections for DRY purposes
    const [selectedIndex, setSelectedIndex] = useState(null);

    let cardWidth;

    switch (enemyList.length) {
        case 1:
            cardWidth = 8;
            break;
        case 2:
            cardWidth = 5;
            break;
        case 3:
            cardWidth = 3;
            break;
        default:
            cardWidth = 1;
    }

    const team = enemyList.map(enemy => {
        return (
            <Grid item xs={cardWidth} key={enemy?.id} height="90%">
                <EnemyCard
                    enemy={enemy}
                    index={enemyList.indexOf(enemy)}
                    selected={selectedIndex === enemyList.indexOf(enemy)}
                    setSelectedIndex={setSelectedIndex}
                />
            </Grid>
        );
    });

    return (
        <Grid container height="100%" justifyContent="space-evenly" alignItems="flex-end">
            {team}
        </Grid>
    );
}

Enemies.propTypes = {
    enemyList: PropTypes.array,
};

export default Enemies;
