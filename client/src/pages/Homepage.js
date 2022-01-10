import SideNavBar from "../components/SideNavBar";
import { Button, Box, Flex, Heading, Spacer, Center, Text, Container, List, ListItem, OrderedList, UnorderedList, ListIcon, Link, Image} from "@chakra-ui/react";
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import SmartSmallIcon from "../components/SmartSmallIcon";
import css from './Homepage.css'
import { BsFillHeartFill } from 'react-icons/bs'
import customTheme from "../extendedTheme";
import wheat from '../assets/wheat.jpg'


const Homepage = () => {
  return (
<>
<Flex>
    <SideNavBar />
  <Box m={4} flex="1">
    <Header />
    <SearchBar />
<Container maxW='98%' mt={2}>
  <Box
        borderRadius='25px'
        height='100%'>
        <Flex justifyContent='center'>
          <Text
            fontSize='30px'
            fontWeight='bold'
            color='#3A7D44'
            textAlign='center'>
            Welcome to the online farmers market where you can get locally grown and baked goods!
          </Text>
        </Flex>
        <Flex justifyContent='Center'>
        </Flex>
        
        <Flex justifyContent='center' mt={3} flexWrap='wrap'>
          <SmartSmallIcon />
        </Flex>
    </Box>

<Container maxWidth='container.lg' pb={3}>
    <Flex 
      alignItems='center' 
      flexDir='column' 
      mt={5} 
      backgroundColor={customTheme.colors.primary.emeraldGreen} borderRadius="25px"
      boxShadow='5px 5px 1px 1px #69B578'
      padding={4}>
  <Heading as='h1' fontSize='4.25rem'color={customTheme.colors.primary.yellowGreen} pb={1}>Our Mission Statement!</Heading>
        <List textAlign='Left' fontWeight='bolder' color='white'>
          <ListItem> <ListIcon as={BsFillHeartFill} color='red'/>
            Support local farming communities
          </ListItem>

          <ListItem> <ListIcon as={BsFillHeartFill} color='red'/>
            To Raise awareness for developing and supporting those that generate goods in a renewable way
          </ListItem>

          <ListItem> <ListIcon as={BsFillHeartFill} color='red'/>
            Creating a community where people can get the food and resources they need to survive 
          </ListItem>
        </List>
    </Flex>
</Container>
    </Container>

<Container 
    mt={5}
    background={customTheme.colors.primary.lightGreen}
    borderRadius='25px'
    width="container.xl"
    boxShadow="5px 5px 1px 1px #3A7D44"
  >
  <Flex flexDir='Column' w='100%' mb={3}>
    <Heading as='h2' fontSize='2rem' textAlign='center' color={customTheme.colors.primary.emeraldGreen}>The Whys Behind The Whats</Heading>
        <Text fontWeight='600'>"The U.S. food and farming system contributes
    nearly $1 trillion to the national economy—
    or more than 13 percent of the gross domes-
    tic product—and employs 17 percent of the
    labor force.5 With a rapidly increasing world
    population and expanding global markets,
    saving American farmland is a prudent
    investment in world food supply and eco-
    nomic opportunity.
    Asian and Latin American countries are the
    most significant consumers of U.S. agricultur-
    al exports. Latin America, including Mexico,
    purchases an average of about $10.6 billion
    of U.S. agricultural exports each year. Asian
    countries purchase an average of $23.6 bil-
    lion/year, with Japan alone accounting for
    about $10 billion/year.6 Even as worldwide
    demand for a more diverse diet increases,
    many countries are paving their arable land
    to support rapidly expanding economies.
    Important customers today, they are expected
    to purchase more agricultural products in the
    future.
    While domestic food shortages are unlikely in
    the short term, the U.S. Census predicts the
    population will grow by 42 percent in the
    next 50 years. Many developing nations
    already are concerned about food security."
    <Link 
      href='https://sustainable-farming.rutgers.edu/wp-content/uploads/2017/10/Why-Save-Farmland.pdf'
      target='_blank' fontWeight='bold' color={customTheme.colors.primary.darkGreen}>
        To read more from this article Click Here!
    </Link>
    </Text>
    <Image borderRadius='25px' padding={1} src={wheat}></Image>
  </Flex>
</Container>

<Footer />
  </Box>
</Flex>
</>
  );
};

export default Homepage;
