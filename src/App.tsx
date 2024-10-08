import { ApolloClientProvider, ReduxProvider } from "./providers";
import { AppRoutes } from "./routes";

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
