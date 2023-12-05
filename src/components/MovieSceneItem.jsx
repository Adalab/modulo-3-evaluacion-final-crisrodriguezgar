import '../styles/App.scss';

const MovieSceneItem = ({movie}) => {
  return (
    <>
      <img
        className="list__card__img"
        src={movie.image}
        alt={`cartel ${movie.movie}`}
      />
      <h4 className="list__card__title">{movie.movie}</h4>
      <p className="list__card__subtitle">&quot;{movie.quote}&quot;</p>
      <p className="list__card__year">{movie.year}</p>
    </>
  );
};

export default MovieSceneItem;
