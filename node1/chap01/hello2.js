let message = "hello world";
console.log(message);

// let 키워드를 사용하여 지역변수를 선언할 수 있다. 
// js는 변수 선언시 변수의 타입을 지정하지 않는다.
// js는 인터프리터 언어이므로, 변수의 타입은 런타임에 결정된다.
// js는 동적 타이핑 언어이므로, 변수의 타입을 변경할 수 있다.
message = 100;
console.log(message);

// js는 객체 지향 언어이므로, 객체를 생성할 수 있다.
let person = {
    name: "홍길동",
    age: 30,
    sayHello: function() {
        console.log("안녕하세요. 저는 " + this.name + "입니다.");
    }
};

console.log(person.name);
person.sayHello();