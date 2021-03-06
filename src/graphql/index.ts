import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-routes-graphql-kappa.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
