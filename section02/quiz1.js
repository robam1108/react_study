// 영화 리뷰 정보 출력하기 (feat. 하얼빈& 위키드)
// 목표: 영화 리뷰 정보가 담긴 객체를 매개변수로 받아 출력하는 함수 printMovieReview를 완성하세요
function printMovieReview({title, year, reviewer}){
    console.log(`제목: ${title}`);
    console.log(`개봉: ${year}`);
    const [firstRiviewer = "리뷰어 없음"] = reviewer;
    console.log(`첫번째 리뷰어: ${reviewer}`);
}

printMovieReview({
    title: "하얼빈",
    year: "2024",
    reviewer: ["박정민", "김효빈", "이정환"],
});
printMovieReview({
    title: "위키드",
    year: "2024",
    reviewer: [],
});


// 평균 성적 출력하기
// 목표: 학생들의 평균 성적을 출력합니다
function printAvgScore(students){
    for (let name in students){ // 이름을 키값으로 가지는 가장 큰 객체 순환
        let sum = 0; // 성적합계 저장용 변수
        const {scores} = students[name]; // 내부객체 중 scores만 구조분해할당

        for(let score of scores){ // score 배열 순회 후 합계
            sum += score;
        }
        const avg = sum / scores.length; 
        console.log(`${name} : ${avg}`);
    }
}

printAvgScore({
    이정환: {hobby: "유튜브", scores: [10,20,30,40,50]},
    김효빈: {hobby: "테니스", scores: [90,80,30,70,50]},
    홍길동: {hobby: "만화", scores: [100,100,20,20,50]},
})