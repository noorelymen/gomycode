import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
export default function DetailsPage() {
  const params = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${params.id}`
  );

  return <div>DetailsPage</div>;
}
