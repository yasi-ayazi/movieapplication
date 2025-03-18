function createCommentSection(movieId) {
  return `
    <div class="comment-section" id="comment-section-${movieId}" style="display: none;">
      <form class="comment-form">
        <textarea id="comment-${movieId}" class="comment-textarea" placeholder="Write your comment here..."></textarea>
        <button type="submit" class="comment-btn" data-movie-id="${movieId}">Submit</button>
      </form>
      <ul id="comment-list-${movieId}" class="comment-list"></ul>
    </div>
  `;
}

// Handles toggling the visibility of the comment section.
function handleCommentToggle(event) {
  if (event.target.classList.contains("toggle-comment")) {
    const movieId = event.target.getAttribute("data-movie-id");
    const commentSection = document.getElementById(
      `comment-section-${movieId}`
    );

    // Hide all other comment sections
    document.querySelectorAll(".comment-section").forEach((section) => {
      if (section.id !== `comment-section-${movieId}`) {
        section.style.display = "none";
        section.previousElementSibling.innerHTML = "Show Comments";
      }
    });

    // Toggle the clicked movie’s visibility
    commentSection.style.display =
      commentSection.style.display === "none" ||
      commentSection.style.display === ""
        ? "block"
        : "none";

    event.target.textContent =
      commentSection.style.display === "block"
        ? "Hide Comments"
        : "Show Comments";
  }
}

// Adding a comment with clicking the "Submit" button.
function handleCommentSubmission(event) {
  if (event.target.classList.contains("comment-btn")) {
    event.preventDefault();
    const movieId = event.target.getAttribute("data-movie-id");
    const commentInput = document.getElementById(`comment-${movieId}`);
    const commentList = document.getElementById(`comment-list-${movieId}`);

    if (commentInput.value.trim() !== "") {
      const newComment = document.createElement("li");
      newComment.textContent = commentInput.value;
      commentList.appendChild(newComment);
      commentInput.value = "";
    }
  }
}

export { createCommentSection, handleCommentToggle, handleCommentSubmission };
