import { Header, MovieList, MovieNoResults } from './components';
import { useSearch, useMovies } from './hooks';

function App(): JSX.Element {
  const { search } = useSearch();
  const { movies, getMovies } = useMovies(search);
  const hasMovies = movies?.length > 0;

  return (
    <div className="page container">
      <h1 className="title">Buscador de películas</h1>
      <Header getMovies={getMovies} />
      <main className="main">
        {/* Aqui iran las peliculas */}
        {hasMovies ? <MovieList movies={movies} /> : <MovieNoResults />}
      </main>
    </div>
  );
}

export default App;
