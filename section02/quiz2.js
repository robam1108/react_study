// 배열 분할 및 결합하기
// 배열을 반으로 나누고 순서를 바꿔 다시 결합

// 1. arr1: 0~3번 인덱스까지 분할, 결과는 [0,1,2,3]
// 2. arr2: 4~7번 인덱스까지 분할, 결과는 [4,5,6,7]
// 3. arr2 뒤에 arr1을 결합
// 4. 결합이 완료된 배열 반환

function splitAndCombine(arr) {
    let arr1 = arr.slice(0,4);
    let arr2 = arr.slice(4,8);
    return arr2.concat(arr1);
}
  
let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

// 출력 결과 :
// [4,5,6,7,0,1,2,3]


// 클릭 이벤트 로그 처리하기
// 목표: 배열 형태의 이벤트로그(기록)중 "클릭"이벤트만 특별한 형태로 출력해야한다.
// 형태: ${이벤트아이디}: ${이벤트발생시각}

function printClickEventLogs(logs) {
    logs.forEach(log => {
        if(log.type === "click"){
            console.log(`${log.type} :: ${new Date(log.date).toLocaleString()}`);   
        }
    });
};

printClickEventLogs([
    {
        type: "click",
        date: "2023-01-01T12:00:00Z",
    },
    {
        type: "hover",
        date: "2023-01-01T12:10:00Z",
    },
    {
        type: "scroll",
        date: "2023-01-01T12:15:00Z",
    },
    {
        type: "click",
        date: "2023-01-01T12:20:00Z",
    },
]);
  
// 출력 결과
// click :: 2023. 1. 1. 오후 9:00:00
// click :: 2023. 1. 1. 오후 9:20:00

// 카페 할인 이벤트
function getDiscountedMenus(menus) {
    return menus.map((manu)=>
    ({...manu,
        discountPrice: manu.price-500,
    }));
};

const discountedMenus = getDiscountedMenus([
    { itemId: 1, name: "아메리카노", price: 3000 },
    { itemId: 2, name: "라떼", price: 3500 },
    { itemId: 3, name: "초콜릿 케이크", price: 5000 },
    { itemId: 4, name: "크로와상", price: 2800 },
]);

console.log(discountedMenus);
// 출력 결과 :
// { itemId: 1, name: '아메리카노', price: 3000, discountedPrice: 2500 },
// { itemId: 2, name: '라떼', price: 3500, discountedPrice: 3000 },
// { itemId: 3, name: '초콜릿 케이크', price: 5000, discountedPrice: 4500 },
// { itemId: 4, name: '크로와상', price: 2800, discountedPrice: 2300 }


// 도서 정리하기
function getSortedBooks(books) {
    return books.toSorted((a,b)=>
        {
            let date1 = a.published.getTime();
            let date2 = b.published.getTime();
            if(date1>date2){
                return -1;
            }else if(date1<date2){
                return 1;
            }else{
                return 0;
            }
        })
  }
  
  const sortedBooks = getSortedBooks([
    {
      title: "한입 리액트",
      published: new Date("2023. 04. 06"),
    },
    {
      title: "웹 프론트엔드 첫 걸음",
      published: new Date("2024. 04. 30"),
    },
    {
      title: "이펙티브 타입스크립트",
      published: new Date("2021. 06. 27"),
    },
    {
      title: "클린코드",
      published: new Date("2013. 12. 24"),
    },
  ]);
  
  console.log(sortedBooks);
  // 출력 결과 :
  // { title: '웹 프론트엔드 첫 걸음', published: 2024-04-29T15:00:00.000Z},
  // { title: '한입 리액트', published: 2023-04-05T15:00:00.000Z },
  // { title: '이펙티브 타입스크립트', published: 2021-06-26T15:00:00.000Z},
  // { title: '클린코드', published: 2013-12-23T15:00:00.000Z }