const createPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const caption = document.querySelector("#caption").value.trim();
  const petUserName = location.href.substring(
    location.href.lastIndexOf("/") + 1
  );
  //   console.log(petUserName);
  //   const picture = document.querySelector("#pet-pic").value.trim();

  if (
    title &&
    caption
    // && picture
  ) {
    const response = await fetch("/api/pet-post/", {
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
      alert("Failed to Create new Post");
    }
  }
};

document
  .querySelector("#newPostForm")
  .addEventListener("submit", createPostFormHandler);
