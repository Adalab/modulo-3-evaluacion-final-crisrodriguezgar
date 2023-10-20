//imports dependencias, imagenes, componentes, stylos

import MovieSceneList from './MovieSceneList';
import ls from '../services/localStorage';
import callToApi from '../services/api';
import '../styles/App.scss';
import {useState, useEffect} from 'react';

function App() {
  //funciones, variables, handles,

  const [movieList, setMovieList] = useState(ls.get('movieList', []));

  useEffect(() => {
    if(ls.get('movieList', null)=== null){
    callToApi().then((cleanData) => {
      setMovieList(cleanData);
      console.log(cleanData);
      ls.set('movieList',cleanData)
    });
  }
  }, []);
  //html
  return (
    <>
      <header className="header">
        <h1 className="header__title">Owen Wilson's "wow"</h1>
      </header>
      <main>
      <MovieSceneList movieList={movieList}/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
