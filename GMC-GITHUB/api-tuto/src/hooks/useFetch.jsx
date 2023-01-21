import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // api call
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => {
        setLoading(false);
        setProducts(jsonData);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  return { products, loading, error };
};

export default useFetch;
