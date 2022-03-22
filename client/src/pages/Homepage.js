import Box from '@mui/material/Box'
import CategoryHeader from '../components/Homepage/CategoryHeader'
import TopFarmsWidget from '../components/Homepage/TopFarmsWidget'
import Banner from '../components/Banner'
import WhatIs from '../components/Homepage/WhatIs'
import MissionStatement from '../components/AboutUs/MissionStatement'
import { memo } from 'react'

const Homepage = () => {


  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='flex-start'
        position='relative'
        flexGrow={1}
      >
        <Banner />
        <CategoryHeader />
        <TopFarmsWidget />
        <MissionStatement />
        <WhatIs />
      </Box>

    </>
  );
};

export default Homepage;
