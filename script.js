const pad = document.querySelector(".pad");
const slider = document.querySelector(".slider");


let gridSize = 16;



function drawGrid() {
    gridSize = slider.value;
    //get the value that grid template repeat is at and then change it 
    //this will change from a slider 

    //del all the elements out of the grid
    pad.innerHTML = '';
    pad.style.cssText = `grid-template-rows:repeat(${gridSize},1fr);grid-template-columns:repeat(${gridSize},1fr);`


    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        //add the amount of divs we need to the drawing pad
        const block = document.createElement("div");
        pad.appendChild(block);
        block.classList.add("block");
        block.addEventListener("mousedown", event => { block.classList.add("selected") });
    }
    


}



//inital grid draw not giving it the event listener right now though
drawGrid();
slider.addEventListener("change", drawGrid);

