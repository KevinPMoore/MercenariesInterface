import { useState } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
//TODO: Rename BattleText and MoveSelect once they are more fleshed out
import BattleText from "../../components/TextBox";
import MoveSelect from "../../components/OptionSelect";

function TextSection() {
    const [displayMode, setDisplayMode] = useState("dialog");

    //TODO: Fix animations on mode transition

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
                    <motion.div animate={{ width: "70%" }} transition={{ duration: 2 }}>
                        <BattleText width="100%" />
                    </motion.div>
                    <MoveSelect width="30%" />
                </Grid>
            );
        default:
            return null;
    }
}

export default TextSection;
