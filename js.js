const container = document.querySelector(".container");
const resizeBtn = document.querySelector(".resize")
let numPerSide = 16;

const addHoverListeners = () => {
  const squares = document.querySelectorAll(".square")
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      let i = Math.floor(Math.random() * 361)
      square.style.background = `hsl(${i} 100% 50%)`
    })
  })
}

const createDivs = (numPerSide) => {
  container.innerHTML = "";
  for (let i = 0; i < (numPerSide * numPerSide); i++) {
    const div = document.createElement("div");
    div.classList.add("square")
    const squareSize = 600 / numPerSide;
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    container.appendChild(div)
  }
}

createDivs(numPerSide)


resizeBtn.addEventListener("click", () =>{
  let numPerSide;
  do {
    numPerSide = prompt("Select grid size between 1-100:")

    if (numPerSide === null) {
      return
    }
  }
  while (numPerSide <= 0 || numPerSide > 100 || isNaN(Number(numPerSide)) || numPerSide === "");
  createDivs(Number(numPerSide));
  addHoverListeners()
})

addHoverListeners()
