import { Grid } from "@mui/material";
import { useMemo } from "react";
import CharacterGroup from "./CharacterGroup";
//TODO: Rename BattleText and MoveSelect once they are more fleshed out
import BattleText from "../../components/TextBox";
import MoveSelect from "../../components/OptionSelect";
import testData from "../../testData.json";
import TurnTracker from "../../components/TurnTracker";

function Battle() {
    const enemyList = testData?.enemyList;
    const mercenaryList = testData?.mercenaryList;
    const combatants = useMemo(() => {
        const result = [];
        enemyList.forEach(enemy => result.push(enemy));
        mercenaryList.forEach(mercenary => result.push(mercenary));

        return result;
    }, [enemyList, mercenaryList]);

    return (
        <Grid container direction="column" height="100%" width="100%">
            <Grid item xs={9}>
                <Grid container height="100%" width="100%" >
                    <Grid item xs={10} height="100%">
                        <CharacterGroup characterList={enemyList} type="enemy" />
                        <CharacterGroup characterList={mercenaryList} type="mercenary" />
                    </Grid>
                    <Grid item xs={2}>
                        <TurnTracker combatants={combatants} />
                    </Grid>
                </Grid>
            </Grid>
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
