const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Movie = require('./movie');

const Showtime = sequelize.define(
  'Showtime',
  {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

// Define the relationship: a movie has many showtimes
Movie.hasMany(Showtime, { foreignKey: 'movieId', onDelete: 'CASCADE' });
Showtime.belongsTo(Movie, { foreignKey: 'movieId' });

module.exports = Showtime;
