import '../styles/App.scss';
import { Link } from 'react-router-dom';

const MovieDetail = ({movieData}) => {
  return (
    <>
      <ul className="details">
        <li className="details__card">
          <img
            className="details__card__img"
            src={movieData.image}
            alt={`cartel de ${movieData.movie}`}
          />
          <div className='details__card__textbox'>
            <h4 className="details__card__textbox__title">{movieData.movie}</h4>
            <p className="details__card__textbox__subtitle">"{movieData.quote}"</p>
            <p className="details__card__textbox__director"><i class="fa-solid fa-clapperboard fa-2xl details__card__textbox__icon"></i>{movieData.director}</p>
            
            <a className="details__card__textbox__audio" href={movieData.audio} title="Ir al audio" target="_blank" rel="noreferrer"><i class="fa-solid fa-headphones fa-2xl details__card__textbox__icon"></i> Escuchar audio</a>
          </div>
          <Link to="/"><i class="fa-solid fa-right-from-bracket fa-2xl details__card__textbox__exit"></i></Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetail;
