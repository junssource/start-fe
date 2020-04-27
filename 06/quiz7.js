$box = document.querySelector(".box");
$bug = document.getElementById("bug");
$point = document.getElementById("point");
$life = document.getElementById("life");

$bug.addEventListener("click", clickBug);
$box.addEventListener("click", clickBox);

var life = 10;
var point = 0;

function clickBug(event) {
    event.stopPropagation();
    point = point + 1;
    $point.innerHTML=point;
    putBug();
}

function clickBox(event) {
    event.stopPropagation();
    life = life - 1;
    $life.innerHTML=life;
    if(life == 0) {
        alert("GAME OVER!");
        $bug.style.display = "none";
    }
}

function putBug(){
    $bug.style.display = "none";
    let ranX = Math.floor(Math.random()*20);
    let ranY = Math.floor(Math.random()*20);
    let x = ranX * 20;
    let y = ranY * 20;
    $bug.style.top = x+"px";
    $bug.style.left = y+"px";
    $bug.style.display = "block";
}