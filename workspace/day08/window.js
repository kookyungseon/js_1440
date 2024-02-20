// load 이벤트 : 페이지 정보를 모두 읽어왔을 때 발생한다.
// window.onload = ()=> {
//     alert("로드 이벤트 발생!!")
// };

// window.addEventListener('load',()=>{
//     alert("로드~~!!")
// });

let main = document.querySelector('main')
let color = main.style.backgroundColor;
// let color = main.getAttribute('background-color');

window.addEventListener('scroll',()=>{
    // scrollY 프로퍼티는 현재 스크롤의 y축 위치를 가지고 있다.
    let scrollY = window.scrollY
    // console.log(scrollY);
    // console.log(color);

    if(scrollY >400){
        main.style.backgroundColor='gold'; 
    }else if(scrollY>200){
        main.style.backgroundColor='blue';
    }else if(scrollY>100){
        main.style.backgroundColor='green';
    }else{
        main.backgroundColor=color;
    }
});