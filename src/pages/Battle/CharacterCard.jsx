import { Card, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import HPBar from "./HPBar";

function CharacterCard({ character, selectedFlag, type }) {
    const characterCardBorderColor = type === "mercenary" ? "gold" : "red";

    return (
        <div style={{ border: selectedFlag ? `2px solid ${characterCardBorderColor}` : "1px solid gray", borderRadius: "4px", height: "100%" }}>
            <Card elevation={selectedFlag ? 8 : 1} style={{ height: "100%" }}>
                <Grid container justifyContent="space-between" height="100%">
                    <Grid item xs={12} height="70%">
                        <Typography variant="body1" gutterBottom>
                            An image of
                            {` ${character?.name} `}
                            will go here
                        </Typography>
                    </Grid>
                    <Grid item xs={12} height="30%">
                        <HPBar currentHP={character?.currentHP} maxHP={character?.currentHPMax} />
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

CharacterCard.propTypes = {
    character: PropTypes.object,
    selectedFlag: PropTypes.bool,
    type: PropTypes.oneOf(["enemy", "mercenary"]),
};

export default CharacterCard;
