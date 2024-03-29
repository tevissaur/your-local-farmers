
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { useSelector } from 'react-redux'
import { ThemeProvider, useTheme } from "@mui/material";
import AuthService from "./services/authentication.service";
import { useEffect } from "react";
import { createTheme } from "@mui/system";
import customTheme from "./styles/theme";
import FarmersRouter from "./FarmersRouter";
import React from "react";

export const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache({
    resultCaching: true
  }),
});



function App() {
  const theme = createTheme(customTheme)
  
  useEffect(() => {
    if (AuthService.isTokenExpired(AuthService.getToken())) {
      AuthService.logout()
    }

  }, [])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <FarmersRouter />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
