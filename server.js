//import section
import express from 'express';
import mongoose from 'mongoose';
import Games from './gamesDB.js';
import Pusher from "pusher";

//app config
const app = express();
const PORT = process.env.PORT || 3000;

const pusher = new Pusher({
    appId: "1229891",
    key: "e2a3ce06f8cf60d20597",
    secret: "fb49f86c535f57a44d59",
    cluster: "us2",
    useTLS: true
});

//const axios = require("axios").default;
;
// const routes = require ("./routes");



//code snippet from rapid api 
// var options = {
//     method: 'GET',
//     url: 'https://rawg-video-games-database.p.rapidapi.com/games/%7Bgame_pk%7D',
//     headers: {
//         'x-rapidapi-key': '6160306bc2msh5eb0e684cdf741bp118587jsn617e774aed38',
//         'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });


// middleware
app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin', '*');
    res.setHeader('Acces-Control-Allow-Origin', '*');
    next();
})


//DB config
const connection_url = "mongodb+srv://tony07:Tonydarashadow1994@@cluster0.d3cij.mongodb.net/gamedb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true

});

// this chould add a game in your list maybe?
const db = mongoose.connection

db.once('open', () => {
    console.log("DB is actually workig");
    const gameCollection = db.collection('gamedetails');
    const changeStream = gameCollection.watch();

    changeStream.on('change', (change) => {
        console.log(change)

        if (change.operationType === 'insert') {
            const addedGame = cahnge.fullDocument;
            pusher.trigger('added', 'inserted',
                {
                    name: addedGame.user
                });
        } else {
            console.log("Error double check pusher");
        }
    });
});

//add route
app.get("/", (req, res) => res.status(200).send('it works?!'));

app.get("/games/sync", (req, res) => {
    Games.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

app.get('/api/v1/games', (req, res) => {
    const gamesDB = req.body

    Games.create(gamesDB, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

// connect to mongo
//mongoose.connect(process.env.MONGODB_URI || );

//start
app.listen(PORT, function () {
    console.log(`API Server now listening on PORT ${PORT}!`);
});
