import { renderMovies } from "./render.js";

// Filters and sorts movies based on user input.
function filterAndSortMovies(movies) {
  const searchQuery = document
    .getElementById("search-input")
    .value.toLowerCase();
  const sortOption = document.getElementById("sort-select").value;
  const selectedGenre = document.getElementById("genre-select").value;

  // Filter movies base on title or acters or genre
  const filteredMovies = movies.filter(
    (movie) =>
      (movie.title.toLowerCase().includes(searchQuery) ||
        movie.actors.some((actor) =>
          actor.toLowerCase().includes(searchQuery)
        )) &&
      (selectedGenre === "all" || movie.genre.includes(selectedGenre))
  );

  switch (sortOption) {
    case "title-asc":
      filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      filteredMovies.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "year-asc":
      filteredMovies.sort((a, b) => a.movie_year - b.movie_year);
      break;
    case "year-desc":
      filteredMovies.sort((a, b) => b.movie_year - a.movie_year);
      break;
  }
  if (filteredMovies.length === 0) {
    const moviesContainer = document.getElementById("movies-container");
    moviesContainer.innerHTML = "<p>No movies found</p>";
    return;
  }

  renderMovies(filteredMovies);
}

export { filterAndSortMovies };
