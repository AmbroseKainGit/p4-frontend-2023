import { PokemonProvider } from "./context/ContextProvider";
import { createRouter } from "./router/RouterProvider";

function App() {
  return <PokemonProvider>{createRouter()}</PokemonProvider>;
}

export default App;
