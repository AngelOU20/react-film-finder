import { FaSearch } from 'react-icons/fa';
import './Header.scss';
import { type ChangeEvent, type FormEvent } from 'react';
import PropTypes from 'prop-types';

interface HeaderProps {
  search: string;
  setSearch: (newQuery: string) => void;
  error: string | null;
  getMovies: ({ search }: { search: string }) => Promise<void>;
  sort: boolean;
  handleSort: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  search,
  setSearch,
  error,
  getMovies,
  sort,
  handleSort,
}) => {
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
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(' ')) return;

    setSearch(newQuery);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    void getMovies({ search });
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
        <div>
          <span>Ordenar por título</span>
          <input type="checkbox" onChange={handleSort} checked={sort} />
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
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  getMovies: PropTypes.func.isRequired,
  sort: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
};
