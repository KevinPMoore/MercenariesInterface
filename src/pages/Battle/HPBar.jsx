import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

function HPBar({ currentHP, maxHP }) {
    const hitPointDisplay = `HP: ${currentHP} / ${maxHP}`;
    const hitPointPercentage = `${(currentHP / maxHP) * 100}%`;

    return (
        <Grid container justifyContent="center" height="80%">
            <Grid item xs={10} style={{ position: "relative", border: "1px solid black", borderRadius: "2px" }}>
                <div style={{ backgroundColor: "gray", height: "100%" }}>
                    <div style={{ position: "relative", zIndex: 1, paddingTop: "10px", height: "100%" }}>
                        <Typography variant="body1" fontWeight="bold" gutterBottom>
                            {hitPointDisplay}
                        </Typography>
                    </div>
                    <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "green", height: "100%", width: hitPointPercentage }} />
                </div>
            </Grid>
        </Grid>
    );
}

HPBar.propTypes = {
    currentHP: PropTypes.number,
    maxHP: PropTypes.number,
};

export default HPBar;
