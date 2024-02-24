import { Grid } from "@mui/material";
import CharacterGroup from "./CharacterGroup";
//TODO: Rename BattleText and MoveSelect once they are more fleshed out
import BattleText from "../../components/TextBox";
import MoveSelect from "../../components/OptionSelect";
import testData from "../../testData.json";
//import TurnTracker from "../../components/TurnTracker";

//TODO: Fix layout to move turn tracker to side
function Battle() {
    return (
        <Grid container direction="column" height="100%" width="100%">
            <Grid item xs={4}>
                <CharacterGroup characterList={testData?.enemyList} type="enemy" />
            </Grid>
            <Grid item xs={4}>
                <CharacterGroup characterList={testData?.mercenaryList} type="mercenary" />
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
                <Grid container height="100%" width="100%">
                    <BattleText width="70%" />
                    <MoveSelect width="30%" />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Battle;
