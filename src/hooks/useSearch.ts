import { useEffect, useState, useRef } from 'react';

interface Search {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  // setIsInputTouched: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useSearch = (): Search => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState<string | null>(null);
  // const [isInputTouched, setIsInputTouched] = useState(false);

  // Todo: Utilizar useRef para saber si interactuamos con el input
  const isFirstInput = useRef<boolean>(true);

  useEffect(() => {
    // if (!isInputTouched) {
    //   // No mostrar errores si el usuario no ha interactuado con el campo de búsqueda
    //   setError(null);
    //   return;
    // }

    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if (search === '') {
      setError('No se puede buscar una película vacía');
      return;
    }

    if (search.match(/^\d+$/) !== null) {
      setError('No se puede buscar una película con un número');
      return;
    }

    if (search.length <= 3) {
      setError('La búsqueda debe tener al menos 3 caracteres');
      return;
    }

    setError(null);
  }, [search]); // <-- /*isInputTouched*/

  return {
    search,
    setSearch,
    error,
    // setIsInputTouched,
  };
};
