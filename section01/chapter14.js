// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정영역) 스코프

let a = 1; // 전역 스코프

function funcA(){
    let b = 2;
    console.log(a);
}

funcA();
console.log(b);