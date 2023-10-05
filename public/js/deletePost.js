const deletePostFormHandler = async (event) => {
  event.preventDefault();

  const id = document.getElementById("delete-button").getAttribute("data-id");
  const petUserName = location.href.substring(
    location.href.lastIndexOf("/") + 1
  );

  const response = await fetch(`/api/pet-post/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);

  if (response.ok) {
    document.location.replace(`/profile/${petUserName}`);
  } else {
    alert("Failed to delete Post");
  }
};

document
  .querySelector("#newPostForm")
  .addEventListener("submit", deletePostFormHandler);
