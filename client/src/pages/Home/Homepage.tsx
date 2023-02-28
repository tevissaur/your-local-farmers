import Box from '@mui/material/Box'
import CategoryHeader from './components/CategoryHeader'
import TopFarmsWidget from './components/TopFarmsWidget'
import WhatIs from './components/WhatIs'
import MissionStatement from '../AboutUs/components/MissionStatement'
import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'



const HomepageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

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
