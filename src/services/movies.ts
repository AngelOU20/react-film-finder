import { getEnvVariables } from '../helpers/getEnvVariables';
import { type Movie, type ResponseWithData } from '../interfaces/Movie';

const { VITE_API_KEY } = getEnvVariables();

interface Props {
  search: string;
}

export const searchMovies = async ({
  search,
}: Props): Promise<Movie[] | null> => {
  if (search === '') return null;

  try {
    const resp = await fetch(
      `https://www.omdbapi.com/?apikey=${VITE_API_KEY}&s=${search}`
    );
    const data = await resp.json();

    // Note: Mappeo de datos
    const movies: ResponseWithData[] = data.Search;
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error('Error searching movies');
  }
};
