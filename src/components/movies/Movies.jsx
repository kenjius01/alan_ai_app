// import alanBtn from '@alan-ai/alan-sdk-web';
import React from 'react';
import { MovieCards } from '../movieCards/MovieCards';
import {Modal} from '../modal/Modal'
import './movie.css';

export const Movies = ({
  videos,
  setOpen,
  setPlaying,
  videoKey,
  isOpen,
  playing,
  movies,
  activeMovies,
}) => {
  return (
    <div className=''>
      {videos && (
        <Modal
          setOpen={setOpen}
          setPlaying={setPlaying}
          videoKey={videoKey}
          isOpen={isOpen}
          playing={playing}
        >
        </Modal>
      )}
      <MovieCards movies={movies} activeMovies={activeMovies}/>
    </div>
  );
};
