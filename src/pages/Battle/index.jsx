import { Grid } from "@mui/material";
import { useState, useMemo } from "react";
import BattleContext from "./BattleContext";
import CharacterSection from "./CharacterSection";
import TextSection from "./TextSection";
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

    //TODO: Separate context values to lower components if appropriate
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
                    <CharacterSection enemyList={enemyList} mercenaryList={mercenaryList} />
                </Grid>
                <Grid item xs={3}>
                    <TextSection />
                </Grid>
            </Grid>
        </BattleContext.Provider>
    );
}

export default Battle;
