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
  const [yearFilter, setYearFilter] = useState('Año');

  useEffect(() => {
    if (ls.get('movieList', null) === null) {
      callToApi().then((cleanData) => {
        setMovieList(cleanData);
        console.log(cleanData);
        ls.set('movieList', cleanData);
      });
    }
  }, []);

  //1. Funcion manejadora del input de texto

  const handleChange = (value) => {
    setMovieFilter(value);
    console.log(value);
  };

  // 1.1. Filtro del input

  const filteredMovies = movieList
    .filter((item) =>
      item.movie.toLowerCase().includes(movieFilter.toLowerCase())
    )
    //2.2. concateno otro filter para el select
    .filter((item) => {
      if (yearFilter === 'Año') {
        return true;
      } else {
        return yearFilter.includes(item.year);
      }
    });

  //2. Funcion manejadora del Select, al igual que la funcion anterior tengo que coger el valor

  const handleChangeYear = (value) => {
    setYearFilter(value);
  };

  //3. Necesito buscar todos los años

  const years = movieList.map((item) => item.year);
  console.log(years);

  //4.Ahora necesito limpiar los años y aparezca solo uno

  const getYear = () => {
    const years = movieList.map((item) => item.year);
    const uniquesYears = new Set(years);
    const uniquesArray = [...uniquesYears];
    return uniquesArray;
  };

  //html
  return (
    <>
      <header className="header">
        <h1 className="header__title">Owen Wilson's "Wow...!"</h1>
      </header>
      <main className="main">
        <Filters
          movieFilter={movieFilter}
          handleChange={handleChange}
          handleChangeYear={handleChangeYear}
          yearFilter={yearFilter}
          years={getYear()}
        />
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
