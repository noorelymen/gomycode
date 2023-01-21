import React from "react";
import ProductList from "../components/product-list/ProductList";

import PageLayout from '../components/layouts/PageLayout'
import Hero from '../components/basic/Hero'

export default function HomePage() {
  return (

    <PageLayout>
        <Hero />
      <ProductList />
    </PageLayout>

  )
}

