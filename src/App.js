import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Movies } from './components/movies/Movies';

//import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom'

const alanKey =
  '431ef72d5586821a72d702e857ce70972e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  let navigate = useNavigate();
  // const [tab, setTab] = useState('home');
  const [alanInstance, setAlanInstance] = useState();
  const [movies, setMovies] = useState([]);
  const [activeMovies, setActiveMovies] = useState(0);
  const [videos, setVideos] = useState([]);
  const [videoKey, setVideoKey] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, results, number, video }) => {
        if (command === 'movies') {
          navigate('/movies');
          // setTab('movies');
        } else if (command === 'home') {
          navigate('/');
          // setTab('home');
        } else if (command === 'showMovie') {
          setMovies(results);
          setActiveMovies(0);
        }
      },
    });
  }, []);

  

  // useEffect(() => {
  //   if (videos && videos.results) {
  //     console.log(videos.results[0]);
  //     setVideoKey(videos.results[0].key);
  //   }
  // }, [videos, videos.results]);

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/movies'
          element={
            <Movies
              setOpen={setOpen}
              videos={videos}
              videoKey={videoKey}
              setPlaying={setPlaying}
              movies={movies}
              activeMovies={activeMovies}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
