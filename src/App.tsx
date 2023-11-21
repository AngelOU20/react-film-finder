function App(): JSX.Element {
  return (
    <div>
      <header>
        <form className="form">
          <input type="text" placeholder="Avengers, Star Wars, etc" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        {/* Peliculas */}
        <p>Aqui iran las peliculas</p>
      </main>
    </div>
  );
}

export default App;
