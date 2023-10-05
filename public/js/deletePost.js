const deletePostFormHandler = async (event) => {
  event.preventDefault();
  const petUserName = location.href.substring(
    location.href.lastIndexOf("/") + 1
  );
  const id = event.target.dataset.id;
  console.log(id);
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
const deleteButtons = document.querySelectorAll(".delete-buttons");

for (const deleteButton of deleteButtons) {
  deleteButton.addEventListener("click", deletePostFormHandler);
}
