document.getElementById('search-button').addEventListener('click', function(){
    const movieName=document.getElementById('movie-name').value;
    if(movieName) {
        fetch(`https://omdbapi.com/?t=${movieName}&apikey=bb4d9b24`)
        .then(response=>response.json())
        .then(data=>displayMovie(data))
        .catch(error=>console.error(error));
    }
});

function displayMovie(movie) {
    const movieInfo= document.getElementById('movie-info');
    movieInfo.innerHTML=`<div class='row movies'> 
    <div class="col-sm-6 poster-section">
    <img src="${movie.Poster}" class='movie-poster' alt="${movie.Title}">
    </div>
    <div class="col-sm-6 info-section">
    <p class="text-sm-start fs-6 card-title">Title: ${movie.Title}</p>
    <p class="text-sm-start fs-6 release-date">Released on: ${movie.Released}</p>
    <p class="text-sm-start fs-6 runtime">Run Time: ${movie.Runtime}</p>
    <p class="text-sm-start fs-6 genre">Genre: ${movie.Genre}</p>
    <p class="text-sm-start fs-6 language">Language: ${movie.Language}</p>
    <p class="text-sm-start fs-6 actor">Starring: ${movie.Actors}</p>
    <p class="text-sm-start fs-6 director">Directed By: ${movie.Director}</p>
    <p class="text-sm-start fs-6 writer">Writer: ${movie.Writer}</p>
    <p class="text-sm-start fs-6 rating">IMDB rating: ${movie.imdbRating}</p>
    <p class="text-sm-start fs-6 plot">Overview: ${movie.Plot}</p>
    </div>
    </div>
    `
}