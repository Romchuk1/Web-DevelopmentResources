const input = document.getElementById("inputField");
const list = document.getElementById("list");

document.getElementById("addBtn").onclick = function () {
    if (input.value === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = function () {
        li.remove();
    };

    list.appendChild(li);
    input.value = "";
};

document.getElementById("sortBtn").onclick = function () {
    const items = Array.from(list.children);

    items.sort((a, b) =>
        a.textContent.localeCompare(b.textContent, "uk")
    );

    list.innerHTML = "";

    items.forEach(item => list.appendChild(item));
};