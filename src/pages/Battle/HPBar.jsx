import { Typography } from "@mui/material";
import PropTypes from "prop-types";

function HPBar({ currentHP, maxHP }) {
    const hitPointDisplay = `HP: ${currentHP} / ${maxHP}`;

    return (
        <div style={{ border: "1px solid black", height: "30px", width: "50%" }}>
            <Typography variant="body1" fontWeight="bold" gutterBottom>
                {hitPointDisplay}
            </Typography>
        </div>
    );
}

HPBar.propTypes = {
    currentHP: PropTypes.number,
    maxHP: PropTypes.number,
};

export default HPBar;
