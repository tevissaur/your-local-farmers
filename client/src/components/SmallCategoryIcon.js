import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import bakedGoods from '../assets/beverages2.jpg'
import DairyMeatEggs from '../assets/DairyMeatEggs.jpg'
import SmallIcon from '../components/SmallIcon.css'


const SmallCategoryIcon = ({ card }) => {
    return (
        <Box justifyContent='space-evenly'className="icon-basket">
            <Link to={`/category/${card.title.toLowerCase()}`}> 
                <Box>
                    <Box flexDir="column" alignItems='center' fontSize='15px' fontWeight='Bold'>
                        <Box className='smallCategoryIcon' ms={5}>
                            {/* <Image src={card.image} boxSize='145px' height='125px' width='125px'borderRadius='50%'/> */}
                            <Typography textAlign="center">{card.title}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Box>
    )
}

export default SmallCategoryIcon
