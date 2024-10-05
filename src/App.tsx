import "./App.css";
import { ApolloClientProvider, ReduxProvider } from "./providers";
import { AppRoutes } from "./routes";

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png
function App() {
  return (
    <ApolloClientProvider>
      <ReduxProvider>
        <AppRoutes />
      </ReduxProvider>
    </ApolloClientProvider>
  );
}

export default App;
