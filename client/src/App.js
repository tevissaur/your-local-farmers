import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import customTheme from "./extendedTheme";
import { categoryData } from "./categoryData";
import Product from "./components/Product";
import Profile from "./pages/Profile"
import Category from "./components/Category";
import Farm from "./pages/Farm";
import FarmsPage from "./pages/FarmsPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={customTheme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />}>

            </Route>
            <Route
              path="/farm/:name" element={<Farm />}
            ></Route>
            <Route
              path="/profile" element={<Profile />}>
            </Route>

            <Route
              path="/category/:name" element={<Category />}
            ></Route>
            <Route
              path="/products/:id" element={<Product />}
            ></Route>
            
            <Route path='/farms' element={<FarmsPage />}>
            </Route>

            {/* <Route
              path="/category/:name" element={<Category />}
            ></Route> */}
            <Route path='/farms' element={<FarmsPage />}>
              
            </Route>

            <Route path='/myfarm' element={<MyFarm />}>
            </Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
