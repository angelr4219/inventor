// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
const heading = document.createElement("h2");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

heading.classList.add("heading");
heading.textContent = "I'm in a h2";

container.appendChild(heading);
container.appendChild(content);

// the JavaScript file
const btn = document.querySelector("#btn");


btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

btn.onclick = () => alert("Hello World");

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
    
    container.appendChild(heading);

  });
});
