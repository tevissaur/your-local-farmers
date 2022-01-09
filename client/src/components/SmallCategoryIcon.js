import React from 'react'
import {Image, Flex, Box, Text} from '@chakra-ui/react'
import SmallIcon from '../components/SmallIcon.css'


const SmallCategoryIcon = ({ card }) => {
    return (
        <Flex justifyContent='space-evenly' flexGrow='3' className="icon-basket">
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
