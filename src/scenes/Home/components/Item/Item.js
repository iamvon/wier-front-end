import React from 'react';
import {makeStyles, withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {useRecoilState} from "recoil";
import {CartState} from "../../../../states/Cart";
import {
    Link
} from "react-router-dom";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    price: {
        color: theme.palette.secondary,
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


export default function Item(props) {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };
    const handleClose = () => {
        setOpenDialog(false);
    };

    let imageUrl = props.item.image
    const styles = {
        dialog: {
            backgroundImage: "url(" + imageUrl + ")"
        }
    };
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
    const DialogWithBackgroundImage = withStyles(styles)(({classes}) => (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={openDialog}
            classes={{paper: classes.dialog}}

        >
            {/* <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Chi tiết sản phẩm
            </DialogTitle> */}
            <DialogContent style={{height: 650, width: 650}}>
            </DialogContent>
        </Dialog>
    ));

    return (

        <Card className={classes.root}>

            <Link
                to={{
                    pathname: "/productdetail",
                    state: {product: props.item}
                }}
            >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.item.image}
                        title={props.item.name}
                    />

                    <MuiThemeProvider theme={theme}>
                        <Typography style={{color:'black'}} component="h2">
                            {props.item.name}
                        </Typography>
                        <Typography variant="body2" color="secondary" component="p">
                            {props.item.price + "₫"}
                        </Typography>
                    </MuiThemeProvider>
                </CardActionArea>

                <DialogWithBackgroundImage/>

            </Link>
            <CardActions style={{justifyContent: 'flex-end'}}>
                <Button size="small" color="primary" onClick={() => handleAddToCart(props.item)}>
                    Thêm vào giỏ hàng
                </Button>
                {/* <Button size="small" color="primary">
                    Yêu thích
                </Button> */}
            </CardActions>
        </Card>
    );
}