import React from 'react'
import PageLayout from '../layouts/PageLayout'
import Hero from '../basic/Hero'
import MovieLayout from '../layouts/MovieListing'

export default function HomePage() {
  return (

    <PageLayout>
        <Hero />
        <MovieLayout />
    </PageLayout>

  )
}
