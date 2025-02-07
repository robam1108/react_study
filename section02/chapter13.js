
function add10(num){
    const promise = new Promise((resolve, reject)=>{
        // 비동기 작업을 실행하는 함수
        // excutor
        setTimeout(() => {
            if(typeof num === 'number'){
                resolve(num+10);
            }else{
                reject("숫자아님");
            }
        }, 2000);
    })

    return promise;
}


add10(0)
    .then((result)=>{
    console.log(result);
    return add10(result);
    })
    .then((result)=>{
        console.log(result);
        return add10(result);
    })
    .catch((error)=>{
        console.log(error);
    });


//  then 메서드 -> 그 후에
// promise.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })

