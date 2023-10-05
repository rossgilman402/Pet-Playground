const editPostFormHandler = async (event) => {
  event.preventDefault();

  const id = document.getElementById("edit-button").getAttribute("data-id");
  const petUserName = location.href.substring(
    location.href.lastIndexOf("/") + 1
  );
  const title = document.getElementById("title").value.trim();
  const caption = document.getElementById("caption").value.trim();

  const response = await fetch(`/api/pet-post/${id}`, {
    method: "POST",
    body: JSON.stringify({
      title,
      caption,
      // picture,
    }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);

  if (response.ok) {
    document.location.replace(`/profile/${petUserName}`);
  } else {
    alert("Failed to edit new Post");
  }
};
const submitEditBtns = document.querySelectorAll(".editSubmitBtn");
for (const submitEditBtn of submitEditBtn) {
  submitEditBtn.addEventListener("click", editPostFormHandler);
}
