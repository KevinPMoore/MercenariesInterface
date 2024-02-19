import { useState } from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import setStatsForLevel from "../../utils/setMercenaryStatsForLevel";
import updateCurrentHP from "../../utils/updateCurrentHP";

function CharacterGroup({ characterList, type }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

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

    const team = characterList.map(character => {
        return (
            <Grid item xs={cardWidth} key={character?.id} height="90%">
                <CharacterCard
                    character={character}
                    index={characterList.indexOf(character)}
                    selected={selectedIndex === characterList.indexOf(character)}
                    setSelectedIndex={setSelectedIndex}
                    type={type}
                />
            </Grid>
        );
    });

    return (
        <Grid container height="100%" justifyContent="space-evenly" alignItems="flex-end">
            {team}
        </Grid>
    );
}

CharacterGroup.propTypes = {
    characterList: PropTypes.array,
    type: PropTypes.oneOf("enemy", "mercenary"),
};

export default CharacterGroup;
