import { useQuery } from "@apollo/client";
import { Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import store, { RootState } from "../../../utils/store";
import SmallCategoryIcon from './SmallCategoryIcon'


const CategoryHeader = () => {
    const { search: { categories } } = useSelector((state: RootState) => state)
    return (
        <Box sx={{
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'center',
            flexWrap: 'wrap',
        }}>
            <Box>
                <Typography variant="h5" sx={{
                    textAlign: 'center',
                    marginY: '10px',
                    fontSize: '36px'
                }}>
                    Explore Our Most Popular Categories
                </Typography>
            </Box>

            {/* Ignore this garbage right now */}
            <Box sx={{
                margin: '5px auto',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {categories.map((category, index) => {
                    return (<SmallCategoryIcon key={index + 30} />)
                })}
            </Box>

        </Box>
    )
}

export default CategoryHeader