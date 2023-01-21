import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import HomeLayout from "../components/layouts/home";
import { moviesData } from "../data";

export default function DetailsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    const movie = moviesData.filter((item) => item.id === parseInt(params.id));
    setTimeout(() => {
      setData(movie);
      setLoading(false);
    }, 3000);
  }, []);
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
        {data && data.length > 0 && (
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  src={data[0].poster}
                  alt={data[0].title}
                  className="col-md-6"
                  height="300"
                />
                <h2 className="text-white mt-4">{data[0].title}</h2>
                <p className="text-muted">
                  <b>Category:</b> {data[0].category}
                </p>
                <p className="text-muted">
                  <b>Rating:</b> {data[0].rating}/10 (IMDB)
                </p>
                <p className="text-muted">
                  <b>Description:</b> <br /> {data[0].description}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <YouTube
                videoId={data[0].trailer}
                opts={opts}
                onReady={_onReady}
              />
            </div>
          </div>
        )}
      </div>
      {data && data.length === 0 && <h1 className="text-white">No data</h1>}
      {error && <h1 className="text-white">error</h1>}
    </HomeLayout>
  );
}
