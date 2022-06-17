import { Box, Typography, Link } from "@mui/material";
import { Link as ReactLink, useParams } from "react-router-dom";
import { imageSeeds } from "../../../imageSeeds";
import slugify from 'slugify';
import store from "../../../utils/store";

const FarmProduct = ({ product }) => {
  const { browseFarms: { singleFarm } } = store.getState()
  const { fname } = useParams()
  const cardArr = imageSeeds.map((card) => card);

  const foundProduct = cardArr.filter((arr) => arr.name === product.name);

  const foundProductImage = foundProduct.map((card) => card.img);
  
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'space-between',
      paddingX: 3 
    }}>
      <Box
        component='img'
        sx={{
          maxWidth: '200px'
        }}
        objectFit="cover"
        src={`${foundProductImage}`}
        alt="Dan Abramov"
      />

      <Link component={ReactLink} to={`/farm/${ slugify( fname, { lower: true }) }/store/product/${ slugify( product.name, { lower: true }) }?fid=${singleFarm._id}&pid=${product._id}`}>
        <Box flexDirection="column" alignItems="center">
          <Typography fontSize="2xl">{product.name}</Typography>

          <Typography fontSize="2xl">${product.price}</Typography>
        </Box>
      </Link>

      <Typography>
        Available:{" "}
        <span style={{ fontWeight: "bolder" }}>{product.quantity}</span>
      </Typography>
    </Box>
  );
};

export default FarmProduct;
