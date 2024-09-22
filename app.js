require('dotenv').config();
const express = require('express');
const sequelize = require('./models');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);
app.use('/reservations', reservationRoutes);

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
