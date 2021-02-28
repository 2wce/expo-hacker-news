import React from "react";
import { ApolloProvider } from "@apollo/client";

import Main from "./src";
import client from "./src/graphql";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
};

export default App;
