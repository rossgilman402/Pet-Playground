const createPetFormHandler = async (event) => {
  event.preventDefault();

  const form = document.querySelector("#pet-submit");
  const formData = new FormData(form);
  console.log(formData);
  const response = await fetch("/api/pets/", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    document.location.replace(`/profile/${formData.get("username")}`);
  } else {
    alert("Failed to Create New Pet");
  }
};

document
  .querySelector("#pet-submit")
  .addEventListener("submit", createPetFormHandler);
