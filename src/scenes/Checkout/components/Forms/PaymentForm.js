import React //, {useState }
    from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width:'50%',
            alignSelf:'center',
            margin: '0 auto'
        },

    }),
);
const PaymentForm = () => {
    const classes = useStyles();


    const cardsLogo = [
        "jcb",
        "mastercard",
        "visa",
    ];

    return <>
        <Grid  container item xs={12}>
            <Grid item xs={12} sm={3}>
                <Typography variant="h6">Payment Data</Typography>
            </Grid>
            <Grid container item xs={3} sm={3} justify="space-between">
                {cardsLogo.map(e => <img key={e} src={`./cards/${e}.png`} alt={e} width="50px" align="bottom" style={{ padding: "0 5px" }} />)}
            </Grid>
        </Grid>
        <Grid container className={classes.root}  spacing={2}>
            <Grid item xs={12} sm={12}>
                <TextField
                    label="Credit Card Number"
                    name="ccnumber"
                    variant="outlined"
                    required
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={6} sm={6}>
                <TextField
                    label="Expiration Date"
                    name="ccexp"
                    variant="outlined"
                    required
                    fullWidth
                    type={'date'}

                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={6} sm={6}>
                <TextField
                    label="CVC"
                    name="cvc"
                    variant="outlined"
                    required
                    fullWidth
                    type={'password'}
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
        </Grid>

    </>
}

export default PaymentForm;
