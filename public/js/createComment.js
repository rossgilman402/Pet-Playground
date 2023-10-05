const addCommentPostFormHandler = async (event) => {
  event.preventDefault();

  const id = event.target.dataset.id;
  const comment = document.querySelector(`#commentInput${id}`).value.trim();

  const response = await fetch(`/api/comments/${id}`, {
    method: "POST",
    body: JSON.stringify({
      comment,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const { commentData, findPet } = await response.json();

  const commentListInput = document.querySelector(`#commentList${id}`);
  const liEl = document.createElement("li");
  liEl.textContent = findPet.username + ": " + comment;
  commentListInput.append(liEl);

  console.log(response);

  if (response.ok) {
  } else {
    alert("Failed to create new Comment");
  }
};

const buttons = document.querySelectorAll(".commentButton");

for (const button of buttons) {
  button.addEventListener("click", addCommentPostFormHandler);
}
