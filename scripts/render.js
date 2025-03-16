import { movies } from "./data.js";
import { createCommentSection } from "./comments.js";

function createSearchAndSortBar() {
  const mainContent = document.getElementById("main");
  const searchSortContainer = document.createElement("div");
  searchSortContainer.classList.add("search-sort");

  const genres = [
    ...new Set(movies.flatMap((movie) => movie.genre.split(", "))),
  ];

  searchSortContainer.innerHTML = `
    <div class="filter__wrapper">
      <label for="search-input">Search Movies / Actors:</label>
      <input class="filter__input" type="text" id="search-input" placeholder="Search by title or actor..." />
    </div>
    <div class="filter__wrapper">
      <label for="sort-select">Sort Movies:</label>
      <select class="filter__input" id="sort-select">
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
        <option value="year-asc">Year (Oldest First)</option>
        <option value="year-desc">Year (Newest First)</option>
      </select>
    </div>
    <div class="filter__wrapper">
      <label for="genre-select">Filter by Genre:</label>
      <select class="filter__input" id="genre-select">
        <option value="all">All Genres</option>
        ${genres
          .map((genre) => `<option value="${genre}">${genre}</option>`)
          .join("")}
      </select>
    </div>
  `;

  mainContent.insertBefore(
    searchSortContainer,
    document.getElementById("movies-container")
  );
}

function renderMovies(movieList) {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = "";

  movieList.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    moviesContainer.appendChild(movieCard);
  });
}

function createMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  movieCard.innerHTML = `
    <img src="${movie.poster_url}" alt="${movie.title}" class="movie-poster">
    <div class="movie-info">
      <h2 class="movie-title">${movie.title}</h2>
      <p class="movie-date"><strong>Released:</strong> ${movie.movie_year}</p>
      <p class="movie-genre"><strong>Genre:</strong> ${movie.genre
        .split(", ")
        .map((genre) => `<span class="pill">${genre}</span>`)
        .join(" ")}</p>
      <p class="movie-price"><strong>Price:</strong> $${movie.price}</p>
      <p class="movie-rating"><strong>Rating:</strong> ⭐ ${movie.rating}</p>
      <p class="movie-director"><strong>Director:</strong> <span class="badge">${
        movie.director
      }</span></p>
      <p class="movie-actors"><strong>Actors:</strong> ${movie.actors
        .map((actor) => `<span class="badge">${actor}</span>`)
        .join(" ")}</p>
      <p class="movie-description">${movie.description}</p>
      <button class="toggle-comment" data-movie-id="${
        movie.id
      }">Show Comments</button>
      ${createCommentSection(movie.id)}
    </div>
  `;

  return movieCard;
}

export { renderMovies, createSearchAndSortBar };