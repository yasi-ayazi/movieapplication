import { renderMovies, createSearchAndSortBar } from "./render.js";
import { handleCommentToggle, handleCommentSubmission } from "./comments.js";
import { filterAndSortMovies } from "./filters.js";
import { movies } from "./data.js";

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
