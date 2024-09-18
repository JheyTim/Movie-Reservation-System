const router = require('express').Router();
const { register, login } = require('../controllers/authController');

// Auth routes
router.post('/signup', register);
router.post('/login', login);

module.exports = router;
