import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import MovieItem from '../MovieItem/MovieItem';
import { useSelector, useDispatch } from 'react-redux';
import { getPhimAPI } from '../../redux/action/PhimAction';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }

}));

export default function MovieList() {
  const classes = useStyles();

  const { mangPhim } = useSelector(state => state.PhimReducer);
  const dispatch = useDispatch();
  const getPhim = () => {
    dispatch(getPhimAPI())
  }

  useEffect(() => {
    getPhim();
  }, [])

  const renderPhim = () => {
    return mangPhim.map((phim, index) => {
      return (<div>
          <Grid container  xs={12}>
            <Grid item xs={3}>
              <MovieItem phim={phim} />
            </Grid>
          </Grid>
      </div>
      )
    })
  }
  return (
    <div className={classes.root}>
      {renderPhim()}
    </div>
  );
}
