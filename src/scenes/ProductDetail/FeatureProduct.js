import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from '@material-ui/core'
import api from "../../services/api";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 300,
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    control: {
        padding: theme.spacing(2),
    },
}));


export function FeatureProduct() {
    const classes = useStyles();
    const [items, setItem] = useState([])
    useEffect(() => {
        async function fetchData() {
            let res = await api.get(`category_random?category=77&limit=8`).json()
            setItem(res.items_list)
        }

        fetchData()
    }, [])
    return <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
            <h3>Feature Product</h3>

            <Grid container justify="center" spacing={3}>

                {items.map((el, index) => {
                        let itemPrice = (el.price / 100000).toLocaleString({
                            style: 'currency',
                        })
                        return <Grid key={index} item>
                            <Link
                                onClick={()=>window.location.reload()}
                                replace={true}
                                to={{
                                    pathname: "/productdetail",
                                    key:`${el.itemid}`,
                                    state: {product: el}
                                }}
                            >
                                <Paper className={classes.paper}>
                                    <img height={180} src={'https://cf.shopee.vn/file/' + el.image}/><br/>
                                    <span style={{fontSize: 14}}>
                                    {el.name.length > 50 ? el.name.slice(0, 50) + '...' : el.name}</span><br/>
                                    <span style={{color: 'red'}}>{itemPrice}</span>
                                </Paper>

                            </Link>

                        </Grid>
                    }
                )}


            </Grid>
        </Grid>
    </Grid>

}