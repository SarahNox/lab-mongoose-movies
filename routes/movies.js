var express = require('express');
var router = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) { return next(err) }
    res.render('movies/index', {
      movies: movies
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/', (req, res, next) => {
  const movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };

 Movie.create(movieInfo, (err, doc) => {
   if(err) {
     next(err);
   } else {
     res.redirect('movies');
   }
 });
});

router.get('/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId, (err, movie) => {
    if (err) { return next(err); }
    res.render('movies/show', { movie: movie });
  });
});

router.get('/:id/edit', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId, (err, movie) => {
    if (err) { return next(err); }
    res.render('movies/edit', { movie: movie });
  });
});

router.post('/:id', (req, res, next) => {
  const movieId = req.params.id;
  const updates = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };

  Movie.findByIdAndUpdate(movieId, updates, (err, movie) => {
    if (err){ return next(err); }
    return res.redirect('/movies');
  });
});

router.get('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Movie.findByIdAndRemove(id, (err, movie) => {
    if (err){ return next(err); }
    return res.redirect('/movies');
  });
});

module.exports = router;
