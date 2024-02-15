//  객체 생성
const user = {
    name : "구경선",
    age : 24,
    address : "서울시",
    introduce : function(){
        console.log("안녕하세요");
    }
};
// console.log(user);
// console.log(typeof user);

// user 객체의 값을 하나씩 출력하기
for(let i in user){
    console.log(user[i]);
}
// const(상수)는 재할당이 안되어야 하지만 객체에서는 내용 바뀐다
const number =10;
// number=20;
user.age=21;
console.log(user);

// 객체안에 객체가 프로퍼티로 들어 갈 수 있다
const site = new Object(); //빈 객체 생성
console.log(site);
site.user1 = user;
console.log(site);