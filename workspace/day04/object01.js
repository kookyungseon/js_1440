// 객체 생성

let test = {
    num1 : 10, // 키 : 값 => 프로퍼티
    num2 : 20,
    name :"짱구",
    sum : function(){ // 키 : 함수(메소드)
        return this.num1 +this.num2; //this(test)는 객체 자기 자신을 나타냄
        //.(피리오드) : ~의, ~안에 
    }
};//세미콜론

// '.'을 사용
console.log(test.name);
console.log(test.sum());

// []을 사용
console.log(test['name']);

// 프로퍼티 추가 
test.num3 = 2.2;
console.log(test);

// 프로퍼티 삭제
delete test.num3;
console.log(test);

// 프로퍼티 값 수정
console.log(test.num1);
test.num1 = 40;
console.log(test);