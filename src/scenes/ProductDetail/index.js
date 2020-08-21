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
const items = [
    {
        name: "Váy ngủ ren hai dây chéo lưng xẻ tà gợi cảm",
        price: "110.000",
        location: "Hà Nội",
        image: "https://cf.shopee.vn/file/3eae0c5c74906a2fe01eabaa87ff8e8f"
    },
    {
        name: "Áo khoác nam CNV146 siêu chất DJ ALAN giá rẻ, nỉ siêu sịn",
        price: "150.000",
        location: "Hà Nội",
        image: "https://cf.shopee.vn/file/9d2ab21b10c7eadce6d1f65b4a867041"
    },
    {
        name: "Quần váy voan thời trang mùa hè cá tính",
        price: "120.000",
        location: "Quốc Tế",
        image: "https://cf.shopee.vn/file/21a8dc54f3fcbd42944a38fccd80dd06"
    }
]
export function ProductDetail() {
    const classes = useStyles()
    return <div style={{padding:40}}>
        <Grid container className={classes.container} spacing={5}>

            <Grid item xs={5}>
                <Paper className={classes.image}>
                    <img className={classes.img} alt="complex" src={items[0].image} />
                </Paper>            </Grid>
            <Grid item xs={4}>
                <div>
                    <h2>{items[0].name}</h2>
                    <h5>{items[0].price}</h5>
                    <h5>{items[0].location}</h5>
                </div>
            </Grid>
        </Grid>
        <FeatureProduct/>
    </div>
}