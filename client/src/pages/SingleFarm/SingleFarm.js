import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FarmProductCard from "./components/FarmProductCard";
import FarmReviews from "./components/FarmReviews";
import localFarm from '../../assets/localFarm.jpg'
import UtilsService from '../../services/utils.service'
import StoreService from '../../services/store.service'
import { Box, Typography } from "@mui/material";
import store from "../../utils/store";
import { setSingleFarm } from "../../utils/actions";
import { SINGLE_FARM } from "./queries/queries";
import { Wrapper, Status } from "@googlemaps/react-wrapper"








const Farm = () => {
  const { browseFarms: { singleFarm: { address, name, owners, products, story } } } = store.getState()
  const { search } = useLocation()
  const { fid } = UtilsService.getSearchParams(search)
  const { loading, data, error } = useQuery(StoreService.queryBuilder(SINGLE_FARM), { variables: { id: fid } });

  useEffect(() => {
    loading ? console.log(loading) : store.dispatch(setSingleFarm(data?.farmStore))
    console.log(data)
  }, [loading, data, error])




  return (
    <>
      {loading ? (<></>) : (
        <Box
          border="black 1px solid"
          borderRadius={5}
          backgroundColor="lightyellow"
          boxShadow="2px 2px 1px black"
          p="10px"
          px="20px"
          margin={15}
          justifyContent="space-evenly"
          sx={{
            border: 'black 1px solid',
            borderRadius: 5,
            backgroundColor: 'lightyellow',
            boxShadow: "2px 2px 1px black",
            p: '10px',
            m: 15,
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'column'
          }}
        >
          <Typography variant="h4" textAlign='center' marginY={2}>
            {name}
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingX: 3

          }}>

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '40%'
            }}>

              <Box component='img' src={localFarm} sx={{
                width: '350px',
                border: '5px double black',
                borderRadius: '10px'
              }} />
              {owners?.map((owner, idx) => (
                <Typography key={owner} fontWeight="600" mt={1}>
                  {owner.fullName}
                </Typography>
              ))}

              {/* <Typography fontWeight="600" mt={1}>
                {address}
              </Typography> */}

              <Typography
                as="samp"
                fontWeight="600"
                mt={1}
                color="green"
                fontSize="xl"
                textAlign="center"
              >
                {story}
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '50%',
              flexWrap: 'wrap',
            }}>
              {products?.map((product, idx) => (
                <FarmProductCard key={product._id} product={product} />
              ))}
            </Box>
          </Box>
          <FarmReviews />
        </Box>
      )}

    </>
  );
};

export default Farm;
