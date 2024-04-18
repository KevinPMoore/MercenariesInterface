import { Grid } from "@mui/material";
import { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import MoveOption from "./MoveOption";
import MovePlaceholder from "./MovePlaceholder";
import BattleContext from "../../pages/Battle/BattleContext";

function OptionSelect({ height, width }) {
    const battleContextValue = useContext(BattleContext);

    const moveButtons = useMemo(() => {
        return battleContextValue?.selectedMercenary?.moveList?.map(move => {
            return <MoveOption move={move} key={`moveOption${move?.id}`} />;
        });
    }, [battleContextValue?.selectedMercenary?.moveList]);

    let placeholderType;

    switch (battleContextValue?.selectedMercenary?.moveList?.length) {
        case 3:
            placeholderType = "single";
            break;
        case 2:
            placeholderType = "double";
            break;
        case 1:
            placeholderType = "triple";
            break;
        default:
            placeholderType = null;
    }

    return (
        <div
            style={{
                border: "1px solid black",
                borderRadius: "4px",
                height: height ? `calc(${height} - 2px)` : "calc(100% - 2px)",
                width: width ? `calc(${width} - 2px)` : "calc(100% - 2px)",
            }}
        >
            <Grid container justifyContent="space-evenly" style={{ height: "100%", paddingTop: "12px", paddingBottom: "12px" }}>
                {moveButtons}
                {placeholderType && <MovePlaceholder type={placeholderType} />}
            </Grid>
        </div>
    );
}

OptionSelect.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default OptionSelect;
