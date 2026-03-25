let cnt = 1;
for (let i = 1; i < 30; ++i) {
    console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 10);
    cnt += 1;
}
console.log("반복 횟수: " + cnt);


// 10 이상 20 이하의 정수를 임의로 30개 출력하는 코드를 구현하시오. 