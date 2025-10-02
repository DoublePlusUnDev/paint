function randomColor(){
    const r = Math.floor(Math.random() * 256); // 0–255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function blockSelected(id){
    blocks[id].style.backgroundColor = randomColor();
}

function screenResized(){
    console.log(canvas.offsetWidth)
    for (let i = 0; i < sideLength*sideLength; i++){
        blocks[i].style.flexBasis = `${canvas.offsetWidth / sideLength}px`
    }
}

const canvas = document.querySelector(".canvas")
const sideLength = 12;

blocks = []
for (let i = 0; i < sideLength*sideLength; i++){
    let newBlock = document.createElement("div")
    newBlock.classList.add("colorBlock")
    blocks.push(newBlock)
    canvas.appendChild(newBlock)
    newBlock.style.flexBasis = `${canvas.offsetWidth / sideLength}px`
    newBlock.addEventListener("mouseover", () => blockSelected(i))
}

addEventListener("resize", screenResized)