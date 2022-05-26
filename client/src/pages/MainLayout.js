
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
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
