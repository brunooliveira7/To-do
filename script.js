const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value === "") {
    alert("Please enter a value.");
    return false;
  }
  
  const value = input.value;

  ul.innerHTML += `<li class="item">
  <span>${value}</span>
  <button class="delete">X</button></li>`;

});
