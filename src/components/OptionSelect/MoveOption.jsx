import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import PropTypes from "prop-types";
import BattleContext from "../../pages/Battle/BattleContext";
import handleMove from "../../utils/handleMove";

function MoveOption({ move }) {
    const battleContextValue = useContext(BattleContext);

    //TODO: Improve move styling
    return (
        <Grid item xs={5} key={`move${move?.id}`} style={{ height: "50%" }}>
            <Button
                variant="contained"
                disabled={!battleContextValue?.selecteEnemy}
                onClick={() => handleMove(battleContextValue?.selectedMercenary, battleContextValue?.selecteEnemy, move)}
            >
                {move?.name}
            </Button>
        </Grid>
    );
}

MoveOption.propTypes = {
    move: PropTypes.object,
};

export default MoveOption;
