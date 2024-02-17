import { Card, Typography } from "@mui/material";
import PropTypes from "prop-types";

function EnemyCard({ index, enemy, selected, setSelectedIndex }) {
    //TODO: Determine if this can be combined with other character card types for DRY purposes
    const handleCardClick = () => {
        if (selected) {
            setSelectedIndex(null);
        } else {
            setSelectedIndex(index);
        }
    };

    //TODO: Make the HP look like some sort of bar
    const hitPointDisplay = `HP: ${enemy?.currentHP} / ${enemy?.maxHP}`;

    return (
        <div style={{ border: selected ? "2px solid red" : null, height: "100%" }}>
            <Card elevation={selected ? 8 : 1} onClick={handleCardClick} style={{ height: "100%" }}>
                <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Typography variant="body1" gutterBottom>
                        An image of
                        {' '}
                        {enemy?.name}
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

EnemyCard.propTypes = {
    index: PropTypes.number,
    enemy: PropTypes.object,
    selected: PropTypes.bool,
    setSelectedIndex: PropTypes.func,
};

export default EnemyCard;
