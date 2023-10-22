import '../styles/App.scss';

const MovieDetail = ({movieData}) => {
  return (
    <>
      <ul>
        <li className="card">
          <img
            className="card__img"
            src={movieData.image}
            alt={`cartel de ${movieData.movie}`}
          />
          <div className='card__textbox'>
            <h4 className="card__textbox__title">{movieData.movie}</h4>
            <p className="card__textbox__subtitle">"{movieData.quote}"</p>
            <p className="card__textbox__director">{movieData.director}</p>
            
            <a className="card__textbox__audio" href={movieData.audio} title="Ir al audio" target="_blank" rel="noreferrer"><i className="fa-solid fa-headphones"></i> Escuchar audio</a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default MovieDetail;
