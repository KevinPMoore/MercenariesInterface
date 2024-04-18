import { Grid } from "@mui/material";
import { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import MoveOption from "./MoveOption";
import BattleContext from "../../pages/Battle/BattleContext";

function OptionSelect({ height, width }) {
    const battleContextValue = useContext(BattleContext);

    const moveButtons = useMemo(() => {
        return battleContextValue?.selectedMercenary?.moveList?.map(move => {
            return <MoveOption move={move} key={move?.id} />;
        });
    }, [battleContextValue?.selectedMercenary?.moveList]);

    return (
        <div
            style={{
                border: "1px solid black",
                borderRadius: "4px",
                height: height ? `calc(${height} - 2px)` : "calc(100% - 2px)",
                width: width ? `calc(${width} - 2px)` : "calc(100% - 2px)",
            }}
        >
            <Grid container justifyContent="space-evenly">
                {moveButtons}
            </Grid>
        </div>
    );
}

OptionSelect.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default OptionSelect;
