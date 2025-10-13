import React, { useState } from 'react';

async function main(){
    console.log(await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=279e89f2").json())

}

main()














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
    </div>
    `
}