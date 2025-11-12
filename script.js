const input = document.getElementById("input");
const buttonAdd = document.getElementById("add-btn");
const list = document.getElementById("list");

buttonAdd.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  if (input.value.trim() === "") {
    return;
  }
  list.appendChild(li);
  input.value = "";
  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "X";
  const buttonComplete = document.createElement("button");
  buttonComplete.textContent = "✔";
  li.appendChild(buttonDelete);
  li.appendChild(buttonComplete);
  buttonDelete.addEventListener("click", () => {
    li.remove();
  });
  let completed = false;

  buttonComplete.addEventListener("click", () => {
    completed = !completed;
    if (completed) {
      li.style.textDecoration = "line-through";
      buttonDelete.style.backgroundColor = "red";
      buttonDelete.style.color = "black";
      buttonComplete.style.backgroundColor = "green";
      buttonComplete.style.color = "white";
    } else {
      li.style.textDecoration = "none";
    }
  });
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    buttonAdd.click();
  }
});
