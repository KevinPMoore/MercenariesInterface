import { Grid } from "@mui/material";
import CharacterGroup from "./CharacterGroup";
//TODO: Rename BattleText and MoveSelect once they are more fleshed out
import BattleText from "../../components/TextBox";
import MoveSelect from "../../components/OptionSelect";
import testData from "../../testData.json";

function Battle() {
    return (
        <Grid container height="100%">
            <Grid item xs={12} height="35%">
                <CharacterGroup characterList={testData?.enemyList} type="enemy" />
            </Grid>
            <Grid item xs={12} height="35%">
                <CharacterGroup characterList={testData?.mercenaryList} type="mercenary" />
            </Grid>
            <Grid item xs={12} height="5%" />
            <Grid item xs={8} height="25%">
                <BattleText />
            </Grid>
            <Grid item xs={4} height="25%">
                <MoveSelect />
            </Grid>
        </Grid>
    );
}

export default Battle;
