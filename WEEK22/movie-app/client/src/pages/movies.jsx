import React, { useState, useEffect } from "react";
import HomeLayout from "../components/layouts/home";
import SearchBar from "../components/search-bar";
import MovieList from "../components/movie-list";
//import { moviesData,users,sayHello } from "../data";
//import sayHello2 from "../data";
import useFetch from "../hooks/useFetch";

export default function MoviesPage() {
 
  //CALL useFetch() here
  const [searchText, setSearchText] = useState("");
  const { data, loading, error } = useFetch("/api/movies");
  
  // const [searchText, setSearchText] = useState("");
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // useEffect(() => {
  //   if (searchText === "") {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setData(moviesData);
  //       setLoading(false);
  //     }, 3000);
  //   } else {
  //     setLoading(true);
  //     setTimeout(() => {
  //       const searched_data = moviesData.filter((item) =>
  //         item.title.includes(searchText)
  //       );
  //       setData(searched_data);
  //       setLoading(false);
  //     }, 3000);
  //   }
  // }, [searchText]);
  
  return (
    <HomeLayout>
      <div className="search-wrapper p-4 mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <SearchBar setSearchText={setSearchText} />
          </div>
        </div>
      </div>
      <div className="movies-wrapper p-4">
        {loading && <h1 className="text-white">Loading ...</h1>}
        {!loading && data && data.movies.length > 0 && <MovieList data={data.movies} />}
        {data && data.length === 0 && <h1 className="text-white">No data</h1>}
        {error && <h1 className="text-white">error</h1>}
      </div>
    </HomeLayout>
  );
}
