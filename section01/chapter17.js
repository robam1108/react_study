// 1. 배열 생성
let arrA = new Array();
let arrB = [] // 배열 리터럴

let arrC = [1,2,3,true, "hi", null, undefined, ()=>{},];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] ="hello";

console.log(arrC);
