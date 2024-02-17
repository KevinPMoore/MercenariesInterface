import { Card, Typography } from "@mui/material";
import PropTypes from "prop-types";

function MercenaryCard({ index, mercenary, selected, setSelectedIndex }) {
    const handleCardClick = () => {
        if (selected) {
            setSelectedIndex(null);
        } else {
            setSelectedIndex(index);
        }
    };

    const hitPointDisplay = `HP: ${mercenary?.currentHP} / ${mercenary?.currentHPMax}`;

    return (
        <div style={{ border: selected ? "2px solid gold" : null, height: "100%" }}>
            <Card elevation={selected ? 8 : 1} onClick={handleCardClick} style={{ height: "100%" }}>
                <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Typography variant="body1" gutterBottom>
                        An image of
                        {' '}
                        {mercenary?.name}
                        {' '}
                        will go here
                    </Typography>
                    <Typography variant="body1" fontWeight="bold" gutterBottom>
                        {hitPointDisplay}
                    </Typography>
                </div>
            </Card>
        </div>
    );
}

MercenaryCard.propTypes = {
    index: PropTypes.number,
    mercenary: PropTypes.object,
    selected: PropTypes.bool,
    setSelectedIndex: PropTypes.func,
};

export default MercenaryCard;
