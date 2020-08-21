import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Item from "../Item/Item"

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

export default function ListItem() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Item item={items[0]} />
                </Grid>
                <Grid item xs={4}>
                    <Item item={items[1]} />
                </Grid>
                <Grid item xs={4}>
                    <Item item={items[2]} />
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));