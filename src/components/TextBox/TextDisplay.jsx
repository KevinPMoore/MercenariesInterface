import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

//TODO: Refactor to work with an array of strings
function TextDisplay({ text }) {
    return (
        <Grid container height="100%" width="100%">
            <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                    {text}
                </Typography>
            </Grid>
        </Grid>
    );
}

TextDisplay.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string),
};

export default TextDisplay;
