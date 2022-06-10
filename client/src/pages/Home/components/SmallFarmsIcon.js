import { Box, CardMedia, Typography, Link } from '@mui/material';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import localFarm from '../../../assets/localFarm.jpg'
import slugify from 'slugify';
import store from '../../../utils/store'
import { setSingleFarm } from '../../../utils/actions';



const SmallFarmsIcon = ({ id, name }) => {
    return (
        <Box justifyContent='space-evenly' flexWrap='wrap' className="icon-basket">

            <Link to={`/farm/${ slugify(name, { lower: true }) }/store?fid=${ id }`} component={ReactLink} underline='none'>
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
                        src={localFarm}
                        component='img'
                        sx={{
                            ':hover': {

                            },
                            height: '125px',
                            width: '125px',
                            margin: 'auto',
                            borderRadius: '50%'
                        }} />
                    <Typography textAlign="center" paddingY={1.5}>{ name }</Typography>
                </Box>
            </Link>
        </Box>
    )
}

export default SmallFarmsIcon
