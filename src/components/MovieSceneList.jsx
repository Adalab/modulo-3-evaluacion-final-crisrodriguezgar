import MovieSceneItem from './MovieSceneItem';
import '../styles/App.scss';
import {Link} from 'react-router-dom';
import wow from '../images/wow.gif'

const MovieSceneList = ({movieList, movieFilter}) => {
  if (movieList.length === 0) {
    return (
      <section className='inputError'>
        <p>
          No hay coincidencias con la palabra "{movieFilter}". ¡Prueba otra vez!
        </p>
        <img className='inputError__img'src={wow} alt="" />
      </section>
    );
  } else {
    const renderList = movieList.map((movie) => (
      <Link key={movie.id} to={'/movie/' + movie.id}>
        <li className="list__card" key={movie.id}>
          <MovieSceneItem movie={movie} />
        </li>
      </Link>
    ));

    return <ul className="list">{renderList}</ul>;
  }
};
export default MovieSceneList;
