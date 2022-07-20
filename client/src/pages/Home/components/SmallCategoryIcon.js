import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';
import slugify from 'slugify'
import { LinkBase as Link } from '../../../components/LinkBase';
import categoryPlaceholderPhoto from '../../../assets/bakedGoods.jpg'


const SmallCategoryIcon = ({ card }) => {


    return (
        <Box justifyContent='space-evenly' flexWrap='wrap' className="icon-basket">

            <Link to={`/category/${slugify(card.name, { lower: true })}?cid=${card._id}`}>
                <Box sx={{
                    marginX: 1.5,
                    color: 'black',
                    ':hover': {
                        '> img': {
                            transform: 'scale(1.05)',
                            transition: 'all 300ms',
                            boxShadow: '0 0 5px black'
                        },
                    },
                }}>
                    <CardMedia
                        src={categoryPlaceholderPhoto}
                        component='img'
                        sx={{
                            ':hover': {
                                
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
