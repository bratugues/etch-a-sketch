const container = document.querySelector(".container");
const resizeBtn = document.querySelector(".resize")
let numPerSide = 16;

const createDivs = (numPerSide) => {
  container.innerHTML = "";
  for (let i = 0; i < (numPerSide * numPerSide); i++) {
    const div = document.createElement("div");
    div.classList.add("square")
    const squareSize = 500 / numPerSide;
    div.style.width = squareSize + "px";
    div.style.height = squareSize + "px";
    container.appendChild(div)
  }
}
createDivs(numPerSide)

resizeBtn.addEventListener("click", () =>{
  numPerSide = prompt("Select size between 1-100:")
  createDivs(Number(numPerSide));
})
