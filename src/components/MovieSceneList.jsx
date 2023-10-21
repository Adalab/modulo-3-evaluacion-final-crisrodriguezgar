import MovieSceneItem from './MovieSceneItem';
import '../styles/App.scss';

const MovieSceneList = ({movieList}) => {
  const renderList = movieList.map((movie) => (
    <li className="list__card" key={movie.id}>
      <MovieSceneItem movie={movie} />
    </li>
  ));

  return <ul className="list">{renderList}</ul>;
};

export default MovieSceneList;
