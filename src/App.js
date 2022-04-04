import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Movies } from './components/movies/Movies';

//import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom'

const alanKey =
  '431ef72d5586821a72d702e857ce70972e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === 'movies') {
          navigate('/movies');
        } else if (command === 'home') {
          navigate('/')
        }
      },
    });
  }, []);

  return (
    <div className='main'>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/movies' element={<Movies/>}/>
      </Routes>
    </div>
  );
}

export default App;
