import React, {useState} from 'react';
import {
    TextField,
    Grid,
    Typography, Paper
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CartItem from './CartItem'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            // padding: theme.spacing(2),

        },
        paper: {
            display:'flex',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            flexDirection: 'column',
        },
       item:{
            margin:'5px'
       }
    }),
);

export function ViewCart() {
    const classes = useStyles();

    return <div className={classes.root}>
    <Paper className={classes.paper}>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </Paper>
</div>
}