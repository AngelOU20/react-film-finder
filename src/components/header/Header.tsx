import { FaSearch } from 'react-icons/fa';
import './Header.scss';
import { type ChangeEvent, type FormEvent } from 'react';
import { useSearch } from '../../hooks';
import PropTypes from 'prop-types';

interface HeaderProps {
  getMovies: () => void;
}

export const Header: React.FC<HeaderProps> = ({ getMovies }) => {
  // Todo: Cambiarlo a forma nativa sin usar hook
  // const inputRef = useRef<HTMLInputElement>(null);
  // const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
  //   event.preventDefault();
  //   const inputEl = inputRef.current;
  //   const value = inputEl?.value;

  //   console.log(value)
  // }

  // Note: Forma no controlada, estamos gestionando el formulario a través del DOM
  // const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
  //   event.preventDefault();

  //   if (!(event.target instanceof HTMLFormElement)) return;

  //   const { search } = Object.fromEntries(new window.FormData(event.target));

  //   if (String(search).length <= 0) return;

  //   console.log(search);
  // };

  // Note: Forma controlada
  const { search, setSearch, error } = useSearch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(' ')) return;

    setSearch(newQuery);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log({ search });
    getMovies();
  };

  return (
    <header className="header">
      <form className="form" onSubmit={handleSubmit}>
        <div className="container-search">
          <span className="icon">
            <FaSearch />
          </span>
          <input
            // ref={inputRef}
            type="search"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="Avengers, Star Wars, etc"
          />
        </div>
        <button type="submit" className="button-search">
          Buscar
        </button>
      </form>
      {error !== null && <p style={{ color: 'red' }}>{error}</p>}
    </header>
  );
};

Header.propTypes = {
  getMovies: PropTypes.func.isRequired,
};
