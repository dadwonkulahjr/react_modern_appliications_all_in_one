import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Product = () => {
  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  });
  const navigate = useNavigate();
  return (
    <div>
      Products
      <br />
      <a
        className="btn btn-secondary"
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </a>
      &nbsp;
      <Link to={"/product/details/5"}>
        <a className="btn btn-secondary">Navigate to Product Detail - 5</a>
      </Link>
      {goToProduct && <Navigate to={"/product/details/3"} />}
      &nbsp;
      <a
        className="btn btn-secondary"
        onClick={() => {
          setGoToProduct({ setGoToProduct: true });
        }}
      >
        Navigate to Product - 3 (UseState)
      </a>
    </div>
  );
};
