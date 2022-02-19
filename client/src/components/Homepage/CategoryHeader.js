import { Typography, Box } from "@mui/material";
import { categoryData } from '../../categoryData'
import SmallCategoryIcon from '../../components/SmallCategoryIcon'


const CategoryHeader = () => {

    return (
        <Box sx={{
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'center',
            flexWrap: 'wrap',
        }}>
            <Box sx={{
                position: 'absolute',
                backgroundColor: 'peachpuff',
                width: '100%',
                height: '65%',
                top: '0',
                zIndex: -1
            }}>

            </Box>
            <Box>
                <Typography variant="h5" sx={{
                    textAlign: 'center',
                    marginY: '10px',
                    fontSize: '36px'
                }}>
                    Explore Our Most Popular Categories
                </Typography>
            </Box>

            <Box sx={{
                margin: '5px auto',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {categoryData.map((card, index) => {
                    return (<SmallCategoryIcon key={index} card={card} />)
                })}
            </Box>
        </Box>
    )
}

export default CategoryHeader