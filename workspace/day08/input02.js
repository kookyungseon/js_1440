let input1 = document.querySelector('.input-test1');
let input2 = document.querySelector('.input-test2');

// 해당 요소가 포커스되면 이벤트 발생(선택되면)
input1.addEventListener('focus',()=>{
    input1.style.backgroundColor = 'blue';
});

// blur 포커스를 잃으면 발생하는 이벤트
input1.addEventListener('blur',()=>{
    input1.style.backgroundColor='lightgray'
})

// keydown : 키보드를 누르는 동안 계속 발생
// input2.addEventListener('keydown',()=>{
//     console.log('down');
//     console.log(input2.value);
// });

// keypress : 키보드를 누르는 순간 발생(키보드로 무언가 입력되어야 발생)
// input2.addEventListener('keypress',()=>{
//     console.log(input2.value);
// });

// keyup : 키보드를 때는 순간 발생
// input2.addEventListener('keyup',()=>{
//     console.log(input2.value);
// })

// change : 요소의 상태가 변경되면 발생하는 이벤트
input2.addEventListener('change',()=>{
    input2.style.backgroundColor='lightgray';
    console.log(input2.value);
});