
async function main() {
  const buttonEl = document.querySelector('#submit__button');
  const searchInput = document.querySelector('#search__input');
  
  buttonEl.addEventListener('click', async function(event) {
    event.preventDefault();
    
    const userInput = searchInput.value.trim();
    
    if (!userInput) {
      alert('Please enter a movie name');
      return;
    }
    
    // Store original button content
    const originalContent = buttonEl.innerHTML;
    
    // Show spinner and disable button
    buttonEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    buttonEl.disabled = true;
    buttonEl.style.opacity = '0.7';
    
    try {
      // Fetch movies from API
      const movies = await fetch(`http://www.omdbapi.com/?s=${userInput}&apikey=279e89f2`);
      const data = await movies.json();
      
      // Update movie list
      const movieListEl = document.querySelector('.movie-list');
      
      if (data.Response === "True") {
        movieListEl.innerHTML = data.Search.map(movie => movieHTML(movie)).join('');
      } else {
        movieListEl.innerHTML = '<p style="text-align: center; padding: 20px;">No movies found. Try another search!</p>';
      }
      
      // Keep spinner for 3 seconds total
      setTimeout(() => {
        buttonEl.innerHTML = originalContent;
        buttonEl.disabled = false;
        buttonEl.style.opacity = '1';
      }, 3000);
      
    } catch (error) {
      console.error('Error fetching movies:', error);
      
      // Restore button immediately on error
      buttonEl.innerHTML = originalContent;
      buttonEl.disabled = false;
      buttonEl.style.opacity = '1';
      
      alert('Error fetching movies. Please try again.');
    }
  });
}

function movieHTML(movie) {
  return `
    <div class="movie-card__container">
      <div class="movie-card">
        <h3>${movie.Title}</h3>
        <img src="${movie.Poster !== 'N/A' ? movie.Poster : './assets/no-image.jpg'}" alt="${movie.Title}" />
        <p><b>Type:</b> ${movie.Type}</p>
        <p><b>Year:</b> ${movie.Year}</p>
        <p class="imdb__link">
          <b>imdbID:</b> ${movie.imdbID} 
          <a href="https://www.imdb.com/title/${movie.imdbID}/" target="_blank">View on IMDb</a>
        </p>
      </div>
    </div>
  `;
}

// Initialize when page loads
main();

function openMenu() {
document.body.classList += " menu--open"
}

function closeMenu() {
document.body.classList.remove ('menu--open')

}