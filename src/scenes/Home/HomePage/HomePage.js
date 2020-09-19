import React, {useEffect, useState} from 'react';
import {Item, Banner, Filter, ListItem} from "../components";
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import SearchBox from "../../components/Search/SearchBox"
import {makeStyles} from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import {atom, useRecoilState} from 'recoil';
import {Search} from "../../../states/Search";
import api from "../../../services/api";
import CircularProgress from '@material-ui/core/CircularProgress';
import {CartState} from "../../../states/Cart";

export default function HomePage() {
    const classes = useStyles();
    const [searchResult, setSeach] = useRecoilState(Search);
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useRecoilState(CartState);

    useEffect(() => {
        let a = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setCart(a)

        async function fetchData() {
            let res = await api.get(`category_random?category=77&limit=12`).json()
            setSeach(res.items_list)
            setLoading(false)
        }

        fetchData()
    }, [])

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs>
                </Grid>
                <Grid className={classes.cell} item xs={4}>
                    <SearchBox/>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{minHeight: '1000'}}
            >
                <Grid className={classes.cell} item xs={8}>
                    <Banner/>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={2}>
                </Grid>
                <Grid className={classes.cell} item xs={2}>
                    {/*<div className={classes.filterText}>*/}
                    {/*    <FilterListIcon/>*/}
                    {/*    <Box p={1}>Bộ lọc tìm kiếm</Box>*/}
                    {/*</div>*/}
                    {/*<Filter/>*/}
                </Grid>
                <Grid className={classes.cell} item xs={6}>
                    {!loading ? <ListItem list={searchResult}/> :
                        <CircularProgress
                            variant="indeterminate"
                            className={classes.bottom}
                            size={40}
                            thickness={4}
                        />
                    }
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    cell: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    filterText: {
        display: 'flex',
        alignItems: 'center',
        color: "#000",
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize: 18,
    }
}));
