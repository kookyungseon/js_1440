let boxClick = document.querySelector('#click');
let boxOver = document.querySelector('#over');
let boxOut = document.querySelector('#out');
let boxOverOut = document.querySelector('#over-out');

// 함수 선언
function changeBgGreen(){
    // boxClick.setAttribute('style','background-color: green');
    this.setAttribute('style', 'background-color:green');
}

// addEventListener(이벤트, 함수)
boxClick.addEventListener('click', changeBgGreen);

boxOver.addEventListener('mouseover', function(){
    boxOver.setAttribute('style', 'background-color:red');
});

function changeBgBlue(){
    // boxOut의 스타일을 바꾼다.
    // 만약 현재 이벤트가 걸린 요소의 스타일을 바꾸고 싶다면 
    // 이벤트가 걸린 자기 자신을 의미하는 this를 사용하면 된다.
    // boxOut.setAttribute('style', 'background-color:blue');

    this.setAttribute('style', 'background-color:blue');
}

boxOut.addEventListener('mouseout', changeBgBlue);

boxOverOut.addEventListener('mouseover', changeBgBlue);
boxOverOut.addEventListener('mouseout', changeBgGreen);