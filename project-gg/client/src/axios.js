import axios from 'axios';

// trying to get an api to make this work

const instance = axios.create({
    baseURL:""
});

export default instance;





//api

// GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
// GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7