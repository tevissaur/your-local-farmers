import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as geolib from 'geolib'
import Homepage from "./pages/Home/Homepage";
import Product from "./pages/SingleProduct/SingleProduct";
import Profile from "./pages/Profile/Profile"
import Category from "./pages/ProductByCategory/CategoryProducts";
import Farm from "./pages/SingleFarm/SingleFarm";
import MyFarm from './pages/MyFarm/MyFarm'
import FarmsPage from "./pages/BrowseFarms/FarmsPage";
import Cart from "./components/Cart/Cart";
import MainLayout from "./pages/MainLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import NoPage from "./pages/NoPage";
import { useEffect } from "react";
import store from "./utils/store";
import { setCoords } from "./resources/location/location.actions";


const FarmersRouter = () => {
  const { location: { coords: { latitude, longitude } } } = store.getState()

  useEffect(() => {
    if ('geolocation' in navigator && (latitude === 0 && longitude === 0)) {
      navigator.geolocation.getCurrentPosition((e) => {
        const coords = { 
          latitude: e.coords.latitude, 
          longitude: e.coords.longitude
        }
        store.dispatch(setCoords(coords))
      })
    }
  }, [])

  useEffect(() => {
    console.log(latitude, longitude)
  }, [latitude, longitude])

  return (
    <Router>

      <Routes>
        <Route exact path="/*" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="farm/:fname">

            <Route path="about" element={<Farm />}/>

            <Route path="store">
              <Route index element={<Farm />} />
              <Route path="product/:pname" element={<Product />} />
            </Route>


          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="category/*" element={<Category />}>
            <Route path=":name" element={<Category />} />
          </Route>
          <Route path="product/*">
            <Route path=":pname" element={<Product />} />
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
  )
}

export default FarmersRouter