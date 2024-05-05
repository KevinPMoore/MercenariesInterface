import { useState, useContext, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import TextDisplay from "./TextDisplay";
import AdvanceTextButton from "./AdvanceTextButton";
import BattleContext from "../../pages/Battle/BattleContext";
import testData from "../../testData.json";

function TextBox({ displayMode, setDisplayMode, height, width }) {
    const [textCompleteFlag, setTextCompleteFlag] = useState(false);

    const battleContextValue = useContext(BattleContext);

    const textToDisplay = useMemo(
        () => (displayMode === "dialog" ? testData?.encounter?.startText : [`What will ${battleContextValue?.selectedMercenary?.name} do?`]),
        [battleContextValue?.selectedMercenary?.name, displayMode]
    );

    const handleAdvanceText = useCallback(() => {
        if (displayMode === "dialog") {
            setDisplayMode("battle");
        }
        setTextCompleteFlag(false);
    }, [displayMode, setDisplayMode]);

    return (
        <div
            style={{
                border: "1px solid black",
                borderRadius: "4px",
                height: height ? `calc(${height} - 2px)` : "calc(100% - 2px)",
                width: width ? `calc(${width} - 2px)` : "calc(100% - 2px)",
            }}
        >
            <Grid container direction="column" style={{ height: "100%", padding: "12px" }}>
                <Grid item height="100%" width="90%">
                    <TextDisplay textList={textToDisplay} setTextCompleteFlag={setTextCompleteFlag} />
                </Grid>
                <Grid item height="100%" width="10%">
                    <AdvanceTextButton displayButtonFlag={textCompleteFlag} onClickCallback={handleAdvanceText} />
                </Grid>
            </Grid>
        </div>
    );
}

TextBox.propTypes = {
    displayMode: PropTypes.string,
    setDisplayMode: PropTypes.func,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TextBox;
