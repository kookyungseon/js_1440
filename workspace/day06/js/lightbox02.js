let testButton =document.querySelectorAll(".img-box > button");
let bigImgWrap = document.getElementsByClassName('big-img-wrap');

// console.log(testImg);

//  모든 이미지 요소에 클릭 이벤트를 주기위해 반복문 사용
for(let i =0; i<testButton.length; i++){
    console.log([i]);

    testButton[i].addEventListener('click',function(){

        // data-src 속성을 활용
        // data 'data-'로 시작한다.
        // 개발자가 필요한 데이터를 저장하는 속성
        
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
