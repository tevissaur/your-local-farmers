
import React from 'react'
import { Flex, Container, Image, Link, Heading, Text, Box, Button } from '@chakra-ui/react'
import localFarm from '../assets/localFarm.jpg'
import { GiGrainBundle, GiFruitBowl, GiMeatCleaver } from 'react-icons/gi'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { BiCookie } from 'react-icons/bi'
import { ImMug } from 'react-icons/im'
import customTheme from '../extendedTheme'

import FarmCardAvailableGoods from './FarmCardAvailableGoods'
import StarsRender from './StarsRender';




function FarmCard({ title, reviews, numericReview, categories }) {
    console.log(categories)
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
                <GiGrainBundle fontSize='25px' />
                <GiFruitBowl fontSize='25px' />
                <GiMeatCleaver fontSize='25px' />
                <BiCookie fontSize='25px' />
                <ImMug fontSize='25px' />
            </Flex>
            <Flex mt={2} alignItems='center'>
                <Text ms={1} fontWeight='600'>Reviews:</Text>
                <AiFillStar color='green' fontSize='25px' />
                <AiFillStar color='green' fontSize='25px' />
                <AiFillStar color='green' fontSize='25px' />
                <AiFillStar color='green' fontSize='25px' />
                <AiOutlineStar color='green' fontSize='25px' />
                <Text fontWeight='600'>(5)</Text>
            </Flex>
            <Link><Button mt={3} backgroundColor={customTheme.colors.primary.lightGreen}>Visit Farm</Button></Link>
        </Flex>

    )
}

export default FarmCard
