import { Button, Grid } from "@mui/material";
import PropTypes from "prop-types";

function MoveOption({ move }) {
    console.log(move);

    //TODO: Improve move styling
    return (
        <Grid item xs={5} key={move?.id}>
            <Button variant="outlined">{move?.name}</Button>
        </Grid>
    );
}

MoveOption.propTypes = {
    move: PropTypes.object,
};

export default MoveOption;
