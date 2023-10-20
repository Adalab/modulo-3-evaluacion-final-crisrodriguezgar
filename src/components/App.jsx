//imports dependencias, imagenes, componentes, stylos

import MovieSceneList from './MovieSceneList';
//import ls from '../services/localStorage';
import callToApi from '../services/api';
import '../styles/App.scss';
import {useState, useEffect} from 'react';

function App() {
  //funciones, variables, handles,

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    callToApi().then((cleanData) => {
      setMovieList(cleanData);
      console.log(cleanData);
    });
  }, []);
  //html
  return (
    <>
      <header className="header">
        <h1 className="header__title">Owen Wilson's "wow"</h1>
      </header>
      <MovieSceneList />
    </>
  );
}

export default App;
