// 01차시 과제

var age = 20;
var bool = true;
var month = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
var book = {
    name: "셜록홈즈의 귀환",
    author: "코난도일",
    publisher: "명품출판",
    nowStock: 10         
}


// 코드 연습

// 변수는 var 키워드를 사용하고 명명 규칙이 있다.
// 어떠한 값도 넣을 수 있지만 자동 타입으로 변환된다.
var name = 'FE'; // 문자열 타입으로 변환
var age = 28; // 정수 타입으로 변환
var message ='hello ' + name; // 문자열 타입으로 변환

// 주석
//  한 줄 주석
/* 
    여러 줄 주석
                    */   

// comment
/* 작성자: 준
   작성일: 2020.3.26
   프로그램명: 코드 연습 */

// 데이터 타입
var count = 5; // 숫자
var nick = "my nick is 'fe'"; // 문자열
var isMan = ture; // 불린값 (제어 구조내에서 주로 사용)

var log = function(str) {  // 함수
    console.log(str);
};        

function log(str) {     // 함수
    console.log(str);
}           

var image = {}; // 객체(object) { } 로 묶여있다.
var image = []; // 배열 [ ] 로 묶여있다.

var nick = null; // null 아무런 값도 나타나지 않음
var nicky // undefined 정의 되지 않음

// 주요 연산자
// + 연산자
console.log(1 + 2); // 3 숫자일 경우 덧셈
console.log('a' + 'b') // "ab" 문자형일 경우 이어붙임

// 동등, 일치 ==(동등), (!=부등) ===(일치) !==(불일치)

if(isHero && isHulk) { // &&는 and연산으로 두 식 모두 true일 경우 실행

}

if(isHero || isHulk) { // ||는 or연산으로 하나라도 참일경우 실행

}

if(!isHero) { // 논리 부정 연산자

}

console.log(typeof (1 + '4')); // 어떤 자료형인지 알려주는 연산자



