import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { Link as ReactLink } from "react-router-dom"
import { categoryData } from "../../categoryData"
import SmallCategoryIcon from "./SmallCategoryIcon"
import store from "../../utils/store"
import { setActivePage } from "../../utils/actions"










const TopFarmsWidget = () => {


    return (
        <>
            <Box sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: '40px auto'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                    <Typography variant="h5" sx={{
                        marginY: '10px',
                        fontSize: '28px'
                    }}>
                        Here Are Some Of Our Top Farmers
                    </Typography>
                    <Typography variant="h5" sx={{
                        marginY: '10px',
                        fontSize: '20px',
                        alignSelf: 'center'
                    }}>
                        <Link component={ReactLink} to='/farms' underline="none" sx={{ ':hover': { textDecoration: 'underline' } }} >
                        See More
                    </Link>
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