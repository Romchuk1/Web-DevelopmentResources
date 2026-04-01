const postsList = document.getElementById("posts");
const errorMessage = document.getElementById("error");

async function loadPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await response.json();

    posts.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title + " — " + post.body;
      postsList.appendChild(li);
    });

  } catch (error) {
    errorMessage.textContent = "Помилка завантаження";
    errorMessage.style.color = "red";
  }
}

loadPosts();