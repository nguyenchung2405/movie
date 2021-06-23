import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import MovieItem from '../MovieItem/MovieItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 400,
    height: 350,
  },
  
}));

export default function MovieList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList  className={classes.gridList}>
       
       <img src=" ./img/phim/ban-tay-diet-quy.png" />
       <img src=" ./img/phim/ban-tay-diet-quy.png" />
       <img src=" ./img/phim/ban-tay-diet-quy.png" />
       <img src=" ./img/phim/ban-tay-diet-quy.png" />
      </GridList>
    </div>
  );
}
