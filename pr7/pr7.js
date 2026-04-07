let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let passwordInput = document.getElementById("password");
let status = document.getElementById("status");

let user = JSON.parse(localStorage.getItem("user"));

if (user) {
  nameInput.value = user.name;
  emailInput.value = user.email;
  phoneInput.value = user.phone;
  passwordInput.value = user.password;
}

document.getElementById("form").oninput = function () {
  let data = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    password: passwordInput.value
  };

  localStorage.setItem("user", JSON.stringify(data));
};

document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();

  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    phoneInput.value == "" ||
    passwordInput.value == ""
  ) {
    status.textContent = "Заповніть всі поля!";
    return;
  }

  let saved = JSON.parse(localStorage.getItem("user"));

  if (
    saved &&
    emailInput.value == saved.email &&
    passwordInput.value == saved.password
  ) {
    status.textContent = "Ви увійшли";
  } else {
    status.textContent = "Помилка!";
  }
};

document.getElementById("clear").onclick = function () {
  localStorage.removeItem("user");
  document.getElementById("form").reset();
  status.textContent = "Дані видалені";
};