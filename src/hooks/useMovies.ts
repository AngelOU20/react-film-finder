import { useState } from 'react';
import { type ResponseWithData, type Movie } from '../interfaces/Movie';
import withResult from '../mocks/with-result.json';
import withoutResult from '../mocks/no-result.json';

interface Props {
  movies: Movie[];
  getMovies: () => void;
}

interface ResponseData {
  Search: ResponseWithData[];
}

export const useMovies = (search: string): Props => {
  const [responseMovies, setResponseMovies] = useState<ResponseData>({
    Search: [],
  });

  const movies: ResponseWithData[] = responseMovies.Search;

  const mappedMovie: Movie[] = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    poster: movie.Poster,
  }));

  const transformResponse = (apiResponse: any): ResponseData => {
    if (apiResponse.Response === 'True') {
      // Si la respuesta es exitosa, devolver la parte de búsqueda
      return { Search: apiResponse.Search };
    }
    // Si hay un error, devolver una estructura con un array vacío
    return { Search: [] };
  };

  const getMovies = (): void => {
    if (search !== '') {
      const transformedResponse = transformResponse(withResult);
      setResponseMovies(transformedResponse);
      return;
    }

    const transformedResponse = transformResponse(withoutResult);
    setResponseMovies(transformedResponse);
  };

  return {
    movies: mappedMovie,
    getMovies,
  };
};
