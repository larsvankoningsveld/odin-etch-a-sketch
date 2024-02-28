const canvas = document.querySelector('#canvas');

function setBackground(e){
  const element = e.target;
  element.style.backgroundColor = "Black"
}

const button = document.querySelector('button')

button.addEventListener('click', getSize)

function getSize(){
  const inputSize = prompt("How big o' grid? (Max = 100)")
  if (inputSize > 100) alert("That's too huge dude...")
  else {
    console.log(inputSize)
    setGrid();
    
    function setGrid(size){
      size = inputSize
      canvas.style.setProperty('--grid-size', size)
      canvas.innerHTML = ''
      for (let i = 0; i < (size * size); i++) {
        const pixel = document.createElement('div')
        pixel.style.borderStyle = "solid"
        pixel.style.borderColor = "lightgrey"
        pixel.style.height = "100%"
        pixel.style.width = "100%"
        canvas.appendChild(pixel);
        pixel.addEventListener("mouseover", setBackground)
      }
    }
  }
}
