let person1 = { name: "홍길동" }, person2 = null;

console.log(person1 && person1.name); // person1은 truthy이므로 person1.name을 확인하고, 결과는 "홍길동"이다.
console.log(person2 && person2.name); // person2는 null이므로 falsy이고, 뒤를 실행하지 않아 결과는 null이다.

console.log(Math.PI); // 3.141592653589793
console.log(Math.ceil(Math.PI)); // 4
console.log(Math.round(Math.PI)); // 3

console.log(3/Infinity); // 0
console.log(3/0); // Infinity