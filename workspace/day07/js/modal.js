let navLogin = document.querySelector('.nav--login');
let modalBox = document.querySelector('.modal-box');
let xBox = document.querySelector('.x-box');

// 확인용
// console.log(navLogin);
// console.log(modalBox);

navLogin.addEventListener('click',function(){
    modalBox.style.display='flex'
});

xBox.addEventListener('click',function(){
    modalBox.style.display='none'
});

xBox.addEventListener('mouseover',function(){
    // childNodes : 해당요소의 모든 자식노드를 가져온다
    // console.log(this.childNodes);
    // console.log(this.childNodes[1]);
    // console.log(this.childNodes[1].style);
    this.childNodes[1].style.color="tomato";
});
xBox.addEventListener('mouseout',function(){
    this.childNodes[1].style.color="black";
});