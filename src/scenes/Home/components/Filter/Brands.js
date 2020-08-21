import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        // margin: theme.spacing(3),
    },
}));

export default function Brands() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        nobrand: false,
        gumac: false,
        bosua: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { nobrand, gumac, bosua } = state;
    const error = [nobrand, gumac, bosua].filter((v) => v).length !== 2;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={nobrand} onChange={handleChange} name="nobrand" />}
                        label="No Brand"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={gumac} onChange={handleChange} name="gumac" />}
                        label="GUMAC"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={bosua} onChange={handleChange} name="bosua" />}
                        label="Bò Sữa"
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}