import React from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
const dispatch = useDispatch();
// const navigate = useNavigate(); onClick={()=>navigate(`/products/${product.id}`)}
  return (
    <div className="card" >
    <img src={product.image} className="card-img" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">
        <button onClick={() => dispatch({ type: "ADD", payload: product })}>Add to cart</button>
      </p>
    </div>
  </div>
  );
}
