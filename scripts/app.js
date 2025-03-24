import { renderMovies, createSearchAndSortBar } from "./movie-home/render.js";
import {
  handleCommentToggle,
  handleCommentSubmission,
} from "./movie-home/comments.js";
import { filterAndSortMovies } from "./movie-home/filters.js";
import { fetchMovies } from "./movie-home/data-fetcher.js";
import { initTimerUI } from "./movie-timer/ui.js";
import { trackElapsedTime } from "./movie-timer/elapsedTime.js";

let allMovies = [];

async function initApp() {
  allMovies = await fetchMovies();

  createSearchAndSortBar(allMovies);
  renderMovies(allMovies);

document
  .getElementById("sort-select")
  .addEventListener("change", () => filterAndSortMovies(allMovies));
document
  .getElementById("search-input")
  .addEventListener("input", () => filterAndSortMovies(allMovies));
document
  .getElementById("genre-select")
  .addEventListener("change", () => filterAndSortMovies(allMovies));
document.addEventListener("click", handleCommentToggle);
document.addEventListener("click", handleCommentSubmission);

//timer
initTimerUI();
trackElapsedTime();
}

initApp();
