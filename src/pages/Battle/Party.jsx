import { useState } from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import MercenaryCard from "./MercenaryCard";

function Party({ mercenaryList }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    let cardWidth;

    switch (mercenaryList.length) {
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

    const team = mercenaryList.map(mercenary => {
        return (
            <Grid item xs={cardWidth} key={mercenary?.id} height="90%">
                <MercenaryCard
                    mercenary={mercenary}
                    index={mercenaryList.indexOf(mercenary)}
                    selected={selectedIndex === mercenaryList.indexOf(mercenary)}
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

Party.propTypes = {
    mercenaryList: PropTypes.array,
};

export default Party;
