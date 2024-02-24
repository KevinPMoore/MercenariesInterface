import PropTypes from "prop-types";

function TextBox({ height, width }) {
    //TODO: Take in a list of messages and display them as new lines
    return (
        <div style={{ border: "1px solid black",
            borderRadius: "4px",
            height: height ? `calc(${height} - 2px)` : "calc(100% - 2px)",
            width: width ? `calc(${width} - 2px)` : "calc(100% - 2px)" }}
        >
            <p>Text will go here </p>
        </div>
    );
}

TextBox.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TextBox;
