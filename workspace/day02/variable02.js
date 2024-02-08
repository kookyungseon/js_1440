// console.log(a);
// var a;

// console.log(b);
// let b;

// 동적 바인딩 : 호이스팅 시 값에 따라 자료형이 동적으로 결정된다.
var data =10;
console.log(data);
console.log(typeof data);

var age;
console.log(age); //undefined

const data2 = "절대 수정 금지";
// var, let을 사용하면 해당 변수의 값은 수정이 가능하다
// 실수로 라도 변경되면 안되는 값이 있을 때는 상수를 사용해야하는데 
// 이때, const 키워드를 사용한다 
// data2 = "안녕"; 상수는 값을 변경할 수 없다!!
console.log(data2);