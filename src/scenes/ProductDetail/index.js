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

export function ProductDetail() {
    let [product, setProduct] = useState(false)
    useEffect(() => {
        let res = window.history.state.state.product
        setProduct(res)
    }, [window.history]);
    const classes = useStyles();
    const [cart, setCart] = useRecoilState(CartState);
    window.cart = cart
    let a = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): []

    const handleAddToCart = (item) => {
        let newCart
        if (a.length) {
            newCart = a?.map(el => {
                if (el.itemid === item.itemid) {
                    return Object.assign({}, {...el}, {quantity: el.quantity + 1})
                } else {
                    return el
                }
            })
            newCart.push( Object.assign({}, {...item}, {quantity: 1}))
        } else {
            let cartItem = Object.assign({}, {...item}, {quantity: 1})

            a.length ?            newCart = [...a, cartItem]
                :             newCart = [ cartItem]


        }
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart))

    }
    let itemPrice = (product?.price/ 100000).toLocaleString({
        style: 'currency',
    })
    return <div style={{padding: 40}}>
        <Grid container className={classes.container} spacing={5}>

            <Grid item>
                <Paper className={classes.image}>
                    <img className={classes.img} alt="complex" src={'https://cf.shopee.vn/file/'+product?.image}/>
                </Paper>
            </Grid>
            <Grid style={{maxWidth: '50%'}} item>
                <h2>{product?.name}</h2>
                <h5>{itemPrice + 'đ'}</h5>
                <h5>{product?.location}</h5>
                <span>{product?.description}</span><br/>
                <Button onClick={() => handleAddToCart(product)} variant="contained" color="primary">
                    Add To Cart
                </Button>
            </Grid>
        </Grid>
        <FeatureProduct/>
    </div>
}