import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import MovieItem from '../MovieItem/MovieItem';
import { useSelector, useDispatch } from 'react-redux';
import { getPhimAPI } from '../../redux/action/PhimAction';
import Carousel from 'react-material-ui-carousel';
import ItemPhimDangChieu from '../MovieItem/ItemPhimDangChieu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '1000px',
    height: '800px',
    overflow: 'hidden'
  }

}));

export default function MovieList() {
  const classes = useStyles();

  const { mangPhim } = useSelector(state => state.PhimReducer);

  const filmChunks = [];
  const chunk_size = 8;
  while (mangPhim.length > 0) {
    filmChunks.push(mangPhim.splice(0, chunk_size))
  }
  const dispatch = useDispatch();
  const getPhim = () => {
    dispatch(getPhimAPI())
  }

  useEffect(() => {
    getPhim();
  }, [])


  const settings = {
    animation: "slide",
    swipe: true,
    autoPlay: false,
    indicators: false,
    navButtonsAlwaysVisible: true,
    navButtonsWrapperProps: {
      style: {

      }
    }
  };
  const renderPhim = () => {
    return filmChunks.map((item, index) => {
      return (<div className={classes.root}>
        {item.map(phim => {
          return (<div>
            <Grid container  >
              <Grid item >
                <ItemPhimDangChieu phim={phim} />
              </Grid>
            </Grid>
          </div>
          )
        })
        })
      </div>)
    })

  }
  return (
    <Carousel {...settings}>
      {renderPhim()}
    </Carousel>

  );
}