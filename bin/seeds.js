const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/celebrities');
// const Movie = require('../models/movie');
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Matt',
    occupation: 'theatre guy',
    catchPhrase: 'yeah man yeah',
  },
  {
    name: 'Lisa',
    occupation: 'I will do anythign for Money....eh..Love',
    catchPhrase: 'you will probably loose money with your film',
  },
  {
    name: 'Andy',
    occupation: 'wannabe actor',
    catchPhrase: 'can I eat it?',
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (celebrity) => {
    console.log(celebrity.name)
  })
  mongoose.connection.close();
});

// const movies = [
//   {
//     title: '10 ways to get rid of ...',
//     genre: 'horror',
//     plot: 'students kill their professor over bad grades and try to dispose him',
//   },
//   {
//     title: 'how to travel the world for free',
//     genre: 'documentary',
//     plot: 'family of 5 travels the world for (almost) free',
//   },
//   {
//     title: 'John Wick',
//     genre: 'fun',
//     plot: 'guy kills all the people who were involved in stealing his car and killing his dog',
//   }
// ];
//
// Movie.create(movies, (err, docs) => {
//   if (err) { throw err };
//
//   docs.forEach( (movie) => {
//     console.log(movie.title)
//   })
//   mongoose.connection.close();
// });
