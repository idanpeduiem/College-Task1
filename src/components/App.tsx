import React from "react";
import { Paper, Typography } from "@mui/material";
import { Item } from "./Item";

export const App = () => {
  return (
    <>
      <Item
        price={1}
        imagePrimary="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        productName={"aviv"}
      ></Item>
    </>
  );
};
