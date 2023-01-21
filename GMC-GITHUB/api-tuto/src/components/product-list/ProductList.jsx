import React from "react";
import ProductCard from "../basic/ProductCard"
import useFetch from "../../hooks/useFetch";

export default function ProductList() {
  const { products, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <div className="section movie">
        <div className="container">
            <div className="content">
              <h1 className="section-title">Latest Collection</h1>
              <hr />
              <div className="row">

                {/* {data && data.map((el) => <h1>{el.title}</h1>)} */}
                {products ? products.map(product =>{
                    return(
                        <div className="column" key={product.id}> 
                            < ProductCard product={product} />
                        </div>
                    )
                }) : "No Data was found!"} 
              </div>
            </div>
        </div>
    </div>
  );
}
