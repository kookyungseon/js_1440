// 콜백함수

function mul(num1, num2,callback){
    // 외부에서 callback으로 함수를 전달했다면
    if(callback){
        // callback함수의 매개변수로 결과를 전달해 준다
        callback(num1*num2);
    }else
    console.log("콜백함수 없음!");
}

// 매개변수로 전달할 함수 
function print(result){
    console.log(result);
}
mul(3,0);
// mul(3,9,print);