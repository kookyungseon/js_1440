// // 일반 함수 정의
// // js에서는 오버로딩을 지원하지 않는다

// function add(num1, num2, num3){
//     return num1 + num2 + num3;
// }

// function add(num1, num2){
//     return num1 + num2;
// }

// // 함수 호출 
// // 함수명(인수)
// // 매개변수와 인수는 짝이 맞아야 한다
// console.log(add(1, 2));

// // 함수의 결과값을 변수에 저장
// let result = add(1, 2);
// console.log(result);

// // 디폴트 매개변수 : 값이 전달되지 않을 경우 초기값을 설정 할 수 있다.

// // 아이디, 비밀번호, 이름을 전달받고 이름은 기본값을 "사용자"로 설정하는 함수
// function introduce(id, passwd, name='사용자'){
//     console.log(id, passwd, name);
// }

// 함수 호출
// 함수명(인수1, 인수2, 인수3)
// introduce("kjh123", "123");
// introduce("kjh123", '123', "짱구");

// 가변파라미터(가변 매개변수) : 함수 호출 시 몇개의 값이 전달될지 모를 때 사용된다
function add1(...numbers){ //...numbers :가변 매개변수
    console.log(typeof numbers);
    console.log(numbers);
    // for(let i = 0; i < numbers.length; i++){
    //     console.log(numbers[i]);
    //     // 객체명[인덱스번호]
    // }
    // 빠른 for문 사용시 인덱스 번호 출력
    for(let i in numbers){
        console.log(numbers[i]);
    }
}
add1(1, 2, 3, 4);

// 이름과 나이를 가변매개변수로 전달받고 출력하기
function info(...args){
    console.log("이름 : " + args[0]);
    console.log("나이 : " + args[1] + "세");
}

info("둘리", 10);