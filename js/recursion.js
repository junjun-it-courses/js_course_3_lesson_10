// Факториал числа
// 4! = 4 * 3 * 2 * 1;

// function factorial(n) {
//
//     if (n === 1 || n === 0) {
//         return 1;
//     }
//
//     return n * factorial(n - 1);
// }
//
//
// factorial(4)


// // console.log();
//
// factorial(4); // 24
//     4 * factorial(3) // 24
//         3 * factorial(2) // 6
//             2 * factorial(1); // 2


function pow(num, deg) {
    if(deg === 1) {
        return num
    }

    return num * pow(num, deg - 1);
}

pow(2, 5);

// pow(2, 5) // 2 * 2 * 2 * 2 * 2      = 32
//     2 * pow(2, 4) // 2 * 2 * 2 * 2  = 16
//          2 * pow(2, 3) // 2 * 2 * 2 = 8
//             2 * pow(2, 2) // 2 * 2  = 4
//                 2 * pow(2, 1) // 2  = 2

// console.log(2 ** 5)
// console.log(2 * 2 * 2 * 2 * 2)
// console.log(pow(2, 5))