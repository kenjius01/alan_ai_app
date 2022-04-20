import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Movies } from './components/movies/Movies';
import wordToNumbers from 'word-to-numbers';

//import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom'

const alanKey =
  '431ef72d5586821a72d702e857ce70972e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  let navigate = useNavigate();
  // const [tab, setTab] = useState('home');
  // const [alanBtn, setalanBtn] = useState();
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
        } else if (command === 'highlightMovies') {
          setActiveMovies((pre) => pre + 1);
        } else if (command === 'openMovies') {
          const num =
            number.length > 2 ? wordToNumbers(number, { fuzzy: true }) : number;
          const movie = results[num - 1];
          if (num > 20) {
            alanBtn().playText('Please try that again.');
          } else {
            window.open(
              'https://www.themoviedb.org/movie/' + movie.id,
              '_blank'
            );
            alanBtn().playText('Opening....');
          }
        } else if (command === 'play') {
          // const loadVideo = async () => {
          //   try {
          //     const response = await fetch(
          //       'https://api.themoviedb.org/3/movie/' + video.id +'/videos?api_key=c805fa1cad05662c12f0c25c8214f775&language=en-US'
          //     );
          //     let jsonData = await response.json();
          //     // console.log(jsonData.results.length);

          //     if (jsonData.results.length <= 0) {
          //       console.log('bye');
          //       alanBtn.playText(
          //         'Sorry no trailer available for ' + video.original_title
          //       );
          //     } else {
          //       console.log('data available');
          //       setVideos(jsonData);
          //       setOpen(true);
          //       setPlaying(true);
          //       alanBtn.playText('Playing trailer for ' + video.original_title);
          //     }
          //   } catch (e) {
          //     // Some fetch error
          //     console.log(e);
          //   }
          // };
          fetch(
            'https://api.themoviedb.org/3/movie/' +
              video.id +
              '/videos?api_key=c805fa1cad05662c12f0c25c8214f775&language=en-US'
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data.results.length <= 0) {
                alanBtn.playText(
                  'Sorry no trailer available for ' + video.original_title
                );
              } else {
                setVideos(data);
                setOpen(true);
                setPlaying(true);
                alanBtn.playText('Playing trailer for ' + video.original_title);
              }
            })
            .catch(err=>console.log(err))
        }
      },
    });
  }, []);

  useEffect(() => {
    if (videos && videos.results) {
      console.log(videos.results[0]);
      setVideoKey(videos.results[0].key);
    }
  }, [videos, videos.results]);

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/movies'
          element={
            <Movies
              isOpen={isOpen}
              setOpen={setOpen}
              videos={videos}
              videoKey={videoKey}
              setPlaying={setPlaying}
              playing={playing}
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
