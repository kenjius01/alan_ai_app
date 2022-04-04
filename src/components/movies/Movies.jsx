import alanBtn from '@alan-ai/alan-sdk-web';
import React, { useEffect } from 'react';
import './movie.css';

export const Movies = () => {
  useEffect(() => {
      alanBtn({
          key: alanBtn
      })
  }, []);
  return <div>Movies</div>;
};
