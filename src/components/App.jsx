//imports dependencias, imagenes, componentes, stylos
import ls from '../services/localStorage';
import callToApi from '../services/api';
import '../styles/App.scss';
import {useState, useEffect} from 'react';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

function App() {
  //funciones, variables, handles,

  const [movieList, setMovieList] = useState(ls.get('movieList', []));
  const [movieFilter, setMovieFilter] = useState('');

  useEffect(() => {
    if (ls.get('movieList', null) === null) {
      callToApi().then((cleanData) => {
        setMovieList(cleanData);
        console.log(cleanData);
        ls.set('movieList', cleanData);
      });
    }
  }, []);

  const handleChange = (value) => {
    setMovieFilter(value);
    console.log(value);
  };

  const filteredMovies = movieList.filter((item) =>
    item.movie.toLowerCase().includes(movieFilter)
  );

  //html
  return (
    <>
      <header className="header">
        <h1 className="header__title">Owen Wilson's "Wow...!"</h1>
      </header>
      <main className="main">
        <Filters movieFilter={movieFilter} handleChange={handleChange} />
        <MovieSceneList movieList={filteredMovies} />
      </main>
      <footer className="footer">
        <p>© crisrodriguez</p>
        <p>2023</p>
      </footer>
    </>
  );
}

export default App;
