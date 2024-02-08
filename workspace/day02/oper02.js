//관계 연산자
// <,>,<=,>=,==,!=,===,!==
console.log("apple" < "pineapple"); //글자 수 비교
console.log("1"==1); //값이 일치하는지 
console.log(1===1); //값과 타입이 일치하는지 

// 비교가 불가능한 undefined : undefined의 값은 다른 값과 배교해서는 안된다
console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);
console.log(undefined===0);
console.log(undefined===null); //== 비교시 true, ===비교시 false