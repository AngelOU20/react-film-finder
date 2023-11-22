import { Header } from './components/header/Header';

function App (): JSX.Element {
  return (
    <div className='page'>
      <h1 className='title'>Buscador de películas</h1>
      <Header />
      <main>
        {/* Peliculas */}
        <p>Aqui iran las peliculas</p>
      </main>
    </div>
  );
}

export default App;
