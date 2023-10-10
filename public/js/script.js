const likeHandler = async (event) => {
  //event.preventDefault();
  const likeBtn = event.target;
  const likeDisplay = likeBtn.parentElement.lastElementChild;
  let { id, likes: likeCount } = event.target.dataset;
  console.log("like buttons?");
  //   this is if the comment is unliked currently then a click will like and update like
  if (likeBtn.getAttribute("data-liked") === "false") {
    // This is an "like" action
    likeCount++;
    likeBtn.setAttribute("style", "background-color:black;");
    likeBtn.setAttribute("data-liked", "true");
    // ...
  } else {
    // This is an "unlike" action
    likeCount--;
    likeBtn.setAttribute("style", "background-color:white;");
    likeBtn.setAttribute("data-liked", "false");
    // ...
  }

  const response = await fetch(`/api/pet-post/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      likes: likeCount,
    }),
    headers: { "Content-Type": "application/json" },
  });

  //     //fetch to update db if success then
  if (response.ok) {
    likeBtn.setAttribute("data-likes", likeCount);
    likeDisplay.textContent = "Likes: " + likeCount;
  } else {
    alert("Failed to like post");
  }
};

const likeButtons = document.querySelectorAll(".like-button");

for (const button of likeButtons) {
  button.addEventListener("click", likeHandler);
}
