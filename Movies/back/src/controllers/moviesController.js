const { getMovies, postMovies } = require('../services/moviesService');

const moviesController = async (req, res) => {
    try {
        const movies = await getMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving movies", error });
    }
};

const postMoviesController = async (req, res) => {
    try {
        const movie = req.body;
        const postMovie = await postMovies(movie);
        res.status(201).json(postMovie);
    } catch (error) {
        res.status(500).json({ message: "Error creating movie", error });
    }
};

module.exports = { moviesController, postMoviesController };
