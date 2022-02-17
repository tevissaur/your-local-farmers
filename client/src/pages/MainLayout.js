import SideNavBar from "../components/SideNavBar";
import { Button, Box, Flex, Heading, Spacer, Center, Text, Container, List, ListItem, OrderedList, UnorderedList, ListIcon, Link, Image } from "@chakra-ui/react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import SmartSmallIcon from "../components/SmartSmallIcon";
import css from './Homepage.css'
import { BsFillHeartFill } from 'react-icons/bs'
import customTheme from "../extendedTheme";
import wheat from '../assets/wheat.jpg'
import store from "../utils/store";
import { Outlet } from "react-router-dom";

const MainLayout = () => {


  return (
    <>
      <Flex>
        <SideNavBar />
        <Box m={4} flex="1">
          <Header />
            <Outlet />

          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default MainLayout;
