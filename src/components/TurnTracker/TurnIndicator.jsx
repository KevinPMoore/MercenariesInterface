import PropTypes from "prop-types";
import { Grid } from "@mui/material";

function TurnIndicator({ turnList }) {
    const iconList = turnList.map(turn => {
        return (
            <Grid item xs={2} key={turn?.id} width="100%">
                <div style={{ border: "1px solid green", height: "100%" }} className={turn.name} />
            </Grid>
        );
    });

    return iconList;
}

TurnIndicator.propTypes = {
    turnList: PropTypes.arrayOf(PropTypes.object)
};

export default TurnIndicator;
