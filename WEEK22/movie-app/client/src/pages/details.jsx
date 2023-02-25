import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import HomeLayout from "../components/layouts/home";
import useFetch from "../hooks/useFetch";
export default function DetailsPage() {
  
  const params = useParams();
  const {data,error,loading} = useFetch(`/movies/${params.id}`)

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady =(event)=> {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  return (
    <HomeLayout>
      <div className="movie-details-wrapper p-4">

        {loading && <h1 className="text-white">Loading ...</h1>}
        {data && data.movie && (
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  src={data.movie.poster}
                  alt={data.movie.title}
                  className="col-md-6"
                  height="300"
                />
                <h2 className="text-white mt-4">{data.movie.title}</h2>
                <p className="text-muted">
                  <b>Category:</b> {data.movie.category}
                </p>
                <p className="text-muted">
                  <b>Rating:</b> {data.movie.rating}/10 (IMDB)
                </p>
                <p className="text-muted">
                  <b>Description:</b> <br /> {data.movie.description}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <YouTube
                videoId={data.movie.trailer}
                opts={opts}
                onReady={_onReady}
              />
            </div>
          </div>
        )}
      </div>
      {!data && <h1 className="text-white">No data</h1>}
      {error && <h1 className="text-white">error</h1>}
    </HomeLayout>
  );
}
