const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
///
const imRed = document.createElement("p");
imRed.textContent = "Merhaba, ben kırmızı!";
imRed.style.color = "red";
container.appendChild(imRed);
///
const imBlue = document.createElement("h3");
imBlue.textContent = "Ben mavi h3!";
imBlue.style.color = "blue";
container.appendChild(imBlue);
///
const div = document.createElement("div");
div.style.border = "solid";
div.style.backgroundColor = "pink";
container.appendChild(div);
///
const inDiv = document.createElement("h1");
inDiv.textContent = "Bir div'in içindeyim.";
div.appendChild(inDiv);
///
const p = document.createElement("p");
p.textContent = "BEN DEEE";
div.appendChild(p);
/////////////
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});
///////////
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
