/** @format */

import { Box, TextField } from "@mui/material";
import { Product } from "@prisma/client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  products: Product[];
  setfilteredItem: Dispatch<SetStateAction<Product[]>>;
}

const SearchProducts = ({ setfilteredItem, products }: Props) => {
  const handleSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const searchText = event.target.value.toLowerCase();
    const searchProducts = products.filter((filterItem) =>
      filterItem.title.toLowerCase().includes(searchText)
    );
    setfilteredItem(searchProducts);
  };
  return (
    <Box sx={{ width: "50%", mt: 3 }}>
      <TextField
        sx={{ width: "100%" }}
        placeholder="Search Products.."
        onChange={handleSearch}
      />
    </Box>
  );
};

export default SearchProducts;
