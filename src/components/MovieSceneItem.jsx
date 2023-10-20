import '../styles/App.scss';

const MovieSceneItem = ({movie}) => {
  return (
    <>
      <img className="card__img" src={movie.image} alt={movie.movie}/>
      <h4 className="card__title">{movie.movie}</h4>
      <p className="card__subtitle">"{movie.prhase}"</p>
      <p className="card__year">{movie.year}</p>
    </>
  );
};

export default MovieSceneItem;
