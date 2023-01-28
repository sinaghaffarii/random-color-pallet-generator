const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalette = () => {
  container.innerHTML = ""; // ---------- clearing the container

  for (let i = 0; i < maxPaletteBoxes; i++) {
    // --------------- generating a random hex color
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    // ------------------- create a new list element and inserting it to the container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = ` <div class="rect-box" style="background: ${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span>`;
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};

generatePalette();

const copyColor = (elem, hexValue) => {
  const colorElement = elem.querySelector(".hex-value");
  // --- copying the hex value , updating the text to copied ,
  // ---- and changing text back to original hex value after 1 second
  navigator.clipboard.writeText(hexValue).then(() => {
    colorElement.innerHTML = "Copied";
    setTimeout(() => (colorElement.innerHTML = hexValue), 1000);
  }).catch(() => alert('FAILD TO COPY THE COLOR CODE!'))
};

refreshBtn.addEventListener("click", generatePalette);
