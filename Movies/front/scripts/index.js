const renderFilms = require('./renderFilms');
const axios = require('axios');

axios.get('http://localhost:3000/movies')
  .then(response => {
    const movies = response.data;
    movies.forEach(movie => {
      renderFilms(movie);
    });
  })
  .catch(error => {
    console.error('Error al obtener las películas:', error);
  });

const moviesForm = document.querySelector('form');

moviesForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = document.getElementById('titleInput').value.trim();
  const year = document.getElementById('yearInput').value.trim();
  const director = document.getElementById('directorInput').value.trim();
  const duration = document.getElementById('durationInput').value.trim();
  const genre = document.getElementById('genreInput').value.trim();
  const rate = document.getElementById('ratingInput').value.trim();
  const poster = document.getElementById('posterInput').value.trim();

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    alert('RELLENA TODOS LOS CAMPOS');
    return;
  }

  const data = {
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster
  };

  try {
    const response = await axios.post("http://localhost:3000/movies", data);
    console.log(response);
    renderFilms(response.data);
    moviesForm.reset();
  } catch (error) {
    console.log(error);
  }
});
