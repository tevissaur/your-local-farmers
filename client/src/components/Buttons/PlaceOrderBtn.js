import { QUERY_PRODUCTS, QUERY_FARMS } from "../utils/queries";
import { Button, Modal, Typography } from "@mui/material";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_PO } from "../utils/mutations";
import { Box } from "@mui/system";



const PlaceOrderBtn = ({ cartItems, pickUpDate, pickUpTime, totalPrice, buyer, }) => {
  
  const { loading, data, error } = useQuery(QUERY_FARMS);
  const [createPO] = useMutation(CREATE_PO);
  const farmList = data ? data.farms : [];


  const redirectHome = () => {
   window.location.href="/"
   localStorage.removeItem("cartItems")
  };

  const handlePlaceOrder = () => {
    const PO = cartItems.reduce((POByFarm, cartItem) => {
      const foundFarm = farmList.find((farm) => {
        return farm.products.find((product) => product._id === cartItem._id);
      });
    

      const foundFarmPO = POByFarm.findIndex(
        (farmOrder) => farmOrder._id === foundFarm._id
      );

      if (foundFarmPO !== -1) {
        POByFarm[foundFarmPO].productIds.push(cartItem._id);
      } else {
        POByFarm.push({
          farm: foundFarm,
          productIds: [cartItem._id],
          pickUpTime,
          pickUpDate,
          totalPrice: cartItem.price * cartItem.quantity
        });
      }

      return POByFarm;
    }, []);
    console.log(PO)

    PO.map(async (farmPO) => {
      const newPO = await createPO({
        variables: {
          PO: {
            seller: farmPO.farm._id,
            buyer: buyer,
            dateCreated: Date(),
            items: farmPO.productIds,
            pickUpTime: `${pickUpDate} ${pickUpTime}`,
            orderTotal: farmPO.totalPrice
          },
        },
      });
      console.log(newPO);
    });

    

    if (loading) {
      return "loading";
    }
    

  };

  return (
    <div>
      <Button backgroundColor="primary.yellowGreen" onClick={handlePlaceOrder}>
        Place Your Order
      </Button>
      <Modal open={false} onClose={redirectHome}>
        {/* <ModalOverlay /> */}
        <Box>
          <Typography>Your Local Farmer</Typography>
          {/* <ModalCloseButton /> */}
          <Box>
            <Typography>
              Your order has been submitted.Thank you for shopping with us! See
              you soon!
            </Typography>
          </Box>

          <Typography>
            <Button
              backgroundColor="primary.yellowGreen"
              mr={3}
              onClick={redirectHome}
            >
              Close
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default PlaceOrderBtn;
