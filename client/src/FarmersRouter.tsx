import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as geolib from 'geolib'
import Homepage from "./pages/Home/Homepage";
import Product from "./pages/SingleProduct/SingleProduct";
import Profile from "./pages/Profile/Profile"
import Search from "./pages/Search/Search";
import Farm from "./pages/SingleFarm/SingleFarm";
import MyFarm from './pages/MyFarm/MyFarm'
import FarmsPage from "./pages/BrowseFarms/FarmsPage";
import Cart from "./components/Cart/Cart";
import MainLayout from "./pages/MainLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import NoPage from "./pages/NoPage";
import { useEffect } from "react";
import store, { RootState } from "./utils/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FarmSearch from "./pages/Search/components/FarmSearch";
import ProductSearch from "./pages/Search/components/ProductSearch";


const FarmersRouter = () => {
  const { user: { userData: { location } } } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  // useEffect(() => {

  //   if ('geolocation' in navigator && (location?.latitude === 0 && location?.longitude === 0)) {
  //     navigator.geolocation.getCurrentPosition((e) => {
  //       const coords = { 
  //         latitude: e.coords.latitude, 
  //         longitude: e.coords.longitude
  //       }
  //     })
  //   }
  // }, [])

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          {/* <Route path="farm/:fname">

            <Route path="about" element={<Farm />} />

            <Route path="store">
              <Route index element={<Farm />} />
              <Route path="product/:pname" element={<Product />} />
            </Route>


          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="category/*" element={<Search />}>
            <Route path="farms" element={<FarmSearch />} />
            <Route path="products" element={<ProductSearch />} />
          </Route>
          <Route path="product/*">
            <Route path=":pname" element={<Product />} />
          </Route>
          <Route path='browse-farms' element={<FarmsPage />} />
          <Route path='myfarm' element={<MyFarm />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="resources" element={<Cart />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default FarmersRouter