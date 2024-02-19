let modalBox = document.querySelector('.modal-box');
let loginButton = document.querySelector('.login-btn01');
let loginClose = document.querySelector('login-close')

loginButton.addEventListener('click',function(){
    modalBox.style.display='flex';
});
loginClose.addEventListener('click',function(){
    modalBox.style.display='none';
})