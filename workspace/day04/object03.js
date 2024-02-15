// 프로그램 객체 생성
const program = new Object();

const student1 = {
    name : '둘리',
    age : 5,
    score : 80
};

const student2 = {
    name : '도우너',
    age : 6,
    score : 50
};

const student3 = {
    name : '또치',
    age : 5,
    score : 90
};

program.student1 =student1;
program.student2 =student2;
program.student3 =student3;

console.log(program);

for(let i in program) {
    // console.log(program[i]);
    // const student = program[`student${i}`];
    // console.log(`${student.name}: ${student.score} 점`);
    console.log(`이름 : ${program[i].name} 점수 : ${program[i].score}`);

}
