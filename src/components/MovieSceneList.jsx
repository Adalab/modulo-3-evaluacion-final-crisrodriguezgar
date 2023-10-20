import MovieSceneItem from './MovieSceneItem';
import '../styles/App.scss';

const MovieSceneList = ({movieList}) => {
  const renderList = movieList.map((movie) => (
    <li className="card" key={movie.id}>
      <MovieSceneItem movie={movie} />
    </li>
  ));

  return <ul>{renderList}</ul>;
};

export default MovieSceneList;
