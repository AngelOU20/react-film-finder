import { useRef, useState } from 'react';
import { type Movie } from '../interfaces/Movie';
import { searchMovies } from '../services/movies';

interface Props {
  movies: Movie[] | null;
  loading: boolean;
  error: string | null;
  getMovies: () => Promise<void>;
}

export const useMovies = ({ search }: { search: string }): Props => {
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

  return {
    movies,
    loading,
    error,
    getMovies,
  };
};
