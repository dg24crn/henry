const Movie = require("../models/Movies");

const getMovies = async () => {
    return await Movie.find();
};

const postMovies = async (movie) => {
    return await Movie.create(movie);
};

module.exports = { getMovies, postMovies };
