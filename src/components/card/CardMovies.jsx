import React, { createRef, useEffect, useState } from 'react';
import './card.css';
import classNames from 'classnames';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from '@mui/material';

export const CardMovies = ({
  movie: {
    id,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  },
  i,
  activeMovies,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);
  useEffect(() => {
    if (activeMovies === i + 1 && elRefs[activeMovies]) {
      scrollToRef(elRefs[activeMovies]);
    }
  }, [i, activeMovies, elRefs]);

  return (
    <div>
      <Card
        ref={elRefs[activeMovies]}
        className={classNames(
          'card',
          activeMovies === i + 1 ? 'activeCard' : null
        )}
      >
        <CardActionArea
          href={'https://www.themoviedb.org/movie/' + id}
          target='_blank'
        >
          <CardMedia
            className='media'
            component='img'
            image={'http://image.tmdb.org/t/p/w500' + poster_path}
          />
          <Typography className={'title'} gutterBottom variant='h6'>
            {original_title}
          </Typography>
          <div className='detail'>
            <Typography
              className={'title'}
              variant='body2'
              color='textSecondary'
              component='h3'
            >
              <b>Release Date:</b> {new Date(release_date).toDateString()}
            </Typography>
            <Typography
              className={'title'}
              variant='body2'
              color='textSecondary'
              component='h2'
            >
              <b>Rating:</b> {vote_average}/10 ({vote_count} votes)
            </Typography>
          </div>
        </CardActionArea>
        <CardActions className='cardActions'>
          <Button
            size='small'
            color='primary'
            href={'https://www.themoviedb.org/movie/' + id}
            target='_blank'
          >
            Know More
          </Button>
          <Typography variant='h5'>{i + 1}</Typography>
        </CardActions>
      </Card>
    </div>
  );
};
