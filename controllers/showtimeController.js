const Movie = require('../models/movie');
const Showtime = require('../models/showtime');

// Create a showtime for a movie (Admin only)
const createShowtime = async (req, res) => {
  const { movieId } = req.params;
  const { date, time, capacity } = req.body;

  try {
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    const showtime = await Showtime.create({
      movieId,
      date,
      time,
      capacity,
    });

    res.status(201).json(showtime);
  } catch (error) {
    res.status(500).json({ message: 'Error creating showtime', error });
  }
};

// Get all showtimes for a specific movie
const getShowtimes = async (req, res) => {
  const { movieId } = req.params;

  try {
    const showtimes = await Showtime.findAll({ where: { movieId } });
    res.status(200).json(showtimes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching showtimes', error });
  }
};

module.exports = { createShowtime, getShowtimes };
