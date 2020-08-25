import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

export default function Banner(props) {
    const classes = useStyles();

    let items = [
        {
            name: "Sport",
            description: "Sport Style",
            image: "sport.png"
        },
        {
            name: "Summer",
            description: "Summer Style",
            image: "summer.jpg"
        }
    ]

    return (
        <Carousel 
            className={classes.carousel}
            animation = "slide"
        >
            {
                items.map((item, i) => <ImgMediaCard key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt={props.item.description}
                image={props.item.image}
            />
        </Card>
    );
}

const useStyles = makeStyles({
    root: {
        maxHeight: 400,
    },
    carousel: {
        alignContent: "center",
        alignItems: "center",
        justify: "center"
    }
});
