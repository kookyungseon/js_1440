let modalBox = document.querySelector('.modal-box');
let loginButton = document.querySelector('.login-btn01');
let loginClose = document.querySelector('login-close')

// 모달창 띄우기
loginButton.addEventListener('click',function(){
    modalBox.style.display='flex';
});
// 모달창 닫기
loginClose.addEventListener('click',function(){
    modalBox.style.display='none';
})