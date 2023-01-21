import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/productlist/${product.id}`)}>
      <img src={product.image} className="card-img" alt={product.title} />
      
    </div>
  );
}
