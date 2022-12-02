const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
   const movieList = document.getElementById('movie-list');
   if (movies.length === 0) {
     movieList.classList.remove('visible');
    } else {
      movieList.classList.add('visible');
    }
    
    movieList.innerHTML = ''; 

    movies.forEach((movie) => {
      const movieEl = document.createElement('li');
      let text = movie.info.title + ' - ';

      for(const key in movie.info) {
         if(key != 'title') {
          text += `${key} : ${movie.info[key]}`;
         }
      }
      movieEl.textContent = text;
      movieList.append(movieEl);
    });
  }

const addMovieHandler = () => {
     var title = document.getElementById('title').value;
     var extraName = document.getElementById('extra-name').value;
     var extraValue = document.getElementById('extra-value').value;

     if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
      alert('Please fill all fields');
      return;
     }

     //creating newMovie object
     const newMovie = {
      //title: title : shorthand if we have exact same key and value name then we can omit : and the value
      info: {
        title,
        [extraName]: extraValue
      },
      id: Math.random()*10,
     }  

     movies.push(newMovie);

     renderMovies();

     document.getElementById('title').value = '';
     document.getElementById('extra-name').value = '';
     document.getElementById('extra-value').value = '';
}

addMovieBtn.addEventListener('click', addMovieHandler);