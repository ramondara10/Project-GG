import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

//const base_url = ""

function Row({ title,fetchUrl,isLargeRow }) {
    const [games, setGames] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setGames(request.data.results);
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, []);//fetchURL?

    console.log(games)

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


            {/* container -- posters */}
        </div>
    )
}

export default Row;