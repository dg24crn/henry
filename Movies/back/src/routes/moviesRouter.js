const { Router } = require('express')
const {moviesController, postMoviesController} = require('../controllers/moviesController')

const moviesRouter = Router()

moviesRouter.get('/', moviesController)
moviesRouter.post('/', postMoviesController)

module.exports = moviesRouter