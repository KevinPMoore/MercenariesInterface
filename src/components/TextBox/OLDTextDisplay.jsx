import { useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { ReactTyped } from "react-typed";

function TextDisplay({ textList, typeSpeed, setTextCompleteFlag }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Grid container height="100%" width="100%">
            {textList?.map((text, index) => {
                if (index <= currentIndex) {
                    return (
                        <Grid item xs={12} key={`grid-${text}`}>
                            <ReactTyped
                                key={text}
                                strings={[text]}
                                typeSpeed={typeSpeed || 40}
                                onComplete={() => {
                                    if (index === currentIndex && currentIndex < textList.length - 1) {
                                        setCurrentIndex(prevIndex => prevIndex + 1);
                                    }
                                    if (index === currentIndex && currentIndex === textList.length - 1) {
                                        setTextCompleteFlag(true);
                                    }
                                }}
                                showCursor={false}
                            />
                        </Grid>
                    );
                }
                return null;
            })}
        </Grid>
    );
}

TextDisplay.propTypes = {
    textList: PropTypes.arrayOf(PropTypes.string),
    typeSpeed: PropTypes.number,
    setTextCompleteFlag: PropTypes.func,
};

export default TextDisplay;
