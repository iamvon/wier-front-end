import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper, Button} from '@material-ui/core'
import {FeatureProduct} from "./FeatureProduct";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import {CartState} from "../../states/Cart";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center'
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
        id: '0',
        name: "Váy ngủ ren hai dây chéo lưng xẻ tà gợi cảm",
        price: "110.000",
        location: "Hà Nội",
        image: "https://cf.shopee.vn/file/3eae0c5c74906a2fe01eabaa87ff8e8f"
    },
    {
        id: '1',

        name: "Áo khoác nam CNV146 siêu chất DJ ALAN giá rẻ, nỉ siêu sịn",
        price: "150.000",
        location: "Hà Nội",
        image: "https://cf.shopee.vn/file/9d2ab21b10c7eadce6d1f65b4a867041"
    },
    {
        id: '1',

        name: "Quần váy voan thời trang mùa hè cá tính",
        price: "120.000",
        location: "Quốc Tế",
        image: "https://cf.shopee.vn/file/21a8dc54f3fcbd42944a38fccd80dd06"
    }
]

export function ProductDetail() {
    let [product, setProduct] = useState(false)
    useEffect(() => {
        let res = window.history.state.state.product
        setProduct(res)
    }, [window.history]);
    const classes = useStyles();
    const [cart, setCart] = useRecoilState(CartState);
    const handleAddToCart = (item) => {
        let newCart
        if (cart.length) {
            newCart = cart.map(el => {
                if (el.id === item.id) {
                    return Object.assign({}, {...el}, {quantity: el.quantity + 1})
                }
            })
        } else {
            let cartItem = Object.assign({}, {...item}, {quantity: 1})
            newCart = [...cart, cartItem]

        }
        setCart(newCart);
    }
    return <div style={{padding: 40}}>
        <Grid container className={classes.container} spacing={5}>

            <Grid item>
                <Paper className={classes.image}>
                    <img className={classes.img} alt="complex" src={product?.image}/>
                </Paper>
            </Grid>
            <Grid style={{maxWidth: '50%'}} item>
                <h2>{product?.name}</h2>
                <h5>{product?.price}</h5>
                <h5>{product?.location}</h5>
                <Button onClick={() => handleAddToCart(product)} variant="contained" color="primary">
                    Add To Cart
                </Button>
            </Grid>
        </Grid>
        <FeatureProduct/>
    </div>
}