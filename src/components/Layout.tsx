import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { PokemonContext } from "../context/ContextProvider";
const Layout: React.FC = () => {
  const { filterPokemon } = useContext(PokemonContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterPokemon(event.target.value);
  };
  return (
    <>
      <nav className="w-full bg-[#586F6B] h-20 absolute flex items-center justify-between px-4">
          <h1 className="text-[#F8F4E3] text-3xl w-full text-center">
            Pokedex
          </h1>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#53687E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for pokemon"
              onChange={handleChange}
              required
            />
          </div>
      </nav>
      <main className="pt-20 h-full">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
