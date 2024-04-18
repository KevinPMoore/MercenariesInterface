import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

function MovePlaceholder({ type }) {
    switch (type) {
        case "single":
            return (
                <Grid item xs={5} style={{ height: "50%" }}>
                    <Typography variant="body1" gutterBottom>
                        --
                    </Typography>
                </Grid>
            );
        case "double":
            return (
                <>
                    <Grid item xs={5} style={{ height: "50%" }}>
                        <Typography variant="body1" gutterBottom>
                            --
                        </Typography>
                    </Grid>
                    <Grid item xs={5} style={{ height: "50%" }}>
                        <Typography variant="body1" gutterBottom>
                            --
                        </Typography>
                    </Grid>
                </>
            );
        case "triple":
            return (
                <>
                    <Grid item xs={5} style={{ height: "50%" }}>
                        <Typography variant="body1" gutterBottom>
                            --
                        </Typography>
                    </Grid>
                    <Grid item xs={5} style={{ height: "50%" }}>
                        <Typography variant="body1" gutterBottom>
                            --
                        </Typography>
                    </Grid>
                    <Grid item xs={5} style={{ height: "50%" }}>
                        <Typography variant="body1" gutterBottom>
                            --
                        </Typography>
                    </Grid>
                </>
            );
        default:
            return null;
    }
}

MovePlaceholder.propTypes = {
    type: PropTypes.oneOf(["single", "double", "triple"]),
};

export default MovePlaceholder;
