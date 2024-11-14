const form = document.querySelector("form");
const input = document.querySelector("input");

form.submit = function (event) {
    event.preventDefault();
}