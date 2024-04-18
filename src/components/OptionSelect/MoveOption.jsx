import { Button, Grid } from "@mui/material";
import PropTypes from "prop-types";

function MoveOption({ move }) {
    //TODO: Improve move styling
    return (
        <Grid item xs={5} key={`move${move?.id}`} style={{ height: "50%" }}>
            <Button variant="outlined">{move?.name}</Button>
        </Grid>
    );
}

MoveOption.propTypes = {
    move: PropTypes.object,
};

export default MoveOption;
