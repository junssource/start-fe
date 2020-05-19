$btn = document.getElementById("btn");
$log = document.getElementById("log");
$url = document.getElementById("url");

$btn.addEventListener("click", fetchLog);

function fetchLog() {
  const logVal = $url.value;

  if (logVal === "") {
    alert("url을 입력하세요.");
    return;
  }

  fetch(logVal)
    .then(function (response) {
      response.text().then(function (data) {
        $log.innerHTML = data;
      });
    })
    .catch(function (err) {
      $log.innerHTML = err;
    });
}
