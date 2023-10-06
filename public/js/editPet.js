function editPetForm() {
  var x = document.getElementById("editPetEl");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
const editPetFormHandler = async (event) => {
  console.log("updating");

  console.log(event.target.dataset);
  const petid = event.target.dataset.petid;
  console.log(petid);
  const username = document.querySelector("#updateusername").value.trim();
  const favorite_food = document
    .querySelector("#updatefavorite-food")
    .value.trim();
  const favorite_toy = document
    .querySelector("#updatefavorite-toy")
    .value.trim();
  const bio = document.querySelector("#updatebio").value.trim();
  // const pic = document.querySelector("#updatepet-pic").value.trim();
  // console.log("PICTUREEEEEE", pic);

  if (username && favorite_food && favorite_toy && bio) {
    const response = await fetch(`/api/pets/${petid}`, {
      method: "PUT",
      body: JSON.stringify({
        username,
        favorite_food,
        favorite_toy,
        bio,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/profile/${username}`);
      console.log(response);
    } else {
      alert("Failed to Update New Pet");
    }
  }
};

document
  .querySelector("#pet-update")
  .addEventListener("submit", editPetFormHandler);
