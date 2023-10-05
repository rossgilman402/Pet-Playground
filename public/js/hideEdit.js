function showEdit(event) {
  const buttonId = event.target.dataset.buttonid;
  var x = document.getElementById(`editPost${buttonId}`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const editButtons = document.querySelectorAll(".edit-button");
for (const button of editButtons) {
  button.addEventListener("click", showEdit);
}
