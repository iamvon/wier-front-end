import React from 'react';
import {Item, Banner, Filter, ListItem} from "../components";
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import SearchBox from "../../components/Search/SearchBox"
import {makeStyles} from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import {atom, useRecoilState} from 'recoil';
import {Search} from "../../../states/Search";

export default function HomePage() {
    const classes = useStyles();
    const [searchResult, setSeach] = useRecoilState(Search);

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
                    <div className={classes.filterText}>
                        <FilterListIcon/>
                        <Box p={1}>Bộ lọc tìm kiếm</Box>
                    </div>
                    <Filter/>
                </Grid>
                <Grid className={classes.cell} item xs={6}>
                    {searchResult.length ? <ListItem list={searchResult}/> :
                        <ListItem list={searchResult}/>
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
