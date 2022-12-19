// Задание 1

// function getCompare (a, b) {
//     if (a == b) {
//         console.log (true);
//         return true;}
//         else if (a !== b) {
//             console.log (false);
//             return false;}    }


// getCompare (1,2);
// getCompare (2,2);


// Задание 2

// function getSum (a, b) {
//     const sum = a + b;
//     console.log (sum);
//     return sum;
// }
// getSum (1, 2);
// getSum (2, 2);
// getSum (1, 4);

// let sum = (a, b) => a + b;

// alert( sum(1, 2) );
// alert( sum(2, 2) );

// Задание 3

// const result = 5 ** 2;
// console.log(result);

//Задание 4 

let isDay = function (isDay) {
    switch (isDay) {
        case 1: return "Понедельник";
        case 2: return "Вторник";
        case 3: return "Среда";
        case 4: return "Четверг";
        case 5: return "Пятница";
        case 6: return "Суббота";
        case 7: return "Воскресенье";
        default: return "Введите число от 1 до 7";
        
    };
}
console.log (isDay(21));




