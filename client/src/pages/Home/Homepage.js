import Box from '@mui/material/Box'
import CategoryHeader from './components/CategoryHeader'
import TopFarmsWidget from './components/TopFarmsWidget'
import Banner from '../../components/Banner'
import WhatIs from './components/WhatIs'
import MissionStatement from '../AboutUs/components/MissionStatement'
import { useEffect } from 'react'
import store from '../../utils/store'

const Homepage = () => {


  return (
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
  );
};

export default Homepage;
