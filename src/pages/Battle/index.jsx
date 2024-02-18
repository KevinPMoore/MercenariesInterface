import { Grid } from "@mui/material";
import Enemies from "./Enemies";
import Party from "./Party";
//TODO: Rename BattleText and MoveSelect once they are more fleshed out
import BattleText from "../../components/TextBox";
import MoveSelect from "../../components/OptionSelect";
import testData from "../../testData.json";
import setStatsForLevel from "../../utils/setStatsForLevel";
import updateCurrentHP from "../../utils/updateCurrentHP";

function Battle() {
    testData?.mercenaryList.forEach(mecenary => {
        setStatsForLevel(mecenary);
        updateCurrentHP(mecenary);
    });

    return (
        <Grid container height="100%">
            <Grid item xs={12} height="35%">
                <Enemies enemyList={testData?.enemyList} />
            </Grid>
            <Grid item xs={12} height="35%">
                <Party mercenaryList={testData?.mercenaryList} />
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
