import { PropsWithChildren } from "react";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_SCHEMA_PATH,
  cache: new InMemoryCache(),
});

export const ApolloClientProvider = (props: PropsWithChildren) => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
