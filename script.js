const pad = document.querySelector(".pad");
const slider = document.querySelector(".slider");
let mouseDown = false;


let gridSize = 16;

//



function drawGrid() {
    gridSize = slider.value;
    
    pad.innerHTML = '';
    pad.style.cssText = `grid-template-rows:repeat(${gridSize},1fr);grid-template-columns:repeat(${gridSize},1fr);`


    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        //add the amount of divs we need to the drawing pad
        const block = document.createElement("div");
        pad.appendChild(block);
        block.classList.add("block");
        
        block.addEventListener("mouseover", event => {
            if (mouseDown) {
                block.classList.add("selected")

            }
        }
        );

    }
}



/////mouse down check 
document.body.onmousedown = function () {
    mouseDown = true;
}
//check too see if mouse leaves the element
pad.addEventListener("mouseleave", function (event) {
    mouseDown = false;
});

document.body.onmouseup = function () {
    mouseDown = false;
}




//decide between input and change
drawGrid();
slider.addEventListener("change", drawGrid);

