import { useState, useEffect } from 'react';
import { Header, MovieList, MovieNoResults } from './components';
import { useSearch, useMovies } from './hooks';

function App(): JSX.Element {
  const [sort, setSort] = useState(false);

  const { search, setSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });
  const hasMovies =
    movies !== null && movies !== undefined && movies.length > 0;

  const renderComponent = (): JSX.Element => {
    if (loading) return <p>Loading...</p>;

    if (hasMovies) return <MovieList movies={movies} />;

    return <MovieNoResults />;
  };

  useEffect(() => {
    console.log('renderizado del getMovies');
  }, [getMovies]);

  const handleSort = (): void => {
    setSort(!sort);
  };

  return (
    <div className="page container">
      <h1 className="title">Buscador de películas</h1>
      <Header
        search={search}
        setSearch={setSearch}
        error={error}
        getMovies={getMovies}
        sort={sort}
        handleSort={handleSort}
      />
      <main className="main">
        {/* Aqui iran las peliculas */}
        {renderComponent()}
        {/* {hasMovies ? <MovieList movies={movies} /> : <MovieNoResults />} */}
      </main>
    </div>
  );
}

export default App;
