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


const FarmersRouter = () => {

  return (
    <Router>

      <Routes>
        <Route exact path="/*" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="farm/:fname">

            <Route path="about" element={<Farm />}/>

            <Route path="store">
              <Route index element={<Farm />} />
              <Route path="product/:pname">
                <Route index element={<Product />} />
              </Route>
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