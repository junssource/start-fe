console.log("zxc");

// Create
var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);

todos.forEach(function(todo) {
    console.log(todo);
});

var arr = [1,2];
arr[1] = 3;

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

function sum(a, b){
    return a+b;
}
console.log(sum(1,2));