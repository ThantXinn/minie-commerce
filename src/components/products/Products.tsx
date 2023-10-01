/** @format */

import { Box } from "@mui/material";
import { Product } from "@prisma/client";
import Link from "next/link";
import ProductsCard from "../productsCard/ProductsCard";

interface Props {
  products: Product[];
}
const Products = ({ products }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        my: 5,
      }}>
      {products.map((item) => (
        <Link
          key={item.id}
          href={`productDetails/${item.id}`}
          style={{ display: "flex", textDecoration: "none" }}>
          <ProductsCard
            key={item.id}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl || ""}
            price={`$ ${item.price}`}
          />
        </Link>
      ))}
    </Box>
  );
};

export default Products;
