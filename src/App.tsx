import { Header, MovieList, MovieNoResults } from './components';
import { useMovies } from './hooks/useMovies';

function App (): JSX.Element {
  const { movies } = useMovies();
  const hasMovies = movies?.length > 0;

  return (
    <div className='page'>
      <h1 className='title'>Buscador de películas</h1>
      <Header />
      <main>
        {/* Aqui iran las peliculas */}
        {
          hasMovies
            ? <MovieList movies={movies} />
            : <MovieNoResults />
        }
      </main>
    </div>
  );
}

export default App;
