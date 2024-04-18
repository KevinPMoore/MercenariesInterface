import { useContext } from "react";
import PropTypes from "prop-types";
import BattleContext from "../../pages/Battle/BattleContext";

function OptionSelect({ height, width }) {
    const contextValue = useContext(BattleContext);

    console.log(contextValue);
    //TODO: Take in a list of moves and display those
    return (
        <div
            style={{
                border: "1px solid black",
                borderRadius: "4px",
                height: height ? `calc(${height} - 2px)` : "calc(100% - 2px)",
                width: width ? `calc(${width} - 2px)` : "calc(100% - 2px)",
            }}
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
