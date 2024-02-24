import PropTypes from "prop-types";

function OptionSelect({ height, width }) {
    //TODO: Take in a list of moves and display those
    return (
        <div style={{ border: "1px solid black",
            borderRadius: "4px",
            height: height ? `calc(${height} - 2px)` : "calc(100% - 2px)",
            width: width ? `calc(${width} - 2px)` : "calc(100% - 2px)" }}
        >
            <p>Option will go here</p>
        </div>
    );
}

OptionSelect.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default OptionSelect;
