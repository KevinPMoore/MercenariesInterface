import { Grid } from "@mui/material";
import { PropTypes } from "prop-types";
import TextDisplay from "./TextDisplay";
import AdvanceTextButton from "./AdvanceTextButton";
import useTypewriter from "./useTypewriter";

//TODO: Fix the onClickCallback on AdvanceTextButton
function TextBox({ displayMode, setDisplayMode, height, width }) {
    const { displayText, typewriterCompleteFlag } = useTypewriter("abcdefghijklmnopqrstuvwxyz", 50);

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
                    <TextDisplay text={displayText} />
                </Grid>
                <Grid item height="100%" width="10%">
                    {/* // could put the status check logic for the callback in the button itself. Otherwise maybe don't use a custom component? That would let you put the animate
                    presence around a vanilla button at this level.
                    // You could even have separate buttons for fast forwarding and moving to the next text to really make things
                    decoupled. */}
                    {/* <AdvanceTextButton displayButtonFlag={currentIndex < length || status === "end"} onClickCallback={() => (status === "typing" ? fastForward : typeNext)} /> */}
                    <AdvanceTextButton
                        displayButtonFlag={typewriterCompleteFlag}
                        onClickCallback={() => {
                            if (displayMode === "dialog") {
                                setDisplayMode("battle");
                            }
                        }}
                    />
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
