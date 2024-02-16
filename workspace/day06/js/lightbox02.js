let testButton =document.querySelectorAll(".img-box > button");
let bigImgWrap = document.getElementsByClassName('big-img-wrap');

// console.log(testImg);

//  모든 이미지 요소에 클릭 이벤트를 주기위해 반복문 사용
for(let i =0; i<testButton.length; i++){
    console.log([i]);

    testButton[i].addEventListener('click',function(){
        let src = this.getAttribute('data-src');
        console.log(src);
        // console.log(this);

        let bigImg = document.querySelector('.big-img');
        bigImg.setAttribute('src', src);
        bigImgWrap[0].style.display = 'flex';
    });

}

bigImgWrap[0].addEventListener('click', function(){
    this.style.display='none'
})
