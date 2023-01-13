const pad = document.querySelector(".pad");
const slider = document.querySelector(".slider");
const clear = document.getElementById("clear");
const picker = document.getElementById("colorPicker");
const rgb = document.getElementById("RGB");
const eraser = document.getElementById("eraser");


let colorValue = "white";

let mouseDown = false;


let gridSize = 16;





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
                block.style.cssText = `background-color:${colorValue}`;
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




function changeColor() {
    //get the color from the picker
    colorValue = picker.value;
    pad.removeEventListener("mousemove", rgbColor);
}
function eraserColor() {
    //get the color from the picker
    colorValue = "lightgray";
    pad.removeEventListener("mousemove", rgbColor);
}

function rainbow() {
    //get the color from the picker
    pad.addEventListener("mousemove", rgbColor);

}

function rgbColor() {
    let red, green, blue;

    red = Math.random() * 255;
    blue = Math.random() * 255;
    green = Math.random() * 255;

    colorValue = `rgb(${red},${blue},${green})`;


}



//decide between input and change
drawGrid();

slider.addEventListener("change", drawGrid);
//color  choices
clear.addEventListener("click", drawGrid);
rgb.addEventListener("click", rainbow);
picker.addEventListener("change", changeColor);
eraser.addEventListener("click", eraserColor);



