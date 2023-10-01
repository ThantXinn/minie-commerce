/** @format */

import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  description: string;
  imgUrl?: string | null;
  price: string;
}

const ProductsCard = ({ title, description, imgUrl, price }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 357,
        display: "flex",
        justifyContent: "center",
      }}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
        }}>
        <CardMedia
          component="img"
          image={imgUrl || ""}
          alt={title}
          sx={{ width: 100, mt: 2 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div">
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div">
            {price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductsCard;
