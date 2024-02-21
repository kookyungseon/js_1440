let $box2 = $('.box2');
// console.log($box2);
// console.log($box2.parent());
// 부모인 main요소가 선택됨
// console.log($box2.parents());
// 조상인 main, body, html
// console.log($box2.prev());
// 형인 box1이 선택됨
// console.log($box2.prevAll());
// console.log($box2.next());
// 바로 밑에 동생 box3가 선택됨
// console.log($box2.nextAll());
// 동생인 box3, 4가 선택
// console.log($box2.nextAll()[1]);
// 인덱스 번호로 box4만 선택

// console.log($('.div-box'));
// 클래스 이름으로 가져온 모든 요소 중
// 2번째 인덱스 요소를 가져옴
// console.log($('.div-box').eq(2));

// --------------------------
// 요소를 조작하는 메소드
$box2.html('<h1>html</h1>');
// console.log($box2.html());
$('.box1').text('text');
$('.box3').css('background-color', 'gold');

let $input = $('input[type=text]');
// console.log($input.attr('placeholder'));

$input.removeAttr('placeholder');

$box2.addClass('border');
$('.box4').removeClass('div-box');

// console.log($box2.prop('style'));

$box2.prop('style').backgroundColor = 'red';

$input.on('change', () => {
    console.log($input.val());
})

// ----------------------------
// 이벤트 등록 메소드
$('.box1').on('click', function(){
    // this를 확인해보면 jquery요소가 아니다.
    // console.log(this);
    // this.style.backgroundColor='red';
    // 만약 jquery를 사용하고 싶으면 this를 jquery로 
    // 감싸주면 된다.
    $(this).css('background-color', 'red');
});

$('.box3').on('click', (e) => {
    // this.style.backgroundColor = 'green';
    // console.log(this);
    
    // jquery로 이벤트 처리를 할 때 this를 사용하면
    // 이벤트가 걸린 요소가 아닌 window객체가 선택된다.
    // 이런 경우 매개변수를 활용하면 해당 이벤트 객체를
    // 가져올 수 있다.
    console.log(e);

    // 이벤트 객체에서 제공하는 프로퍼트 중
    // currentTarget 또는 target을 사용하면
    // 이벤트가 걸린 요소를 가져올 수 있다.
    console.log(e.currentTarget);
    console.log(e.target);
    // currentTarget은 현재 이벤트가 걸린 요소만 
    // 의미한다. 즉, this와 같다
    // target은 이벤트가 걸린 요소의 자식까지 영향을 
    // 줄 수 있다.
    // 자식을 클릭해도 현재 요소의 이벤트 발생시키려면
    // target을 사용한다.

    // currentTarget의 결과를 확인해보면
    // jquery객체가 아니라 일반 요소이다.
    // e.currentTarget.style.backgroundColor = 'green';

    // 만약 jquery를 사용하고 싶다면 
    // 가져온 요소를 다시 jquery로 감싸주면 된다.
    $(e.currentTarget).css('background-color', 'green');

});