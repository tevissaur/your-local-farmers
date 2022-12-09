import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FarmProductCard from "./components/FarmProductCard";
import FarmReviews from "./components/FarmReviews";
import UtilsService from '../../services/utils.service'
import { Box, Typography } from "@mui/material";
import store, { RootState } from "../../utils/store";
import { setSingleFarm } from "../../utils/actions";
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { useDispatch, useSelector } from "react-redux";
import { useGetFarmQuery } from "../../services/api.service";








const Farm = () => {
  const { farmStore: { farm: { _id, address, name, owners, products, story } } } = useSelector((state: RootState) => state)
  const dispatch = useDispatch();
  const { search } = useLocation()
  const { fid } = UtilsService.getSearchParams(search)
  const { isLoading, data, error } = useGetFarmQuery(fid);

  useEffect(() => {
    isLoading ? null : dispatch(setSingleFarm(data?.farmStore))
    console.log(data)
  }, [isLoading, data, error])




  return (
    <>
      {isLoading ? (<></>) : (
        <Box>
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

              <Box component='img' sx={{
                width: '350px',
                border: '5px double black',
                borderRadius: '10px'
              }} />
              {owners?.map((owner, idx) => (
                <Typography key={owner._id} fontWeight="600" mt={1}>
                  {owner.fullName}
                </Typography>
              ))}

              {/* <Typography fontWeight="600" mt={1}>
                {address}
              </Typography> */}

              <Typography>
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
