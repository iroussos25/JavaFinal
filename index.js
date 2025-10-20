function captureData() {
  
}



let userInput = document.querySelector('#search__input').value;


let buttonEl = document.querySelector('#submit__button');
buttonEl.addEventListener('click', () => {

  buttonEl.innerHTML = <i class="fas fa-spinner fa-spin-pulse"></i>;
  buttonEl.disabled=true;
  buttonEl.computedStyleMap.opacity = 0.5;
  
  setTimeout(() => {
    buttonEl.innerHTML = <i class="fa-solid fa-magnifying-glass"></i>;
    buttonEl.disabled=false;
    buttonEl.computedStyleMap.opacity = 1;
  }
  , 3000)
});


async function main() {
  
  document.getElementById('submit__button').addEventListener('click', function(event) {
    event.preventDefault(); 
  });

  userInput = document.querySelector('#search__input').value;
  
  const movies = await fetch(`http://www.omdbapi.com/?s=${userInput}&apikey=279e89f2`);
  
  const data = await movies.json();
  const movieListEl = document.querySelector('.movie-list')
  movieListEl.innerHTML = (data.Search || [])
  .map(
    (movie) => movieHTML(movie)).join('');
    }

    main()
    function movieHTML(movie) {
        return `<div class="movie-card__container">
        <div class="movie-card">
                      <h3>${movie.Title} </h3>
                      <img src= "${movie.Poster || assets/no_image.jpg}" "alt="${movie.Title}" />
                      <p><b>Type:</b> ${movie.Type}</p>
                      <p><b>Year:</b> ${movie.Year} </p>
                      <p class="imdb__link"><b>imdbID:</b>${movie.imdbID} <a href="https://www.imdb.com/title/${movie.imdbID}/" target="_blank"></p>
                      
                 </div>
                    </div>`
            
    }











//  <div class="fa-solid fa-magnifying-glass--loading">
   //                         <i class="fas fa-spinner fa-spin-pulse"></i>
     //                   </div>

//async function fetchMovies(query) {
  //  const movies = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=279e89f2")
    //const movieData = await movies.json();
   // const movieListEl = document.querySelector(' .muvie__list');

//    movieListEl.innerHTML = movieData.map(movie => movieHTML(movie)).join('')
    

//}

//Main()

//function showMovies(id) {
//    locakStorage.setItem('id', id);
 //   console.log(wwindow.location')
  //      window.location.href = '$window.location.origin/movie.html'

//}

//function movieHTML(movie) {
 //   return `
  //  <div class="movie__card" onclick="showMovies('${movie.imdbID}')">
 //       <img src="${movie.Poster}" alt="${movie.Title}" class="movie__poster"/>
 //       <div class="movie__info">
 //           <h3 class="movie__title">${movie.Title}</h3>
 //           <p class="movie__year">${movie.Year}</p>
 //       </div>
  //  </div>
