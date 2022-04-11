// import alanBtn from '@alan-ai/alan-sdk-web';
import React, { useEffect } from 'react';
import { MovieCards } from '../movieCards/MovieCards';
import {Modal} from '../modal/Modal'
import './movie.css';

export const Movies = ({
  videos,
  setOpen,
  setPlaying,
  videoKey,
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
        >
        </Modal>
      )}
      <MovieCards movies={movies} activeMovies={activeMovies}/>
    </div>
  );
};
