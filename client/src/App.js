import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./components/Product";
import Profile from "./pages/Profile"
import Category from "./components/Category";
import Farm from "./pages/SingleFarm";
import MyFarm from './pages/myFarm'
import FarmsPage from "./pages/FarmsPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useSelector, useDispatch } from 'react-redux'
import Cart from "./components/Storefront/Cart";
import MainLayout from "./pages/MainLayout";

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
