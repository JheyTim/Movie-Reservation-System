const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Movie = sequelize.define(
  'Movie',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    posterImage: {
      type: DataTypes.STRING,
      allowNull: false, // URL to the poster image
    },
  },
  { timestamps: true }
);

module.exports = Movie;
