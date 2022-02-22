import { Box, Typography } from "@mui/material"
import { categoryData } from "../../categoryData"
import SmallCategoryIcon from "../SmallCategoryIcon"










const TopFarmsWidget = () => {


    return (
        <>
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
                        Here Are Some Of Our Top Farmers
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
        </>
    )
}

export default TopFarmsWidget