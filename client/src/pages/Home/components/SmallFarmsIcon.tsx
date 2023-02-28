import { Box, CardMedia, Typography, Link } from '@mui/material';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import slugify from 'slugify';



const SmallFarmsIcon = ({ id, name }: { id: string; name: string; }) => {
    return (
        <div>

            <Link to={`/farm/${ slugify(name, { lower: true }) }/store?fid=${ id }`} component={ReactLink} underline='none'>
                <div>
                    {/* <CardMedia
                        src={localFarm}
                        component='img'
                        sx={{
                            ':hover': {

                            },
                            height: '125px',
                            width: '125px',
                            margin: 'auto',
                            borderRadius: '50%'
                        }} /> */}
                    <p>{ name }</p>
                </div>
            </Link>
        </div>
    )
}

export default SmallFarmsIcon
