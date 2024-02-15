import { Card } from "@mui/material";
import PropTypes from "prop-types";

function MercenaryCard({ index, mercenary, selected, setSelectedIndex }) {
    const handleCardClick = () => {
        setSelectedIndex(index);
    };

    const hitPoints = `HP: ${mercenary?.hp} / ${mercenary?.hp}`;

    return (
        <Card elevation={selected ? 8 : 1} onClick={handleCardClick}>
            <div style={{ border: selected ? "2px solid gold" : null }}>
                <p>
                    An image of
                    {' '}
                    {mercenary?.name}
                    {' '}
                    will go here
                </p>
                {hitPoints}
            </div>
        </Card>
    );
}

MercenaryCard.propTypes = {
    index: PropTypes.number,
    mercenary: PropTypes.object,
    selected: PropTypes.bool,
    setSelectedIndex: PropTypes.func,
};

export default MercenaryCard;
