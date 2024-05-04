import { useState } from "react";
import { Grid } from "@mui/material";
//TODO: Rename BattleText and MoveSelect once they are more fleshed out
import BattleText from "../../components/TextBox";
import MoveSelect from "../../components/OptionSelect";

function TextSection() {
    const [displayMode, setDisplayMode] = useState("dialog");

    switch (displayMode) {
        case "dialog":
            return (
                <Grid container height="100%" width="100%">
                    <BattleText displayMode={displayMode} setDisplayMode={setDisplayMode} width="100%" />
                </Grid>
            );
        case "battle":
            return (
                <Grid container height="100%" width="100%">
                    <BattleText width="70%" />
                    <MoveSelect width="30%" />
                </Grid>
            );
        default:
            return null;
    }
}

export default TextSection;
