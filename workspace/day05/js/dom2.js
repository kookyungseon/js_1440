// HTML요소를 id로 가져오기
let title = document.getElementById('title');
// console.log(title);

// HTML요소를 class로 가져오기
let divBox = document.getElementsByClassName('div-box');
// console.log(divBox);
// class로 요소를 가져오면 여러 요소가 선택도므로 배열과 유사한 형태로 가져오게 된다.
// console.log(typeof divBox);

// 가져온 요소에서 특정 요소만 사용하고 싶다면 인덱스를 사용한다.
// console.log(divBox[0]);

//querySelector를 사용하면 좀더 자유롭게 선택자를 사용해서 요소를 가져올 수 있다.
let bgGreen = document.querySelector('#bg-green');
// console.log(bgGreen);

// querySelectorAll은 여러 요소를 가져온다.
let divBorder = document.querySelectorAll('.div-border');
// console.log(divBorder);

// ----------------------------------------
// 가져온 요소의 text가져오기
// console.log(title.innerText);

// 가져온 요소의 text수정하기(태그는 적용 안됨!!)
// title.innerText="DOM test 수정완료";
// title.innerText="<p>innerText 사용</p>";

// 가져온 요소의 text와 내부 태그까지 가져오기
// console.log(bgGreen.innerHTML); //아무것도 안나옴!
// 가져온 요소의 내부에 태그 삽입하기
bgGreen.innerHTML = '<div>내부에 div 넣기!!</div>';

// ------------------------------
// 요소의 특정 속성 가져오기
// console.log(bgGreen.getAttribute('class'));

// 요소의 속성 변경하기
bgGreen.setAttribute('style', 'background-color:green');

// 나머지 div도 DOM을 활용하여 id와 일치하는 배경색 변경

document.querySelector('#bg-red').setAttribute('style','background-color : red');

document.querySelector('#bg-yellow').setAttribute('style','background-color : yellow');

// div-border 클래스를 가진 요소들은 테두리 두께를 2px을 주고 5px 둥글게 만들기
// document.querySelectorAll('.div-border')[0].setAttribute('style','border:2px solid black; border-radius:5px;');

let borders = document.querySelectorAll('.div-border');

// for(let i in borders){
//     borders[i].setAttribute('style','border:2px solid black; border-radius:5px;');
// }

// css style 변경은 다음과 다음과 같이도 할 수 있다.
// 요소.style.속성명
// console.log(bgGreen);
// console.log(bgGreen.style);
console.log(bgGreen.style.backgroundColor);
bgGreen.style.backgroundColor = 'white';
// setAttribute()는 인라인 스타일을 모두 지우고 덮어 씌운다
// style 프로퍼티를 사용하면 특정 프로퍼티에 직접 접근하여 수정할 수 있다.
// 속성명은 그대로 사용하면 되지만 background-color처럼 - 가 포함된
// 속성은 카멜 표기법으로 변환하여 사용한다.