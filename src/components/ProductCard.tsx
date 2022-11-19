import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";
import { ProductType } from "@services/productsManager";

interface ProductCardProps {
  product: ProductType;
  onShowMore: (product: ProductType) => void;
}

export const ProductCard = ({ product, onShowMore }: ProductCardProps) => {
  const { productName, imagePrimary, price } = product;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {productName.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={productName}
        subheader={`Price: ${price}₪`}
      />
      <CardMedia
        component="img"
        height="194"
        image={imagePrimary}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <CardActions>
          <Button size="small" onClick={() => onShowMore(product)}>
            Show more
          </Button>
        </CardActions>
      </CardActions>
    </Card>
  );
};
