import { useState } from 'react';
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

  const getMovies = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

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
