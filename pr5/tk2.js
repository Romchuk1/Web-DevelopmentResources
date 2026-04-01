const usersList = document.getElementById('users');
const errorMessage = document.getElementById('error');

fetch('https://jsonplaceholder.typicode.com/usersfd')
  .then(response => response.json())
  .then(users => {
    users.forEach((user) => {
      let li = document.createElement('li');
      li.textContent = user.name + " ( " + user.email + " )";
      usersList.appendChild(li);
    });
  })
  .catch(error => {
    console.error(error);
    if (errorMessage) {
      errorMessage.textContent = "Помилка завантаження";
    }
  });