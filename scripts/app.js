import { renderMovies, createSearchAndSortBar } from "./movie-home/render.js";
import { handleCommentToggle, handleCommentSubmission } from "./movie-home/comments.js";
import { filterAndSortMovies } from "./movie-home/filters.js";
import { movies } from "./movie-home/data.js";
import { initTimerUI } from "./movie-timer/ui.js";
import { trackElapsedTime } from "./movie-timer/elapsedTime.js";

createSearchAndSortBar();

renderMovies(movies);

document
  .getElementById("sort-select")
  .addEventListener("change", filterAndSortMovies);
document
  .getElementById("search-input")
  .addEventListener("input", filterAndSortMovies);
document
  .getElementById("genre-select")
  .addEventListener("change", filterAndSortMovies);
document.addEventListener("click", handleCommentToggle);
document.addEventListener("click", handleCommentSubmission);

//timer
    // Initialize the UI
    initTimerUI();

    // Start tracking elapsed time
    trackElapsedTime();