const age = 24;
const name ="구경선";

// console.log(age>19? "입장가능" : "입장불가");
// console.log( age%2==0? "짝수" : "홀수");

// console.log(name +"님은 "+age+"세이고 "+(age>19? "입장가능 " : "입장불가 ")+( age%2==0? "짝수" : "홀수"));

const isAdult = age >=10 ? "입장가능" : "입장불가";
console.log(isAdult);

const isResult = age%2==0 ? "짝수" :"홀수";
console.log(isResult);

console.log(`${name}님의 나이는 ${age}세이고 ${isAdult} ${isResult}`)