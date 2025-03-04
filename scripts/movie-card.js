const movie = {
  id: 1,
  title: "Interstellar",
  description:
    "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
  movie_year: 2014,
  director: "Christopher Nolan",
  actors: [
    "Matthew McConaughey",
    "Anne Hathaway",
    "Jessica Chastain",
    "Michael Caine",
    "Casey Affleck",
    "Mackenzie Foy",
    "John Lithgow",
    "Ellen Burstyn",
    "Matt Damon",
  ],
  poster_url:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  price: "120.00",
};
document.addEventListener("DOMContentLoaded", function () {
  const moviesContainer = document.getElementById("movies-container");

  function createMovieCard(movie) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
            <img src="${movie.poster_url}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-date">Released: ${movie.movie_year}</div>
                <div class="movie-director">Director: ${movie.director}</div>
                <div class="movie-price">Price: <span class= "movie-price-number">$${movie.price}</span></div>
                <div class="movie-description">${movie.description}</div>
            </div>
        `;

    return movieCard;
  }

  function createActorsSection(actors) {
    const actorsSection = document.createElement("div");
    actorsSection.classList.add("actors-section");

    actors.forEach((actor) => {
      const actorBadge = document.createElement("span");
      actorBadge.classList.add("actor-badge");
      actorBadge.textContent = actor;
      actorsSection.appendChild(actorBadge);
    });

    return actorsSection;
  }

  function createCommentSection(movieId) {
    const commentSection = document.createElement("div");
    commentSection.classList.add("comment-section");

    commentSection.innerHTML = `
            <div class="comment-title">Leave a Comment</div>
            <div class="comment-form">
                <textarea id="comment-${movieId}" placeholder="Write your comment here..." class="comment-textarea"></textarea>
                <div class="comment-btn-wrapper">
                    <button class="comment-btn" data-movie-id="${movieId}">Submit</button>
                </div>
            </div>
            <ul id="comment-list-${movieId}" class="comment-list"></ul>
        `;

    return commentSection;
  }

  if (moviesContainer) {
    const movieCardElement = createMovieCard(movie);
    const actorsSectionElement = createActorsSection(movie.actors);
    const commentSectionElement = createCommentSection(movie.id);

    moviesContainer.appendChild(movieCardElement);
    moviesContainer.appendChild(actorsSectionElement);
    moviesContainer.appendChild(commentSectionElement);
  }

  initializeComments();
});

function initializeComments() {
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("comment-btn")) {
      const movieId = event.target.getAttribute("data-movie-id");
      const commentInput = document.getElementById(`comment-${movieId}`);
      const commentList = document.getElementById(`comment-list-${movieId}`);

      if (commentInput && commentList && commentInput.value.trim() !== "") {
        const newComment = document.createElement("li");
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = "";
      }
    }
  });
}
