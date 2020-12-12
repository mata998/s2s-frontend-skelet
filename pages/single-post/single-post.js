///////// Open comment section ////////////

const btnOpenCommentSection = document.querySelector("#comment-section-btn");
btnOpenCommentSection.addEventListener("click", () => {
  const commentSection = document.querySelector(".footer");
  commentSection.classList.remove("hidden");
});

const btnDontComment = document.querySelector("#dont-comment-btn");
btnDontComment.addEventListener("click", () => {
  const commentSection = document.querySelector(".footer");
  commentSection.classList.add("hidden");
});

/////////// Show post logic //////////
