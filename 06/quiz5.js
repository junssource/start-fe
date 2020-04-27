console.log("quiz5");

const $box1 = document.querySelector(".box");
const $box2 = document.querySelector(".box.box1");

$box1.addEventListener("mousedown", doMouseDown);
$box2.addEventListener("mousedown", doMouseDown);
$box1.addEventListener("mouseup", doMouseUp);
$box2.addEventListener("mouseup",doMouseUp);
$box1.addEventListener("mousemove",doMouseMove);
$box2.addEventListener("mousemove",doMouseMove);

let isDragging = false;
const boxClassName1 = "box"
const boxClassName2 = "box box1"

const box1 = {
    clientX : 0,
    clientY : 0,
    isDragging : false,
}

const box2 = {
    clientX : 0,
    clientY : 0,
    isDragging : false,
}

function doMouseDown(event){

    if(event.target.className === boxClassName1) {
        box1.clientX = event.clientX;
        box1.clientY = event.clientY;
        box1.isDragging = true;
    }
    else if(event.target.className === boxClassName2) {
        box2.clientX = event.clientX;
        box2.clientY = event.clientY;
        box2.isDragging = true;
    }
}

function doMouseMove(event){
    if(event.target.className == boxClassName1) {
        if(box1.isDragging === true) {
            let currentX = box1.clientX - event.clientX;
            let currentY = box1.clientY - event.clientY;
            box1.clientX = event.clientX;
            box1.clientY = event.clientY;
            $box1.style.top = ($box1.offsetTop - currentY) + "px";
            $box1.style.left = ($box1.offsetLeft - currentX) + "px";
        }
    }
    else if(event.target.className == boxClassName2) {
        if(box2.isDragging === true) {
            let currentX = box2.clientX - event.clientX;
            let currentY = box2.clientY - event.clientY;
            box2.clientX = event.clientX;
            box2.clientY = event.clientY;
            $box2.style.top = ($box2.offsetTop - currentY) + "px";
            $box2.style.left = ($box2.offsetLeft - currentX) + "px";
        }
    }
    return;
}

function doMouseUp(event){
    if(event.target.className == boxClassName1) {
        box1.isDragging = false;
    }
    else if(event.target.className == boxClassName2) {
        box2.isDragging = false;
    }
}



