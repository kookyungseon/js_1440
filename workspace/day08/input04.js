let foods = document.querySelectorAll('.food');
let result = document.querySelector('.result');

// console.log(foods);

// 함수로 만들어서 이벤트 부여하기
function radioEvent(element){
    element.addEventListener('change',()=>{
        result.innerText = element.value;
    });
}

for(let i=0; i <foods.length; i++){
    radioEvent(foods[i]);
}
