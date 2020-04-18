console.log("quiz3"); // 연결됨

var $add_red = document.querySelector(".add-red");
var $add_btn = document.querySelector(".add-btn");
var $delete_btn = document.querySelector(".delete-btn");
var $text_btn = document.querySelector(".text-btn");
var $reset_btn = document.querySelector(".reset-btn");
var $toggle_btn = document.querySelector(".toggle-btn");
var $image_btn = document.querySelector(".image-btn");

var $box = document.querySelector(".box"); // 처음 등장하는 상자

$add_red.addEventListener("click",addingRed);
$add_btn.addEventListener("click",addingBox);
$delete_btn.addEventListener("click",deleteBox);
$text_btn.addEventListener("click",inputText);
$reset_btn.addEventListener("click",resetBox);
$toggle_btn.addEventListener("click",toggleBox);
$image_btn.addEventListener("click",printImage);

function addingRed(){ // 상자를 빨간색으로 바꾸는 함수
    getAllBox();
    for(var i=0; i<$box.length; i++) {
        $box[i].classList.add("red");
    }
}

function getAllBox(){ // 추가된 상자를 확인하는 함수, 실행전에 확인
    $box = document.querySelectorAll(".box");
}

function addingBox(){ // 상자를 추가하는 함수
    var newDiv = document.createElement("div");
    newDiv.classList.add("box");
    document.body.appendChild(newDiv);
}

function getLastBox(){ // 마지막 상자의 갯수를 구하는 함수
    getAllBox();
    var lastBoxNum;
    for(var i=0; i<$box.length; i++) {
        lastBoxNum = i;
    }
    return lastBoxNum;
}

function deleteBox(){ // 상자를 제거하는 함수
    getAllBox();
    var lastBoxNum = getLastBox();

    if(lastBoxNum > -1) {
    var lastBox = document.querySelectorAll(".box")[lastBoxNum];
    document.body.removeChild(lastBox);
    }
}

function inputText(){ // 상자에 텍스트를 넣는 함수
    getAllBox();
    var text = document.querySelector(".txt").value;
    for(var i=0; i<$box.length; i++) {
        if($box[i].textContent) continue;
        var newText = document.createTextNode(text);
        $box[i].appendChild(newText);
    }
}

function resetBox(){ // 상자를 모두 초기화하는 함수
    getAllBox();
    for(var i=0; i<$box.length; i++) {
        document.body.removeChild($box[i]);
    }
}

var toggle = true; // 토글 변수

function toggleBox(){  // 상자를 보이게 또는 보이지않게 토글하는 함수
    getAllBox();

    if(toggle) {
        for(var i=0; i<$box.length; i++) {
            $box[i].style.display="none";
        }
        toggle = !toggle;
    }
    else{
        for(var i=0; i<$box.length; i++) {
            $box[i].style.display="block";
        }
        toggle = !toggle;
    }
}

function printImage() {
    getAllBox();
    for(var i=0; i<$box.length; i++) {
        var newImg = document.createElement("img");

        var src = document.createAttribute("src");
        src.value = "https://i.imgur.com/69NjYBH.png";

        var width = document.createAttribute("width");
        width.value = "30px";

        var height = document.createAttribute("height");
        height.value = "30px";

        newImg.setAttributeNode(src);
        newImg.setAttributeNode(width);
        newImg.setAttributeNode(height);

        $box[i].appendChild(newImg);
    }
}
