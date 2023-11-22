import { type Movie } from '../interfaces/Movie';
import responseMovies from '../mocks/with-result.json';
// import withoutResult from './mocks/no-result.json';

interface Props {
  movies: Movie[]
}

export const useMovies = (): Props => {
  const movies = responseMovies.Search;

  const mappedMovie: Movie[] = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    poster: movie.Poster
  }))

  return {
    movies: mappedMovie
  }
}
