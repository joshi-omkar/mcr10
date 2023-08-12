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
      <img style={{width: '360px'}} src={product.imageUrl} alt={product.name} />
      <p> Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>SKU: {product.sku}</p>
      <p>Supplier: {product.supplier}</p>
    </div>
  );
};

export default SingleProduct;
