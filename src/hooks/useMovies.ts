import { useRef, useState, useMemo } from 'react';
import { type Movie } from '../interfaces/Movie';
import { searchMovies } from '../services/movies';

interface MoviesState {
  movies: Movie[] | null;
  loading: boolean;
  error: string | null;
  getMovies: () => Promise<void>;
}

interface MoviesProps {
  search: string;
  sort: boolean;
}

export const useMovies = ({ search, sort }: MoviesProps): MoviesState => {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const previousSearch = useRef(search);

  const getMovies = async (): Promise<void> => {
    if (previousSearch.current === search) return;

    try {
      setLoading(true);
      setError(null);

      previousSearch.current = search;

      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const sortedMovies = useMemo(() => {
    return sort && movies !== null
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);
  return {
    movies: sortedMovies,
    loading,
    error,
    getMovies,
  };
};
