import React from 'react'
import {Image, Flex, Box, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import SmallIcon from '../components/SmallIcon.css'


const SmallCategoryIcon = ({ card }) => {
    return (
        <Flex justifyContent='space-evenly' flexGrow='3' className="icon-basket">
            <Box>
                <Flex flexDir="column" alignItems='center' fontSize='15px' fontWeight='Bold'>
                    <Link to="category" className='smallCategoryIcon'>
                        <Image src={card.image} boxSize='145px' height='125px' width='125px'borderRadius='50%'/>
                        <Text textAlign="center">{card.title}</Text>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}

export default SmallCategoryIcon
