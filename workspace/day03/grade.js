let name = prompt("이름 입력 : ");
let score = prompt("자바스크립트 점수 : ");

let grade ="";

if(score >=90){
    grade="A"
}else if(score>=80){
    grade="B"
}else if(score>=70){
    grade="C"
}else if(score>=60){
    grade="D"
}else{
    grade="F"
}
console.log(grade);
with(document){
    write("<h2>성적 관리 프로그램</h2>");
    write(`<h3>학생 이름 : ${name}</h3>`);
    write(`<h3>자바스크립트 점수 : ${score}</h3>`);
    write(`<h3>학점 : ${grade}점</h3>`);
}
