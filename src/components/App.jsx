//imports dependencias, imagenes, componentes, stylos
import {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useLocation, matchPath} from 'react-router';

import ls from '../services/localStorage';
import callToApi from '../services/api';
import '../styles/App.scss';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieDetail from './MovieDetail';

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
  //console.log(years);

  //4.Ahora necesito limpiar los años y aparezca solo uno

  const getYear = () => {
    const years = movieList.map((item) => item.year);
    const uniquesYears = new Set(years);
    const uniquesArray = [...uniquesYears];
    uniquesArray.sort(); // Ordenar los años
    return uniquesArray;
  };

  //5. Buscar al usuario basado en el id de la película
  const {pathname} = useLocation();
  const routeData = matchPath('/movie/:id', pathname);
  console.log(routeData);
  const movieId = routeData !== null ? routeData.params.id : '';
  console.log(movieId);

  const movieData = movieList.find((item) => item.id === parseInt(movieId));

  //html
  return (
    <>
      <header className="header">
        <h1 className="header__title">Owen Wilson's "Wow...!"</h1>
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  movieFilter={movieFilter}
                  handleChange={handleChange}
                  handleChangeYear={handleChangeYear}
                  yearFilter={yearFilter}
                  years={getYear()}
                />
                <MovieSceneList
                  movieList={filteredMovies}
                  movieFilter={movieFilter}
                />
              </>
            }
          />
          <Route
            path="/movie/:id" //los : es para decirle que id es un parametro
            element={<MovieDetail movieData={movieData} />}
          />
        </Routes>
      </main>
      <footer className="footer">
        <p>© crisrodriguez</p>
        <p>2023</p>
      </footer>
    </>
  );
}

export default App;
