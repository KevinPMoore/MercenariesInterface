import { useState } from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import MercenaryCard from "./MercenaryCard";

function Bench({ mercenaryList }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const cardWidth = 12 / mercenaryList.length;
    const team = mercenaryList.map(mercenary => {
        return (
            <Grid item xs={cardWidth} key={mercenary?.id}>
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
        <Grid container height="100%" justifyContent="space-evenly">
            {team}
        </Grid>
    );
}

Bench.propTypes = {
    mercenaryList: PropTypes.array,
};

export default Bench;
