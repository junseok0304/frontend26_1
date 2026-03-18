let s = "hello world";
for (let i = 0; i < s.length; ++i){
    let ch = s[i];
    console.log(ch);
}
console.log(s.length);
console.log(s[11]);

// let s s라는 지역 변수에 "hello world" 문자열을 저장한다. 문자열은 객체이다. 
// s.length 문자열 객체의 length 속성은 문자열의 길이이다. 길이는 11이고, 인덱스로는 0부터 10까지 존재한다.
// s[11] 문자열 객체의 11번째 인덱스는 존재하지 않으므로 undefined가 출력된다.