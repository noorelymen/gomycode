import React from "react";
import "./style.css";
export default function SearchBar({ setSearchText }) {
  return (
    <input
      type="text"
      placeholder="search ..."
      className="form-control search-input"
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}
