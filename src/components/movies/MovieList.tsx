import PropTypes from 'prop-types';
import { type Movie } from '../../interfaces/Movie';

interface Props {
  movies?: Movie[]
}

export const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <ul>
    {
      movies?.map(movie => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))
    }
  </ul>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};
