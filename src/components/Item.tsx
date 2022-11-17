import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface ItemProps {
  imagePrimary: string;
  imageSecondary: string;
  price: number;
  storeName: string;
  productName: string;
  desc: string;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Item = ({
  imagePrimary,
  productName,
  price,
  desc,
  imageSecondary,
  storeName,
}: ItemProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {productName.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={productName}
        subheader={"Price: " + price + "₪"}
      />
      <CardMedia
        component="img"
        height="194"
        image={imagePrimary}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CardMedia
            component="img"
            height="194"
            image={imageSecondary}
            alt="Paella dish"
          />
          <Typography paragraph sx={{ fontweight: "bold" }}>
            Store name:
          </Typography>
          <Typography paragraph>{storeName}</Typography>
          <Typography paragraph sx={{ fontweight: "bold" }}>
            Description:
          </Typography>
          <Typography paragraph>{desc}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
