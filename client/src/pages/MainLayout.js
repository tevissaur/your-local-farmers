
import Header from '../components/NavComponents/Header'
import Footer from '../components/NavComponents/Footer'
import { Outlet } from "react-router-dom";
import MainContainer from "../components/MainContainer";

const MainLayout = () => {

  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
        <Footer />
      </MainContainer>
    </>
  );
};

export default MainLayout;
