// 함수
function getArea(width, heigth){ //매개변수
    function another(){
        console.log("another");
    }
    another();
    let area = width * heigth;

    return area; //반환값
}

let area1 = getArea(10,20); //인수
let area2 = getArea(120,200); //인수

console.log(area1);
console.log(area2);