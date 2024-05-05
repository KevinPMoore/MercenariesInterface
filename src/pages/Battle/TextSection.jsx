import { useState } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import TextBox from "../../components/TextBox";
import OptionSelect from "../../components/OptionSelect";

function TextSection() {
    const [displayMode, setDisplayMode] = useState("dialog");

    //TODO: Fix animations on mode transition causing scroll bar
    const battleTextAnimate = {
        width: displayMode === "dialog" ? "100%" : "70%",
    };

    const moveSelectAnimate = {
        width: displayMode === "dialog" ? "0%" : "30%",
    };

    return (
        <Grid container height="100%" width="100%">
            <motion.div animate={battleTextAnimate} transition={{ duration: 1 }} initial={false}>
                <TextBox displayMode={displayMode} setDisplayMode={setDisplayMode} width="100%" />
            </motion.div>
            <motion.div animate={moveSelectAnimate} transition={{ duration: 1 }} initial={false}>
                {displayMode === "battle" && <OptionSelect width="100%" />}
            </motion.div>
        </Grid>
    );
}

export default TextSection;
