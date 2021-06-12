// selecting all the element
const x = document.querySelector("#x-diraction");
const y = document.querySelector("#y-diraction");
const opacity = document.querySelector("#opacity");
const blure = document.querySelector("#blur");

const colorPicker = document.querySelector("#color-picker");
const insetBtn = document.querySelector(".inset-btn");
const inset = document.querySelector(".inset-container");

// textbox that contain the css code
const code = document.querySelector("#code-container");

// box where  box-shadow css apply
const boxResult = document.querySelector(".result-box");
// tool box
const tools = document.querySelector(".tools");
// text where  text-shadow css apply
const text = document.querySelector(".result-text");
// top tab
const tab = document.querySelector(".tab-container");
// all bottons on tab
const btns = document.querySelectorAll(".btn");
const copyBtn = document.querySelector(".copy-code");
let id = insetBtn.dataset.id;

/*                   #############                    */

// main funcation

document.addEventListener("DOMContentLoaded", function () {
  boxSwitch();
  boxShadowGenerator();
  textShadowGenerator();
});

/*                   #############                    */
tab.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  const active = e.target;
  if (id == "boxShadow") {
    inset.classList.remove("hide");
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      active.classList.add("active");
    });
    // box shadow generator
    boxSwitch();
  }
  if (id == "textShadow") {
    inset.classList.add("hide");
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      active.classList.add("active");
    });
    // text shadow generator
    textSwitch();
  }
});

/*                   #############                    */

// for switch from box to text
function textSwitch() {
  boxResult.classList.add("hide");
  text.classList.remove("hide");
  x.addEventListener("input", function () {
    textShadowGenerator();
  });
  y.addEventListener("input", function () {
    textShadowGenerator();
  });
  blure.addEventListener("input", function () {
    textShadowGenerator();
  });
  colorPicker.addEventListener("input", function () {
    textShadowGenerator();
  });
  opacity.addEventListener("input", function () {
    textShadowGenerator();
  });
}
// for switch from text to box

function boxSwitch() {
  boxResult.classList.remove("hide");
  text.classList.add("hide");
  x.addEventListener("input", function () {
    boxShadowGenerator();
    removeInsCLass();
  });
  y.addEventListener("input", function () {
    boxShadowGenerator();
    removeInsCLass();
  });
  blure.addEventListener("input", function () {
    boxShadowGenerator();
    removeInsCLass();
  });
  colorPicker.addEventListener("input", function () {
    boxShadowGenerator();
    removeInsCLass();
  });
  opacity.addEventListener("input", function () {
    boxShadowGenerator();
    removeInsCLass();
  });
}

// for box-shadow
function boxShadowGenerator() {
  let rgbColor = colorConverter(colorPicker.value);
  boxResult.style.boxShadow = `${x.value}px ${y.value}px ${blure.value}px ${rgbColor}`;
  code.value = `box-shadow: ${x.value}px ${y.value}px ${blure.value}px ${rgbColor}`;
}

// for text-shadow
function textShadowGenerator() {
  let rgbColor = colorConverter(colorPicker.value);

  text.style.textShadow = `${x.value}px ${y.value}px ${blure.value}px ${rgbColor} `;
  code.value = `text-shadow: ${x.value}px ${y.value}px ${blure.value}px ${rgbColor}`;
}

// copy code from textbox
copyBtn.addEventListener("click", () => {
  code.select();
  document.execCommand("copy");
});

// conver hex color to rgba

function colorConverter(hex) {
  let colorHex = hex;
  let a = hex[1] + hex[2];
  let b = hex[3] + hex[4];
  let c = hex[5] + hex[6];
  let r = parseInt(a, 16);
  let g = parseInt(b, 16);
  let bl = parseInt(c, 16);
  colorrgb = `rgba(${r},${g},${bl},${opacity.value})`;
  return colorrgb;
}
// reset inset btn and starting point
function removeInsCLass() {
  insetBtn.classList.remove("ins");
  id = 0;
}

// for inset option

insetBtn.addEventListener("click", () => {
  let rgbColor = colorConverter(colorPicker.value);
  if (id == 0) {
    id = 1;
    insetBtn.classList.add("ins");
    boxResult.style.boxShadow = `${x.value}px ${y.value}px ${blure.value}px ${colorPicker.value} inset `;
    code.value = `box-shadow: ${x.value}px ${y.value}px ${blure.value}px ${rgbColor} inset`;
  } else {
    id = 0;
    insetBtn.classList.remove("ins");
    boxResult.style.boxShadow = `${x.value}px ${y.value}px ${blure.value}px ${colorPicker.value} `;
  }
});
