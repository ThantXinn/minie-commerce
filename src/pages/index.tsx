/** @format */
import Products from "@/components/products/Products";
import SearchProducts from "@/components/searchProducts/SearchProducts";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/slices/productSlice";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Box, Typography } from "@mui/material";
import { Product } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const cartItem = useAppSelector((state) => state.carts.items);
  const [filteredItem, setfilteredItem] = useState<Product[]>([]);

  const updateQuantity = () => {
    let totalQuantity = 0;
    cartItem.forEach((quantity) => (totalQuantity += quantity.quantity));
    return totalQuantity;
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (products.length) {
      setfilteredItem(products);
    }
  }, [products]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 1600,
        bgcolor: "lightcyan",
      }}>
      <Link
        href={"/cart"}
        style={{ textDecoration: "none", color: "black" }}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: 3,
          }}>
          <ShoppingBagIcon sx={{ fontSize: 35, mr: 7 }} />
          {cartItem.length > 0 && (
            <Typography sx={{ position: "absolute", mr: 4 }}>
              {updateQuantity()}
            </Typography>
          )}
        </Box>
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <SearchProducts
          products={products}
          setfilteredItem={setfilteredItem}
        />
        <Products products={filteredItem} />
      </Box>
    </Box>
  );
}
