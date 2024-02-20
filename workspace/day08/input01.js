let x = document.getElementById("form1");
x.addEventListener('focus', changeBg1, true);
x.addEventListener('blur', clearBg1,true )
// 함수 
function changeBg1(){
    document.getElementById('name').style.backgroundColor = "yellow";
}
function clearBg1(){
    document.getElementById('name').style.backgroundColor = "white";
}