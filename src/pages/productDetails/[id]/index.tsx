/** @format */

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart, updateQuantity } from "@/store/slices/cartSlice";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const ProductDetailsPage = () => {
  const router = useRouter();
  const product_Id = Number(router.query.id);
  const state_Products = useAppSelector((state) => state.products.items);
  const cart_Products = useAppSelector((state) => state.carts.items);

  const cart_Product = cart_Products.find((cart) => cart.id === product_Id);
  const product = state_Products.find((item) => item.id === product_Id);
  const dispatch = useAppDispatch();

  if (!product) return null;

  //update the number of count on cart-icon
  const addToCart_fun = () => {
    if (!cart_Product) {
      dispatch(addToCart({ ...product, quantity: 1 })); //add new item if there is no item in the cart_store
    } else {
      let update_quantity = 1;
      cart_Products.map((item) => {
        item.id === product_Id
          ? (update_quantity = item.quantity + 1)
          : update_quantity;
        return update_quantity;
      });
      dispatch(updateQuantity({ ...product, quantity: update_quantity })); //copy the existing item and update the quantity without adding as new item to cart_store
    }
    router.push("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100vw",
        minHeight: "100vh",
        padding: 2,
        margin: "0 auto",
        bgcolor: "lightcyan",
      }}>
      <Card
        sx={{
          display: "flex",
          my: 3,
          maxWidth: 1080,
        }}>
        <CardMedia
          component="img"
          image={product?.imgUrl || ""}
          alt={product?.description}
          sx={{
            maxWidth: 320,
            padding: 10,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 500,
          }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1 0 auto",
              maxWidth: 430,
              padding: 3,
              justifyContent: "center",
            }}>
            <Typography
              component="div"
              variant="h5"
              sx={{ mb: 3 }}>
              {product?.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ mb: 3 }}>
              {product?.description}
            </Typography>
            <Box sx={{ display: "flex", ml: -1, fontSize: 22, mb: 3 }}>
              <AttachMoneyIcon />
              {product?.price}
            </Box>
            <Box>
              <Button
                variant="contained"
                onClick={() => {
                  addToCart_fun();
                }}>
                Add To Cart
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductDetailsPage;
