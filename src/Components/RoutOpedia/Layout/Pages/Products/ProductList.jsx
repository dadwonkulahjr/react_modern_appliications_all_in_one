import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  const navigate = useNavigate();
  return (
    <div>
      Product List
      <a
        className="btn btn-secondary"
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </a>
    </div>
  );
};
