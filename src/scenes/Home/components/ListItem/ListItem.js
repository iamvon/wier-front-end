import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Item from "../Item/Item"


export default function ListItem(props) {
    const classes = useStyles();


    function FormRow() {
        return (
            <React.Fragment>
                {props.list?.length ? props.list.map((e, index) => (
                    <Grid item xs={4}>
                        <Item key={index} item={e}/>
                    </Grid>
                )) : <Grid item xs={4}>
                    <div>Không có kết quả phù hợp</div>
                </Grid>}

            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow/>
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