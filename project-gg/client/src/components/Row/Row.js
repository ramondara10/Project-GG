import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";

//const base_url = ""

function Row({ title, fetchUrl, isLargeRow }) {
  const [games, setGames] = useState([]);
  //add a const for the trailer
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setGames(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, []); //fetchURL?

  //youtube video section

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  console.log(games);

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* title */}
      <div className="row_poster">
        {/* {games.map(game =>( */}
        {/* <img
               key={game.id}
               className={`row_poster ${isLargeRow && "row_posterLarge"}`}
               src={`${base_url}${isLargeRow ? game.game_path : game.backdrop_path}`}
                alt={game.name}/> */}
        {/* ))} */}
      </div>

      <YouTube videoId={trailerUrl} opts={opts} />
      {/* i need a video id on trailerUrl */}

      {/* container -- posters */}
    </div>
  );
}

export default Row;
