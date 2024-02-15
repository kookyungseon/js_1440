//  배열 생성
// 매개변수로 값을 1개만 넘기면 칸 수로 사용한다. 
let arr = new Array(10);
// 매개변수로 값을 2개이상 넘기면 요소로 사용한다.
let arr2 = new Array(1,2,3);

console.log(arr);
console.log(arr2);

//보통 []를 사용한다
let ar =[1,2,3];
// console.log(ar);

// 배열의 길이 확인
console.log(ar.length);

// 배열요소로 접근 : 배열명[idx]
// 인덱스 번호는 0 ~배열명.length-1
console.log(ar[0]);

// 자바에서 없는 인덱스 번호 사용하면 오류 발생
// 자바스크립트는 없는 인덱스에 값을 저장하면 값이 추가 됨
ar[5] = 22;
console.log(ar);
// console.log(ar[3]); 값이 비어있는 배열의 요소
console.log(ar.length);

// push(값)는 배열의 끝에 값을 추가한다
console.log(ar.push(11));
console.log(ar.push(12));
console.log(ar);

// delete는 값을 삭제한다
delete ar[0]; //ar의 0번 인덱스 값 삭제
console.log(ar);

// pop()은 배열의 마지막 요소를 삭제한다.
console.log(ar.pop());
console.log(ar);
