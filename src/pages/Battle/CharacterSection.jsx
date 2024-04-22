import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import CharacterGroup from "./CharacterGroup";

function CharacterSection({ enemyList, mercenaryList }) {
    return (
        <Grid container height="100%" width="100%">
            <Grid item xs={12} height="100%">
                <CharacterGroup characterList={enemyList} type="enemy" />
                <CharacterGroup characterList={mercenaryList} type="mercenary" />
            </Grid>
        </Grid>
    );
}

CharacterSection.propTypes = {
    enemyList: PropTypes.array,
    mercenaryList: PropTypes.array,
};

export default CharacterSection;
