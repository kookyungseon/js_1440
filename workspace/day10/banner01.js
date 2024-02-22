let $slideBox = $('.slide-box');
let $slideImgs = $('.slide-img');

// console.log($slideBox);
// console.log($slideImgs);
console.log($slideImgs.length);

// 슬라이드 박스 너비
let slideWidth =800;
// 슬라이드 이미지 인덱스번호 
let currentIdx = 0;
// 총 슬라이드 이미지 수
let sldieCnt = $slideImgs.length;

checkEnd();

function moveNext(){
    currentIdx ++;
    $slideBox.css('left',-(currentIdx*slideWidth));
    $slideBox.css('transition','0.5s ease');
    checkEnd();
}

$('.next').on('click',moveNext);

function moveFirst(){
    currentIdx = 0;
    checkEnd();
    $slideBox.css('left',"0");
    $slideImgs.css('transition',"none");
    
}
// $('.next').on('click', function(){
//     currentIdx ++;
//     console.log('currentIdx :', + currentIdx);
//     $slideBox.css('left', -(currentIdx * slideWidth));
//     $slideBox.css('transition','0.5s ease');
//     checkEnd();
// });

$('.prev').on('click',function(){
    currentIdx --;
    $slideBox.css('left',-(currentIdx * slideWidth));
    $slideBox.css('transition','0.5s ease');
    checkEnd();
})

// 처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd(){
    if(currentIdx <= 0){//처음 이미지
        $('.prev').css('display','none');

    }else{
        $('.prev').css('display','block');
    }
    if(currentIdx>=sldieCnt-1){
        $('.next').css('display','none');

    }else{
        $('.next').css('display','block');
    }
}
// setTimeout은 매개변수로 넘겨준 시간 뒤에 
// 핸들러 함수를 실행한다.
// setTimeout(function(){
//     alert("setTimeout");
// },1000);

// setInterval은 매개변수로 넘겨준 시간마다 
// 핸들러 함수를 실행한다.
// setInterval(function(){
//     console.log("setInterval");
// },1000)

setInterval(function(){
    if(currentIdx == sldieCnt -1){
        moveFirst();
    }else{
        moveNext();
    }
  
    
},3000);