// 5가지의 요소 순회 및 탐색 메서드
// 1. forEach
// 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 =[1,2,3];

arr1.forEach(function(item, idx, arr){
    // console.log(idx, item*2);
});

let doubleArr = [];

arr1.forEach((item)=>{
    doubleArr.push(item*2)
})

// console.log(doubleArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드

let arr2=[1,2,3];
let isInclude = arr2.includes(10);

// console.log(isInclude)

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 얕은 비교로 탐색하기 때문에 객체요소를 찾을 수 없음
let arr3=[1,2,3];
let index = arr3.indexOf(2);
// console.log(index);


// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스를 반환
let arr4=[1,2,3];
const findedIndex = arr4.findIndex((item)=>item % 2 !==0);
// console.log(findedIndex);

let objectArr =[
    {name: "이정한"},
    {name: "김보람"}
];

const findedIndex2 = objectArr.findIndex((item)=>item.name === "이정한");
console.log("findIndex의 결과는 :",findedIndex2)

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 =[
    {name: "이정한"},
    {name: "김보람"}
];

const finded = arr5.find((item)=>item.name === "이정한");
console.log("find의 결과는 :",finded);