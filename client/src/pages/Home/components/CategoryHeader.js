import { useQuery } from "@apollo/client";
import { Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { categoryData } from '../../../categoryData'
import store from "../../../utils/store";
import { QUERY_CATEGORIES } from "../queries/getCategories";
import SmallCategoryIcon from './SmallCategoryIcon'


const CategoryHeader = () => {
    const { categories } = store.getState()
    const { loading, data, error } = useQuery(QUERY_CATEGORIES)

    useEffect(() => {
        loading ? console.log(loading) : console.log(data)
        console.log(categories)
    }, [loading, data])


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
                {categories.categories.map((category, index) => {
                    return (<SmallCategoryIcon key={index + 30} card={category} />)
                })}
            </Box>

        </Box>
    )
}

export default CategoryHeader