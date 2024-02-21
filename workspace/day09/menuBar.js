let $li = $('li').eq(1);

console.log($li);

// jquery는 이벤트명 메소드 존재 
// 이벤트명 == 메소드명 
$li.click(()=>{
    // console.log('click');
    console.log($('.sub-menu').hasClass('none'));
    $('.sub-menu').toggleClass('none');
    // toggleClass : 해당 요소에 특정 클래스가 
    // 존재하면 삭제시키고, 
    // 클래스가 존재하지 않으며 추가 


});