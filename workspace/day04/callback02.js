// <실습>
// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다
// 1. 상품명과 가격, 개수는 pay함수에서 전달받는다
// 2. print함수에서는 상품명과 전체금액(가격 * 개수)을 전달받아서 출력한다
// 3. pay함수는 print함수를 callback함수로 전달받는다
function pay(name, price, cnt,callback){
        let total = price*cnt;
        callback(name,total);
}

function print(name,total){
    console.log("상품명 : "+name, "\n"+"전체상품 가격 : "+total);
}
pay("콜라",1400,4,print);

