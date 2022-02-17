import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import customTheme from "./extendedTheme";
import Header from './components/Header'
import Product from "./components/Product";
import Profile from "./pages/Profile"
import Category from "./components/Category";
import Farm from "./pages/Farm";
import MyFarm from './pages/myFarm'
import FarmsPage from "./pages/FarmsPage";
import ProductCard from './components/ProductCard'
import { CgShoppingCart } from 'react-icons/cg'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useSelector, useDispatch } from 'react-redux'
import Cart from "./components/Cart";
import MainLayout from "./pages/MainLayout";
import store from "./utils/store";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});



function App() {
  useDispatch()
  useSelector((state) => state)



  return (
    <ApolloProvider client={client}>
        <Router>

          <Routes>
            <Route exact path="/" element={<MainLayout />}>
              <Route index element={<Homepage />} />
              <Route path="farm/:name" element={<Farm />} />
              <Route path="profile" element={<Profile />} />
              <Route path="category/:name" element={<Category />} />
              <Route path="products/:id" element={<Product />} />
              <Route path='farms' element={<FarmsPage />} />
              <Route path='myfarm' element={<MyFarm />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </Router>
    </ApolloProvider>
  );
}

export default App;
