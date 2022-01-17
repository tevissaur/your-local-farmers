import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import customTheme from "./extendedTheme";
import { categoryData } from "./categoryData";
import Product from "./components/Product";
import Profile from "./pages/Profile"
import Category from "./components/Category";
import Farm from "./pages/Farm";
import MyFarm from './pages/myFarm'
import FarmsPage from "./pages/FarmsPage";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Cart from "./components/Cart";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});



function App() {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || [])

  useEffect(() => {
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
    
    
  }, [cartItems])




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
              path="/products/:id" element={<Product cartItems={cartItems} setCartItems={setCartItems}/>}
            ></Route>
            
            <Route path='/farms' element={<FarmsPage />}>
            </Route>

            <Route path='/myfarm' element={<MyFarm />}>
            </Route>

            <Route
              path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}
            ></Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
