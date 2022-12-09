import Box from '@mui/material/Box'
import CategoryHeader from './components/CategoryHeader'
import TopFarmsWidget from './components/TopFarmsWidget'
import WhatIs from './components/WhatIs'
import MissionStatement from '../AboutUs/components/MissionStatement'
import styled from '@mui/material/styles/styled';
import React from 'react'



const HomepageContainer = styled('section')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexGrow: 1
}))

const Homepage = () => {


  return (
    <HomepageContainer>
      <CategoryHeader />
      <TopFarmsWidget />
      <MissionStatement />
      <WhatIs />
    </HomepageContainer>
  );
};

export default Homepage;
