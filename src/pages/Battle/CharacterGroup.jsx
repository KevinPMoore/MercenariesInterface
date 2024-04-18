import { Grid } from "@mui/material";
import { useContext, useCallback } from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import setStatsForLevel from "../../utils/setMercenaryStatsForLevel";
import updateCurrentHP from "../../utils/updateCurrentHP";
import BattleContext from "./BattleContext";

function CharacterGroup({ characterList, type }) {
    const battleContextValue = useContext(BattleContext);

    const setSelectedFlag = useCallback(
        character => {
            return type === "mercenary" ? battleContextValue?.selectedMercenary === character : battleContextValue?.selectedEnemy === character;
        },
        [battleContextValue?.selectedEnemy, battleContextValue?.selectedMercenary, type]
    );

    let cardWidth;

    switch (characterList.length) {
        case 1:
            cardWidth = 8;
            break;
        case 2:
            cardWidth = 5;
            break;
        case 3:
            cardWidth = 3;
            break;
        default:
            cardWidth = 1;
    }

    characterList.forEach(character => {
        if (type === "mercenary") {
            setStatsForLevel(character);
        }
        updateCurrentHP(character);
    });

    const teamList = characterList.map(character => {
        return (
            <Grid item xs={cardWidth} key={character?.id} height="94%">
                <CharacterCard character={character} selectedFlag={setSelectedFlag(character)} type={type} />
            </Grid>
        );
    });

    return (
        <Grid container height="50%" justifyContent="space-evenly">
            {teamList}
        </Grid>
    );
}

CharacterGroup.propTypes = {
    characterList: PropTypes.array,
    type: PropTypes.oneOf(["enemy", "mercenary"]),
};

export default CharacterGroup;
