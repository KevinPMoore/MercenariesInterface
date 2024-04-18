import { Grid } from "@mui/material";
import { useState, useMemo } from "react";
import BattleContext from "./BattleContext";
import CharacterGroup from "./CharacterGroup";
//TODO: Rename BattleText and MoveSelect once they are more fleshed out
import BattleText from "../../components/TextBox";
import MoveSelect from "../../components/OptionSelect";
import testData from "../../testData.json";

function Battle() {
    const [selectedMercenary, setSelectedMercenary] = useState(testData?.mercenaryList[0]);
    const [selectedEnemy, setSelectedEnemy] = useState(null);
    const enemyList = testData?.enemyList;
    const mercenaryList = testData?.mercenaryList;
    const combatants = useMemo(() => {
        const result = [];
        enemyList.forEach(enemy => result.push(enemy));
        mercenaryList.forEach(mercenary => result.push(mercenary));

        return result;
    }, [enemyList, mercenaryList]);

    const battleContextProviderValue = useMemo(() => {
        return {
            combatants,
            selectedMercenary,
            setSelectedMercenary,
            selectedEnemy,
            setSelectedEnemy,
        };
    }, [combatants, selectedEnemy, selectedMercenary]);

    return (
        <BattleContext.Provider value={battleContextProviderValue}>
            <Grid container direction="column" height="100%" width="100%">
                <Grid item xs={9}>
                    <Grid container height="100%" width="100%">
                        <Grid item xs={12} height="100%">
                            <CharacterGroup characterList={enemyList} type="enemy" />
                            <CharacterGroup characterList={mercenaryList} type="mercenary" />
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
        </BattleContext.Provider>
    );
}

export default Battle;
