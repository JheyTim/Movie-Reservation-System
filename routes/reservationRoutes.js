const router = require('express').Router();
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const {
  createReservation,
  getUserReservations,
  cancelReservation,
  getShowtimeReservations,
} = require('../controllers/reservationController');

// Regular user routes
router.post('/', verifyToken, createReservation);
router.get('/my-reservations', verifyToken, getUserReservations);
router.delete('/:reservationId', verifyToken, cancelReservation);

// Admin route
router.get(
  '/showtime/:showtimeId',
  verifyToken,
  isAdmin,
  getShowtimeReservations
);

module.exports = router;
