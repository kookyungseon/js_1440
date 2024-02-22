let $slideBox = $('.slide-box');
let $slideImgs = $('.slide-img');


let slideWidth =500;
let currentIdx = 0;
let sldieCnt = $slideImgs.length;

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

$('.prev').on('click',function(){
    currentIdx --;
    $slideBox.css('left',-(currentIdx * slideWidth));
    $slideBox.css('transition','0.5s ease');
    checkEnd();
})

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

setInterval(function(){
    if(currentIdx == sldieCnt -1){
        moveFirst();
    }else{
        moveNext();
    }
  
    
},3000);