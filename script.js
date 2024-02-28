const canvas = document.querySelector('#canvas');

function setBackground(e){
  const element = e.target;
  element.style.backgroundColor = "Black"
}

for (let i = 0; i < 256; i++) {
  const pixel = document.createElement('div')
  pixel.style.borderStyle = "solid"
  pixel.style.height = "100%"
  pixel.style.width = "100%"
  canvas.appendChild(pixel);
  pixel.addEventListener("mouseover", setBackground)
}
