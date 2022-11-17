import React from "react";
import { Item } from "./Item";
import { products, ProductType } from "../services/productsManager";

const App = () => {
  return (
    <>
      {products.map(
        ({
          id,
          price,
          productName,
          desc,
          imagePrimary,
          imageSecondary,
          storeName,
        }: ProductType) => (
          <Item
            key={id}
            price={price}
            imageSecondary={imageSecondary}
            imagePrimary={imagePrimary}
            productName={productName}
            storeName={storeName}
            desc={desc}
          />
        )
      )}
    </>
  );
};

export default App;
