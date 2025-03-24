export async function fetchMovies() {
    const response = await fetch("https://raw.githubusercontent.com/yasi-ayazi/yasi-ayazi.github.io/refs/heads/main/data.json");
    const movies = await response.json();
    return movies;
  }