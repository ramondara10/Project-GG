const express = require('express');
const Pusher = require('pusher');
const Games = require('./models/gamesDB.js');
const mongoose = require('mongoose');
//app config
const app = express();
const PORT = process.env.PORT || 3000;
const apiRoutes = require("./routes/api/games")

const pusher = new Pusher({
    appId: "1229891",
    key: "e2a3ce06f8cf60d20597",
    secret: "fb49f86c535f57a44d59",
    cluster: "us2",
    useTLS: true
});

// middleware
app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin', '*');
    next();
})

app.use("/api", apiRoutes);


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
            const addedGame = change.fullDocument;
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

//start
app.listen(PORT, function () {
    console.log(`API Server now listening on PORT ${PORT}!`);
});
