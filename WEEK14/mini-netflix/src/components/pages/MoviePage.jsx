import PageLayout from '../layouts/PageLayout'
import MovieLayout from '../layouts/MovieLayout';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../../data/movies.js';

const MoviePage = () => {

  return (

    <PageLayout>
      <MovieLayout/>
    </PageLayout>
  )
}

export default MoviePage
