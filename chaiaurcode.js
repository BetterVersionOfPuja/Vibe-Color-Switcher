console.log("vibe switcher active");

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "purple") {
      body.style.backgroundColor = "#6b2d84";
    }

    if (e.target.id === "pink") {
      body.style.backgroundColor = "#ff2f92";
    }

    if (e.target.id === "blue") {
      body.style.backgroundColor = "#1e6cff";
    }

    if (e.target.id === "red") {
      body.style.backgroundColor = "#8b0000";
    }
  });
});
