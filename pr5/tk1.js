const postsList = document.getElementById('posts');
const errorMessage = document.getElementById('error');

async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    posts.forEach((post) => {
      let li = document.createElement('li');
      li.textContent = post.title + " ( " + post.body + " )";
      postsList.appendChild(li);
    });

  } catch (error) {
    console.error(error);
    if (errorMessage) {
      errorMessage.textContent = "Помилка завантаження";
    }
  }
}

getPosts();