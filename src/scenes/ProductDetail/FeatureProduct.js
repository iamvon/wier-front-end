import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {Grid,Paper} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export function FeatureProduct() {
    const classes = useStyles();

    return     <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
            <h3>Feature Product</h3>

            <Grid container justify="center" spacing={3}>

                    {[0, 1, 2,3,4,5,6].map((value) => (
                        <Grid key={value} item>
                            <Paper className={classes.paper} />
                        </Grid>
                    ))}


            </Grid>
        </Grid>
    </Grid>

}