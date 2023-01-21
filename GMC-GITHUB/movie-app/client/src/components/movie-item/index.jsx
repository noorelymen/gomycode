import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
export default function MovieItem({ item }) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/movies/${item.id}`)}>
      <img
        src={item.poster}
        className="card-img-top movie-item-image"
        alt={item.title}
      />
    </div>
  );
}
