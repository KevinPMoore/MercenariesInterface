import PropTypes from "prop-types";
import { Grid, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

function AdvanceTextButton({ displayButtonFlag, onClickCallback }) {
    return (
        <Grid container alignItems="flex-end" height="100%">
            <Grid item xs={12}>
                <AnimatePresence>
                    {displayButtonFlag && (
                        <motion.div key="AdvanceTextButton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
                            <Button variant="contained" onClick={() => onClickCallback()}>
                                Next
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Grid>
        </Grid>
    );
}

AdvanceTextButton.propTypes = {
    displayButtonFlag: PropTypes.bool,
    onClickCallback: PropTypes.func,
};

export default AdvanceTextButton;
