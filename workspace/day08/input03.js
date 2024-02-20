let colors = document.querySelectorAll('.color');
let texts = document.querySelectorAll('span');

// console.log(colors);
// console.log(texts);

for (let i=0; i<colors.length; i++){
    colors[i].addEventListener('change',()=>{
        texts[i].style.color=colors[i].value;
    })
}