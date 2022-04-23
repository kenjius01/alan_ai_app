import {
  Avatar,
  Chip,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Grow,
  IconButton,
  Slide,
  Tooltip,
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import React, { useEffect, useState } from 'react';
import './news.css';
import { NewsCard } from '../components/newsCard/NewsCard';
// import { Header } from '../components/header/Header';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const News = ({ articles, activeArticles }) => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [size, setSize] = useState('');
  const [size1, setSize1] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  let view = '';
  if (width > 700) {
    view = 'laptop';
  } else if (width < 700 && width > 450) {
    view = 'tablet';
  } else if (width < 450) {
    view = 'mobile';
  }

  useEffect(() => {
    const handleResize = () => {
      if (view === 'mobile') {
        setSize('4rem');
        setSize1('1rem');
      } else if (view === 'tablet') {
        setSize('5rem');
        setSize1('1.5rem');
      } else if (view === 'laptop') {
        setSize('8rem');
        setSize1('2rem');
      }
    };
    handleResize();
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [view]);

  if (!articles.length) {
    return (
      <div className='news-container'>
        <img
          src='https://codetipi.com/zeen/img/zeen-mock-1440.png'
          alt=''
          className='news-background'
        />
        <div className='content'>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby='alert-dialog-slide-title'
            aria-describedby='alert-dialog-slide-description'
          >
            <DialogTitle
              id='alert-dialog-slide-title'
              style={{ textAlign: 'center', fontWeight: '700' }}
            >
              COMMANDS
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-slide-description'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#00ab55' }}
                      >
                        L
                      </Avatar>
                    }
                    label='Give me the latest news'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#00ab55',
                      color: '#fff',
                    }}
                  />
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#7635dc' }}
                      >
                        C
                      </Avatar>
                    }
                    label='Give me the latest {Category:Technology,Music,Science,...} news'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#7635dc',
                      color: '#fff',
                    }}
                  />
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#1ccaff' }}
                      >
                        T
                      </Avatar>
                    }
                    label="What's up with {terms: Bitcoin, PlayStation 5, Smartphones, Donald Trump...}"
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#1ccaff',
                      color: '#fff',
                    }}
                  />
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#ff00ff' }}
                      >
                        S
                      </Avatar>
                    }
                    label='Give me the news from {source: CNN, ABC news,...}'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#ff00ff',
                      color: '#fff',
                    }}
                  />
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#fda92d' }}
                      >
                        O
                      </Avatar>
                    }
                    label='Open the article number {news number}'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#fda92d',
                      color: '#fff',
                    }}
                  />
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#FF2442' }}
                      >
                        G
                      </Avatar>
                    }
                    label='Go Back'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#FF2442',
                      color: '#fff',
                    }}
                  />
                </div>
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              paddingRight: '10px',
              width: '100%',
            }}
          >
            <Tooltip title='Info'>
              <IconButton aria-label='command' onClick={handleClickOpen}>
                <LightbulbIcon
                  style={{
                    fontSize: 40,
                    display: 'flex',
                    marginTop: '30px',
                    color: '#33cc33',
                  }}
                />
              </IconButton>
            </Tooltip>
          </div>
          <div>
            {size && (
              <span
                className='news-headline'
                style={{
                  display: 'inline-block',
                  fontWeight: '500',
                  fontSize: size,
                  letterSpacing: '3px',
                }}
              >
                Newspaper
              </span>
            )}
          </div>
          {size1 && (
            <span
              className='news-des'
              style={{
                color: 'white',
                fontSize: size1,
                fontWeight: '400',
                letterSpacing: '10px',
                paddingTop: '30px',
                marginLeft: '120px',
              }}
            >
              Time to read all news over the world
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
        
      <Grow in>
        <Grid
          className='card-container'
          container
          alignItems='stretch'
          spacing={3}
        >
          {articles.map((article, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{ display: 'flex' }}
            >
              <NewsCard
                article={article}
                activeArticles={activeArticles}
                index={i}
              />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
};
