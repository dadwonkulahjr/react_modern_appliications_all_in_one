import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { productId } = useParams();
  return (
    <div className="text-warning h3">
      {productId === undefined || null ? "" : `Id: ` + productId}
    </div>
  );
};
