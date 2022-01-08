import React from 'react'
import {Image, Flex, Box, Text, color} from '@chakra-ui/react'
import bakedGoods from '../assets/beverages2.jpg'
import DairyMeatEggs from '../assets/DairyMeatEggs.jpg'
import { border } from '@chakra-ui/react'
import SmallIcon from '../components/SmallIcon.css'
import SmartSmallIcon from './SmartSmallIcon'

function SmallCategoryIcon(props) {
    console.log(props)
    return (
        <Flex justifyContent='space-evenly'>
            <Box>
                <Flex flexDir="column" alignItems='center' fontSize='15px' fontWeight='Bold'>
                    <Box className='smallCategoryIcon'>
                        <Image src={card.image} boxSize='145px' height='125px' width='125px'borderRadius='50%'/>
                        <Text textAlign="center">{card.title}</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default SmallCategoryIcon
