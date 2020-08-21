import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Locations from "./Locations"
import Brands from "./Brands"

export default function Filter() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Box fontWeight="fontWeightBold" className={classes.heading}>Nơi bán</Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Locations />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Box fontWeight="fontWeightBold" className={classes.heading}>Thương hiệu</Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Brands />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Product Sans", serif',
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'flex',
    },
    heading: {
        textTransform: "uppercase",
        fontWeight: 500,
    },
}));

