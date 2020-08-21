import React from 'react';
import {Grid, Paper,TextField} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Steppers from "./Stepper";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(2),

        },
        paper: {
            display:'flex',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            flexDirection: 'column',
        },
        input:{
            margin:theme.spacing(2),
        }
    }),
);
export function Checkout() {
    const classes = useStyles();

    return     <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Steppers/>
                </Paper>
            </Grid>
        </Grid>
    </div>

}