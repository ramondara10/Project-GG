import requests from "../requests";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css/Banner.css';

function Banner() {
    const[game,setGame] = useState([]);

    //randomly select a background image
    useEffect(()=>{
        async function fetchData(){
            const request =await axios.get(requests.fetch);
            setGame(
                request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
            );
        }
        fetchData();
    },[]);

    console.log(game);

    //stack overflow function 
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
         <header className="banner"
         style={{
             backgroundSize:"cover",
             //backgroundImage:"url",
             backgroundPosition:"center center",
         }}
         >
            <div className="banner_contents">
            {/* background image for header */}
            {/* title */}
            <h1 className="banner_title">
                {game?.title || game?.name}
            </h1>
            
            {/* buttons */}
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            
            {/* description */ }
            <h1 className="banner_description">
                {/* truncate(game?.overview, 125) */}
            </h1>
            <div className="banner_fadeBottom"/>
            
          

            </div>      
        </header>
    )
}

export default Banner
