<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';
import {Image, Flex, Box, Text, color} from '@chakra-ui/react'
import bakedGoods from '../assets/beverages2.jpg'
import DairyMeatEggs from '../assets/DairyMeatEggs.jpg'
import { border } from '@chakra-ui/react'
=======
import React from 'react'
import {Image, Flex, Box, Text} from '@chakra-ui/react'
>>>>>>> 0b84b2216b593c4d09831b7d4870c40214d59087
import SmallIcon from '../components/SmallIcon.css'


const SmallCategoryIcon = ({ card }) => {
    return (
        <Flex justifyContent='space-evenly' flexGrow='3' className="icon-basket">
            <Box>
                <Flex flexDir="column" alignItems='center' fontSize='15px' fontWeight='Bold'>
                    <Box className='smallCategoryIcon'>
                        <Link 
                        to={`/products/${card.title.toLowerCase()}`}
                        >
                             <Image src={card.image} boxSize='145px' height='125px' width='125px' borderRadius='50%'/>
                            <Text textAlign="center">{card.title}</Text>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default SmallCategoryIcon
