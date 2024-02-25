import PropTypes from "prop-types";
import { Grid } from "@mui/material";

function TurnIndicator({ turnList }) {
    const iconList = turnList.map(turn => {
        return (
            <Grid item xs={12} key={turn?.id} height="20%">
                <div style={{ border: "1px solid green", height: "100%" }} className={turn.name} />
            </Grid>
        );
    });

    //TODO: Finish content and fix layout
    return iconList;
}

TurnIndicator.propTypes = {
    turnList: PropTypes.arrayOf(PropTypes.object)
};

export default TurnIndicator;
