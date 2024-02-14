// 익명함수
let sayHello =function(){
    console.log("안녕하세요");
};
console.log(typeof sayHello);
console.log(sayHello); //sayHello 함수 자체를 출력, 내용은 표시되지 않고 객체 자체가 출력

// 변수를 함수처럼 호출하면 함수안의 내용이 출력됨
// 함수명();
sayHello();

let addNum=function(num1, num2){
    return num1 + num2;
};
console.log(addNum(1,2));

// 화살표 함수 
// 익명함수일 경우 function 키워드를 생략한 뒤 => 로 함수를 선언할 수 있다.
let addNum2 =(num1,num2)=> num1+ num2;
console.log(addNum2(10,20));

let sayHello2 =()=>console.log("hi");
sayHello2();