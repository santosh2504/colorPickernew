/*let colorChange = document.getElementById("colorChange");*/
let colorInput = document.getElementById("customRange2");
const colorBoxContainer = document.getElementById("colorBoxContainer");
let Mainelement = document.getElementById("Mainelement");
let colorChange = () => {
  colorBoxContainer.innerHTML = "";
  let selectedColor = colorInput.value;
  for (let i = 0; i <= 100; i += 7) {
    let rowdiv = document.createElement("div");
    rowdiv.classList.add("row");
    for (let j = 0; j <= 100; j += 7) {
      let colorBox = document.createElement("div");
      let hwbValue = "hwb(" + selectedColor + " " + i + "% " + j + "%)";
      let id = "div" + i + "" + j;
      colorBox.id = id;
      colorBox.classList.add("col", "box");
      colorBox.style.backgroundColor = hwbValue;
      colorBox.onclick = function () {
        getColor(id);
      };
      rowdiv.appendChild(colorBox);
      Mainelement.appendChild(colorBoxContainer);
    }
    colorBoxContainer.appendChild(rowdiv);
  }
};
function getColor(id) {
  const element = document.getElementById(id);
  const cssObj = window.getComputedStyle(element, null);
  let bgColor = cssObj.getPropertyValue("background-color");
  let hexcode=RGBToHex(bgColor);
  document.getElementById("rgbColor").textContent="RGB: "+bgColor;
  document.getElementById("hexColor").textContent="Hex: "+hexcode;
    
}
function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }
