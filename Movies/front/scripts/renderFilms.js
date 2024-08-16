const filmsSection = document.getElementById('films')

const renderFilms = (movie) => {
    const movieElement = document.createElement('article')
    const containerMovie = document.createElement('div')

    movieElement.classList.add('movie')
    containerMovie.classList.add('divMovie')

    movieElement.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`

    containerMovie.innerHTML = `
    <h3 id="movieTitleText">${movie.title}</h3>
    <hr>
    <p><strong>Año:</strong><br>${movie.year}</p>
    <p><strong>Director:</strong><br>${movie.director}</p>
    <p><strong>Duracion:</strong><br>${movie.duration}</p>
    <p><strong>Genero:</strong><br>${movie.genre}</p>
    <p><strong>Rating:</strong><br>${movie.rate}</p>
    `

    movieElement.appendChild(containerMovie)
    filmsSection.appendChild(movieElement)

}

module.exports = renderFilms