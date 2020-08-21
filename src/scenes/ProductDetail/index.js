import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {Grid,Paper} from '@material-ui/core'
import ButtonBase from "@material-ui/core/ButtonBase";
import {FeatureProduct} from "./FeatureProduct";

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        justifyContent:'center'
    },
    image: {
        width: 500,
        height: 500,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));
export function ProductDetail() {
    const classes = useStyles()
    return <div style={{padding:40}}>
        <Grid container className={classes.container} spacing={5}>

            <Grid item xs={5}>
                <Paper className={classes.image}>
                    <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                </Paper>            </Grid>
            <Grid item xs={4}>
                <div>
                    <h2>Product title</h2>
                    <h5>short description</h5>
                </div>
            </Grid>
        </Grid>
        <FeatureProduct/>
    </div>
}