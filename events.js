// onclick function

// 1
function makePink() {
  document.body.style.backgroundColor = "pink";
}

function makeBlue() {
  document.body.style.backgroundColor = "skyBlue";
}

// 2
const makeVioletBtn = document.getElementById("makeViolet");
makeVioletBtn.onclick = makeViolent;

function makeViolent() {
  document.body.style.backgroundColor = "violet";
}

// 3
const purpleButton = document.getElementById("makeSalmon");
purpleButton.onclick = function makeSalmon() {
  document.body.style.backgroundColor = "salmon";
};

// 4
const yellowButton = document.getElementById("make-yellow");
yellowButton.addEventListener("click", makeYellow);
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

// 4.5
("make-red");
const redButton = document.getElementById("make-red");
redButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

// 5
// !important
document.getElementById("margin-++").addEventListener("click", function () {
  document.body.style.marginLeft = "10%";
  document.body.style.transition = "1s";
});


document.getElementById("margin---").addEventListener("click", function () {
  document.body.style.marginLeft = "3%";
  document.body.style.transition = ".3s";
});
