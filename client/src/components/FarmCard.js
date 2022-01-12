import FarmCardAvailableGoods from './FarmCardAvailableGoods'
import { BiCookie } from 'react-icons/bi'
import { ImMug } from 'react-icons/im'
import customTheme from '../extendedTheme'
import StarsRender from './StarsRender';
import { Flex, Container, Image, Link, Heading, Text, Box, Button } from '@chakra-ui/react';
import localFarm from '../assets/localFarm.jpg'


function FarmCard({title, reviews, numericReview, categories}) {
    
    let filteredCategories = new Set([...categories])
    
    return (
        
            <Flex 
                flexDir='column'
                alignItems='center'
                border='2px solid black'
                padding={2} 
                borderRadius='25px'
                backgroundColor='lightyellow'
                mt={4}
                maxW='250px'
                alignSelf='flex-start'
                boxShadow='1px 1px black'

            >
                <Heading 
                    as='h6'
                    size='lg'
                    pb={2}
                    textAlign='center'
                    >{title}
                </Heading>
                <Image boxSize='190px' src={localFarm} borderRadius='25px'></Image>
                <Box fontWeight='600' mt={1}>Distance:100 Miles</Box>
                <Flex>
                <Text fontWeight='600' mt={1}>Goods Most Likely Available</Text>

                </Flex>
                <Flex mt={2} justifyContent='space-around' w='100%'>

                    {/* //for each project I want to run it through a swtich statement and if a product has x category append it if it hasnt already been appeneded */}
                    
                    <FarmCardAvailableGoods categories={[...filteredCategories].sort()}/>

                </Flex>
                <Flex mt={2} alignItems='center'>

                    <StarsRender numericReview={numericReview}/>

                </Flex>
                <Link><Button mt={3}  mb={0} backgroundColor={customTheme.colors.primary.lightGreen}>Visit Farm</Button></Link>
            </Flex>

    )
}

export default FarmCard
