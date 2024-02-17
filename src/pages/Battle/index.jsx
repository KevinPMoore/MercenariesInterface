import { Grid } from "@mui/material";
import Bench from "../../components/Bench";
import BattleText from "../../components/BattleText";
import MoveSelect from "../../components/MoveSelect";
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
            <Grid item xs={12} height="75%">
                <Bench mercenaryList={testData?.mercenaryList} />
            </Grid>
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
