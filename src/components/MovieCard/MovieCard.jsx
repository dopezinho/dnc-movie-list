import { Link } from "react-router-dom";
import './index.scss'

const MovieCard = ({ movieProp }) => {
  return (
    <div className="movie">
      <div className="movie__image">
        <img src={`https://image.tmdb.org/t/p/w1280${movieProp.poster_path}`} alt={movieProp.title} />
      </div>
      <div className="movie__description">
        <h3>{movieProp.title}</h3>
        <Link to={`/movie/${movieProp.id}`} className="movie__btn-details">
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default MovieCard