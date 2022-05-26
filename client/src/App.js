import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Product from "./pages/SingleProduct/Product";
import Profile from "./pages/Profile/Profile"
import Category from "./pages/ProductByCategory/CategoryProducts";
import Farm from "./pages/SingleFarm/SingleFarm";
import MyFarm from './pages/MyFarm/MyFarm'
import FarmsPage from "./pages/BrowseFarms/FarmsPage";
import Cart from "./components/Cart/Cart";
import MainLayout from "./pages/MainLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import NoPage from "./pages/NoPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider, useTheme } from "@mui/material";
import { createTheme } from "@mui/system";
import { red } from "@mui/material/colors";
import store from "./utils/store";
import auth from "./utils/auth";
import { useEffect } from "react";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});



function App() {
  useDispatch()
  useSelector((state) => state)
  const defaultTheme = useTheme()
  const theme = createTheme(defaultTheme, {
    palette: {
      primary: {
        main: red[500]
      }
    }
  })
  useEffect(() => {
    if (auth.isTokenExpired(auth.getToken())) {
      console.log(auth.isTokenExpired())
      auth.logout()
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>

        <Router>

          <Routes>
            <Route exact path="/*" element={<MainLayout />}>
              <Route index element={<Homepage />} />
              <Route path="farm/:fid">
                <Route index element={<Farm />} />
                <Route path="products/*">
                  <Route path=":pid" element={<Product />} />
                </Route>
              </Route>
              <Route path="profile" element={<Profile />} />
              <Route path="category/*" element={<Category />}>
                <Route path=":name" element={<Category />} />
              </Route>
              <Route path="products/*">
                <Route path=":id" element={<Product />} />
              </Route>
              <Route path='farms' element={<FarmsPage />} />
              <Route path='myfarm' element={<MyFarm />} />
              <Route path="cart" element={<Cart />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="resources" element={<Cart />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
