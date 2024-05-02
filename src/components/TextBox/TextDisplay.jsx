import { useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { ReactTyped } from "react-typed";

function TextDisplay({ textList }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            {textList.map((text, index) => {
                if (index <= currentIndex) {
                    return (
                        <Grid item xs={12} key={`grid-${text}`}>
                            <ReactTyped
                                key={text}
                                strings={[text]}
                                typeSpeed={40}
                                onComplete={() => {
                                    if (index === currentIndex && currentIndex < textList.length - 1) {
                                        setCurrentIndex(prevIndex => prevIndex + 1);
                                    }
                                }}
                                showCursor={false}
                            />
                        </Grid>
                    );
                }
                return null;
            })}
        </>
    );
}

TextDisplay.propTypes = {
    textList: PropTypes.arrayOf(PropTypes.string),
};

export default TextDisplay;
