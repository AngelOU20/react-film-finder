import { FaSearch } from 'react-icons/fa';
import './Header.scss'

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <form className="form">
        <div className='container-search'>
          <span className="icon"> <FaSearch /></span>
          <input type="search" id="search" placeholder="Avengers, Star Wars, etc" />
        </div>
        <button type="submit" className='button-search'>Buscar</button>
      </form>
    </header>
  )
}
