'use strict'

// В стрелочных функциях, this привязан к окружению, в котором была создана функция.
// В глобальной области видимости this будет указывать на глобальный объект.

// function forEach_1(arr, callback) {
//
//     for(let i = 0; i < arr.length; i++) {
//
//         callback(arr[i], i, arr);
//
//     }
//
// }


// const forEach = (arr, callback) => {
//
//     for(let i = 0; i < arr.length; i++) {
//
//         callback(arr[i], i, arr);
//
//     }
//
// }
//
// forEach()

// function sum_2(a, b) {
//     return a + b;
// }
//
// const sum = (a, b) => a + b;
//
// console.log(sum(10, 20))
//
//
// let arr = [1, 2, 3, 4, 5, 6];
//
// arr.forEach( item => console.log(item) )
//
// const logger = () => {
//     console.log('....')
// }
// logger();