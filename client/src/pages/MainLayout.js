
import Header from '../components/NavComponents/Header'
import Footer from '../components/NavComponents/Footer'
import { Outlet } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import store from "../utils/store";

const MainLayout = () => {
  const { ui: { drawerOpen } } = store.getState()

  return (
    <>
      <Header />
      <MainContainer
        open={drawerOpen}
      >
        <Outlet />
        <Footer />
      </MainContainer>
    </>
  );
};

export default MainLayout;
