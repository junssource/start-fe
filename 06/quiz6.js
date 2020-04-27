$btn = document.getElementById("btn");
$result = document.getElementById("result");
$num = document.getElementById("num");

$btn.addEventListener("click", (event) => {
    var num1 = parseInt($num.value);
    if(isNaN(num1)) {
        alert("숫자가 아닙니다!");
    }else{
        if($result.hasChildNodes) {
            $result.innerHTML = "";
        }
        for(var i=1; i<10; i++) {
            var newDiv = document.createElement("div");
            var newText = document.createTextNode(`${num1} × ${i} = ${num1*i}`);
            newDiv.appendChild(newText);
            $result.appendChild(newDiv);
        }
    }
});
