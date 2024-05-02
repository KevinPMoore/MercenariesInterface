import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import TextDisplay from "./TextDisplay";

//TODO: Take in a list of messages and display them as new lines
function TextBox({ height, width }) {
    return (
        <div
            style={{
                border: "1px solid black",
                borderRadius: "4px",
                height: height ? `calc(${height} - 2px)` : "calc(100% - 2px)",
                width: width ? `calc(${width} - 2px)` : "calc(100% - 2px)",
            }}
        >
            <Grid container direction="column" style={{ padding: "12px" }}>
                <TextDisplay textList={["I am the first text", "and I am the second text..", "MWAHAHA I AM THE THIRD TEXT!"]} />
            </Grid>
        </div>
    );
}

TextBox.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TextBox;
