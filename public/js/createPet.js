const loginFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const username = document.querySelector("#username").value.trim();
  const gender = document.querySelector("#gender").value.trim();
  const birthday = document.querySelector("#birthday").value.trim();
  const age = document.querySelector("#age").value.trim();
  const pet_type = document.querySelector("#pet-type").value.trim();
  const favorite_food = document.querySelector("#favorite-food").value.trim();
  const favorite_toy = document.querySelector("#favorite-toy").value.trim();
  const bio = document.querySelector("#bio").value.trim();
  const pic = document.querySelector("#pet-pic").value.trim();
  console.log("PICTUREEEEEE", pic);

  if (
    name &&
    username &&
    gender &&
    birthday &&
    age &&
    pet_type &&
    favorite_food &&
    favorite_toy &&
    bio
  ) {
    const response = await fetch("/api/pets/", {
      method: "POST",
      body: JSON.stringify({
        name,
        username,
        gender,
        birthday,
        age,
        pet_type,
        favorite_food,
        favorite_toy,
        bio,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //   document.location.replace("/profile");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector("#pet-submit")
  .addEventListener("submit", loginFormHandler);
