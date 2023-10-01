/** @format */

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { updateQuantity } from "@/store/slices/cartSlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Cart = () => {
  const cartItem = useAppSelector((state) => state.carts.items);
  const dispatch = useAppDispatch();

  const increaseQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };
  const decreaseQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };
  const getCartTotalPrice = () => {
    let totalPrice = 0;
    cartItem.forEach((item) => (totalPrice += item.price * item.quantity));
    return totalPrice;
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "lavender",
      }}>
      {cartItem.length ? (
        <Box sx={{ maxWidth: 1080 }}>
          {cartItem.map((item) => (
            <Box key={item.id}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  my: 3,
                }}>
                <CardMedia
                  component="img"
                  image={item?.imgUrl || ""}
                  alt={item?.description}
                  sx={{
                    maxWidth: 220,
                    padding: 3,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 500,
                  }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      ml: 7,
                    }}>
                    <Box
                      sx={{
                        display: "flex",
                        py: 3,
                        alignItems: "center",
                        width: 440,
                      }}>
                      <Typography
                        component="div"
                        variant="h5">
                        {item?.title}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", ml: -1, fontSize: 22, mb: 3 }}>
                      <AttachMoneyIcon />
                      {item?.price}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        my: 5,
                        alignItems: "center",
                      }}>
                      <Box
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                          decreaseQuantity(item.id, item.quantity - 1)
                        }>
                        <RemoveCircleOutlineIcon />
                      </Box>
                      <Box>
                        <Typography variant="h5">{item.quantity}</Typography>
                      </Box>
                      <Box
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                          increaseQuantity(item.id, item.quantity + 1)
                        }>
                        <AddCircleOutlineIcon />
                      </Box>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: 3,
              gap: 3,
            }}>
            <Box>
              <Typography variant="h4">
                Total Price : $ {getCartTotalPrice()}
              </Typography>
            </Box>
            <Box>
              <Button variant="contained">Confirm Order</Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography variant="h4">Empty Cart.</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
