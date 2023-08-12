import React from "react";
import { useInventory } from "../contexts/InventoryContext";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { data } = useInventory();
  const { id } = useParams();

  const product = data.find((item) => item.id === Number(id));

  console.log(product)

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.stock}</p>
      <p>{product.sku}</p>
      <p>{product.supplier}</p>
    </div>
  );
};

export default SingleProduct;
