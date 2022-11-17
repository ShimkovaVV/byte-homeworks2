// Задание 1
const a =  5;
const b = 10;
let operationResult;

operationResult = a + b;
console.log("5 + 10 =", operationResult);

operationResult = a - b;
console.log("5 - 10 =", operationResult);

operationResult = a / b;
console.log("5 / 10 =", operationResult);

operationResult = a * b;
console.log("5 * 10 =", operationResult);

// Задание 2

// true && true true
// false ||true true
// true && 'false' false
// 0 && 1 || ' ' && 42  1
// null == undefined true
// '' = 0 false
// 1 === '1' false
// NaN === NaN &&true false
// true || false && true || false true
// (true || false) && (true || false) false
// 10 || 0 && 'dog' || '' 10  10
// (10 || 0) && ('dog' || '') dog

// Задание 3

const UserNumberFirst = Number(prompt ("Введите первое число"));
console.log("UserNumberFirst", UserNumberFirst);

const UserNumberSecond = Number(prompt ("Введите второе число"));
console.log("UserNumberSecond", UserNumberSecond);

alert ("А теперь сравним!");

if (UserNumberFirst > UserNumberSecond) {
    alert (UserNumberFirst + " больше " + UserNumberSecond);
}
else if (UserNumberFirst < UserNumberSecond) {
    alert (UserNumberFirst + " меньше " + UserNumberSecond);
}
else {alert (UserNumberFirst + " равно " + UserNumberSecond)};

//Задание 4 в процессе

// const NumberFirst = Number(prompt ("Введите первое число"));
// console.log("NumberFirst", NumberFirst);

// const NumberSecond = Number(prompt ("Введите второе число"));
// console.log("NumberSecond", NumberSecond);
// const action = (prompt("Выберите желаемое действие " + "+, -, /, *"));

// let res;


// switch (res) {
//     case "+": res = NumberFirst + NumberSecond;
//         alert ("Ваш ответ " + res);
//     break;
//     case "-": c = a - b;
//         alert ("Ваш ответ " + res);
//     break;
//     // case resMul:
//     //     alert ("Ваш ответ " + resMul);
//     // break;
//     // case resDiv:
//     //     alert ("Ваш ответ " + resDiv);
//     // break;
// }
