const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./user');
const Showtime = require('./showtime');

const Reservation = sequelize.define(
  'Reservation',
  {
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

// Define relationships: Reservation belongs to User and Showtime
Reservation.belongsTo(User, { foreignKey: 'userId' });
Reservation.belongsTo(Showtime, { foreignKey: 'showtimeId' });

// User has many reservations
User.hasMany(Reservation, { foreignKey: 'userId' });

// Showtime has many reservations
Showtime.hasMany(Reservation, { foreignKey: 'showtimeId' });

module.exports = Reservation;
