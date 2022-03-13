import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { Link as ReactLink } from "react-router-dom"
import { categoryData } from "../../categoryData"
import SmallCategoryIcon from "./SmallCategoryIcon"
import store from "../../utils/store"
import { setActivePage, setTopFarms } from "../../utils/actions"
import { useQuery } from "@apollo/client"
import { QUERY_FARMS } from "../../utils/queries"
import { useEffect } from "react"
import FarmCard from "../Storefront/FarmCard"
import SmallFarms from "./SmallFarms"










const TopFarmsWidget = () => {
    const { loading, data, error } = useQuery(QUERY_FARMS)
    const { farm: { topFarms } } = store.getState()
    console.log(topFarms)

    useEffect(() => {
        loading ? console.log(loading) : store.dispatch(setTopFarms(data?.farms))

    }, [data, loading, error])

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
                {loading ? (
                    <>

                    </>
                ) : (
                    <Box sx={{
                        margin: '5px auto',
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}>
                        {topFarms?.map((farm, index) => {
                            return (
                                <SmallFarms key={farm._id} id={farm._id}
                                    title={farm.name} />
                            )
                        })}
                    </Box>
                )}

            </Box>
        </>
    )
}

export default TopFarmsWidget