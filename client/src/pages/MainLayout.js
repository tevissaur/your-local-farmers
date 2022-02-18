import SideNavBar from "../components/SideNavBar";
import Box from '@mui/material/Box'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import store from "../utils/store";

const MainLayout = () => {
  const { ui: { drawerOpen } } = store.getState()

  return (
    <>
      <Box display='flex' flexDirection='column'>
        <Header />
        <SideNavBar />
        <MainContainer
          open={drawerOpen}
        >
          <Outlet />
          <Footer />
        </MainContainer>
      </Box>
    </>
  );
};

export default MainLayout;
