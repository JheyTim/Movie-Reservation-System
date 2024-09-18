const router = require('express').Router();
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const {
  createMovie,
  getMovies,
  updateMovie,
  deleteMovie,
} = require('../controllers/movieController');
const {
  createShowtime,
  getShowtimes,
} = require('../controllers/showtimeController');

// Movie routes
router.post('/', verifyToken, isAdmin, createMovie);
router.get('/', getMovies);
router.put('/:movieId', verifyToken, isAdmin, updateMovie);
router.delete('/:movieId', verifyToken, isAdmin, deleteMovie);

// Showtime routes
router.post('/:movieId/showtimes', verifyToken, isAdmin, createShowtime);
router.get('/:movieId/showtimes', getShowtimes);

module.exports = router;
