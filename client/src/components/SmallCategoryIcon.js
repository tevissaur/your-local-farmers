import { Box, CardMedia, Typography, Link } from '@mui/material';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import bakedGoods from '../assets/beverages2.jpg'
import DairyMeatEggs from '../assets/DairyMeatEggs.jpg'



const SmallCategoryIcon = ({ card }) => {
    return (
        <Box justifyContent='space-evenly' flexWrap='wrap' className="icon-basket">

            <Link to={`/category/${card.title.toLowerCase()}`} component={ReactLink} underline='none'>
                <Box sx={{
                    marginX: 1.5,
                    color: 'black',
                    ':hover': {
                        transform: 'scale(1.05)'
                    },
                    transition: 'all 200ms',
                }}>
                    <CardMedia
                        src={card.image}
                        component='img'
                        sx={{
                            ':hover': {
                                boxShadow: '0 0 5px black'
                            },
                            height: '125px',
                            width: '125px',
                            margin: 'auto',
                            borderRadius: '50%'
                        }} />
                    <Typography textAlign="center" paddingY={1.5}>{card.title}</Typography>
                </Box>
            </Link>
        </Box>
    )
}

export default SmallCategoryIcon
