import { Card, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import HPBar from "./HPBar";

function MercenaryCard({ index, mercenary, selected, setSelectedIndex }) {
    const handleCardClick = () => {
        if (selected) {
            setSelectedIndex(null);
        } else {
            setSelectedIndex(index);
        }
    };

    return (
        <div style={{ border: selected ? "2px solid gold" : "1px solid gray", borderRadius: "4px", height: "100%" }}>
            <Card elevation={selected ? 8 : 1} onClick={handleCardClick} style={{ height: "100%" }}>
                <Grid container justifyContent="space-between" height="100%">
                    <Grid item xs={12} height="70%">
                        <Typography variant="body1" gutterBottom>
                            An image of
                            {' '}
                            {mercenary?.name}
                            {' '}
                            will go here
                        </Typography>
                    </Grid>
                    <Grid item xs={12} height="30%">
                        <HPBar currentHP={mercenary?.currentHP} maxHP={mercenary?.currentHPMax} />
                    </Grid>

                </Grid>
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
