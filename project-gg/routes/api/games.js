const axios = require('axios');
const express = require("express");
const router = express.Router();

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

router.get("/games", (req, res) => {
//   Use a regular expression to search titles for req.query.q
//   using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  var options = {
      method: 'GET',
      url: 'https://rawg-video-games-database.p.rapidapi.com/games/%7Bgame_pk%7D',
      headers: {
          'x-rapidapi-key': '6160306bc2msh5eb0e684cdf741bp118587jsn617e774aed38',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
      }
  };
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });
});

module.exports = router;
