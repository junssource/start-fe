$box = document.getElementById("box");

$box.addEventListener("mousedown",doingMouseDown);
$box.addEventListener("mousemove",doingMouseMove);
$box.addEventListener("mouseout",doingMouseOut);

var isDrag = false; // 드래그 여부를 결정하는 변수

var xOrigin; // 초기 x값
var yOrigin; // 초기 y값
var xCurrent; // 현재 x값
var yCurrent; // 현재 y값

function doingMouseDown(e) {
    xOrigin = e.clientX; 
    yOrigin = e.clientY;
    isDrag = true;
}

function doingMouseMove(e) {
    if(isDrag == true) {
        xCurrent = xOrigin - e.clientX;
        yCurrent = yOrigin - e.clientY;
        xOrigin = e.clientX;
        yOrigin = e.clientY;
        $box.style.top = ($box.offsetTop - yCurrent) + "px";
        $box.style.left = ($box.offsetLeft - xCurrent) + "px";
    }
}

function doingMouseOut() {
    isDrag = false;
}

