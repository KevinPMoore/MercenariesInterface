import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { ReactTyped } from "react-typed";

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
                <Grid item>
                    <ReactTyped strings={["A wild target dummy appeared!"]} onComplete={() => console.log("i have stopped")} typeSpeed={40} showCursor={false} />
                </Grid>
                <Grid item>
                    <ReactTyped strings={[""]} typeSpeed={40} showCursor={false} />
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
