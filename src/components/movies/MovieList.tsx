import PropTypes from 'prop-types';
import { type Movie } from '../../interfaces/Movie';
import { FaPlay } from 'react-icons/fa';
import './Movie.scss';

interface Props {
  movies?: Movie[];
}

export const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <ul className="movies">
      {movies?.map((movie) => (
        <li className="card movie_card" key={movie.id}>
          <img src={movie.poster} alt={movie.title} className="card-img-top" />
          <div className="card-body">
            <FaPlay className="play_button" />
            <h3 className="card-title">{movie.title}</h3>
            <span className="movie_info">{movie.year}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
