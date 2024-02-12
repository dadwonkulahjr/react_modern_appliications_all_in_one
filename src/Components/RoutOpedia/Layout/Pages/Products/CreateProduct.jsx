import React from "react";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const navigate = useNavigate();

  return (
    <div>
      Create Product
      <a className="btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </a>
    </div>
  );
};
