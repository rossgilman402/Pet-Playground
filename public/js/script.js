function likeFunction(event) {
  event.preventDefault();
  const likeBtn = event.target;
  const likeDisplay = likeBtn.parentElement.lastElementChild;
  let { id, likes: likeCount } = event.target.dataset;

  //   this is if the comment is unliked currently then a click will like and update like
  if (likeBtn.getAttribute("style") === "background-color:white;") {
    likeBtn.setAttribute("style", "background-color:black;");

    likeCount++;

    //fetch to update db if success then
    likeBtn.setAttribute("data-likes", likeCount);
    likeDisplay.textContent = "Likes: " + likeCount;
  } else {
    likeBtn.setAttribute("style", "background-color:white;");
    likeCount--;

    //fetch to update db if success then
    likeBtn.setAttribute("data-likes", likeCount);
    likeDisplay.textContent = "Likes: " + likeCount;
  }
}

const likeButtons = document.querySelectorAll(".like-button");

for (const button of likeButtons) {
  button.addEventListener("click", likeFunction);
}
