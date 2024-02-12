import React from "react";
import { useParams } from "react-router-dom";

export const CryptoDetails = () => {
  const { queryStrings, id } = useParams();
  return (
    <div className="text-warning h3">
      {queryStrings === undefined || "" || null
        ? ""
        : `Crypto Symbol: ` + queryStrings}
      <br /> {id === undefined || null ? "" : `Id: ` + id.toString()}
    </div>
  );
};
