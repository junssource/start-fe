// console.log("zxc");

// // Create
// var todos = ['운동'];
// var todo = '게임';
// todos.push(todo);
// console.log(todos);

// todos.forEach(function(todo) {
//     console.log(todo);
// });

// var arr = [1,2];
// arr[1] = 3;

// Update
// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//     return todo === updateTodo;
// });
// console.log(updateIndex);
// todos[updateIndex] == '공부';

// var isMan = true;
// if(isMan){
//     console.log('1');
// }else{
//     console.log('2');
// }

// alert('안녕하세요');
// var isDelete = confirm("정말 삭제하시겠습니까?");
// console.log(isDelete);

// var id = setTimeout(test, 1000);

// function sum(a, b){
//     return a+b;
// }
// console.log(sum(1,2));
/*js코드) var count = [10,20,30,40,50,60,70,100]; 배열 count 요소들의 평균값 구하는 코드를 작성하세요 */

// var count = [10,20,30,40,50,60,70,80];
// var sum = 0;

// for(var i=0; i<count.length; i++){
//     sum += count[i];
// }
// var avg = sum / count.length;
// console.log(avg)

// js코드) 구구단을 출력하는 코드를 for구문을 사용하여 작성하세요 

//  for(var dan = 2; dan <=9; dan++) {
//      for(var num = 1; num <= 9; num++) {
//          console.log(dan + "×" + num + "=" + dan*num);
//      }
//  }

// guguDan(2,1);

// function guguDan(dan, num) {
//     for(var dan; dan <=9; dan++) {
//         for(var num; num <= 9; num++) {
//             console.log(dan + "×" + num + "=" + dan*num);
//         }
//     }
//     return;
// }

// guguDan();

// function guguDan() {
//     for(var dan=2; dan<=9; dan++){
//         for(var num=1; num<=9; num++){
//             console.log(dan + "x" + num + "=" + dan*num);
//         }
//     }
// }

// var book = {
//     name: "셜록홈즈의 모험",
//     page: 500,
//     history: 49,
//     showHistory:function(){
//         console.log("현재 읽고있는 페이지는 " + this.history + "쪽 입니다.")
//     }
// }

// js코드) window.prompt() 를 사용하여 사용자에게 숫자값을 입력받고 받은 숫자값들의 합을 출력하는 코드를 작성하세요. 


var sum = 0;
for(var i=0; i<3; i++){
    sum += parseInt(prompt("숫자를 입력해주세요.(총 3번)"));
}
console.log("숫자의 합: " + sum );