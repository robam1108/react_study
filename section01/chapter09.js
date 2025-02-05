// 1. if문
let num = 9;

if (num>=10){
    // console.log("gg");
    // console.log("kk");
}
else if(num >= 5){
//  console.log("5이상")
}
else{
    // console.log("구라데스");
}

// 2. Switch 문
// -> 다수의 조건을 처리할 때 if보다 직관적.

let animal = "owl";

switch(animal){
    case "cat" :{
        console.log("고양이");
        break;
    }
    case "dog" :{
        console.log("강아지");
        break;
    }
    case "bear" :{
        console.log("곰곰");
        break;
    }
    case "snake" :{
        console.log("뱀뱀");
        break;
    }
    case "tiger" :{
        console.log("호랭랭");
        break;
    }
    default:{
        console.log("그런 거 없다");
    }
}