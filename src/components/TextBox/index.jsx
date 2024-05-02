import { useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import TextDisplay from "./TextDisplay";
import AdvanceTextButton from "./AdvanceTextButton";

function TextBox({ height, width }) {
    const [textCompleteFlag, setTextCompleteFlag] = useState(false);

    const textList1 = ["I am the first text", "and I am the second text..", "would you believe there is a third text?"];

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
                    <TextDisplay textList={textList1} setTextCompleteFlag={setTextCompleteFlag} />
                </Grid>
                <Grid item height="100%" width="10%">
                    <AdvanceTextButton displayButtonFlag={textCompleteFlag} onClickCallback={() => setTextCompleteFlag(false)} />
                </Grid>
            </Grid>
        </div>
    );
}

TextBox.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TextBox;
