'use strict';
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures

// Lexical Scope

// Переменная Name созданная внутри функции
// будет доступна и во воложенной функции displayName так
// как находятся в одной области видимости

// let vova = 'Dog';
// function init() {
//     const vova = "Mozilla";
//
//     function displayName() {
//         alert (vova);
//
//         function lll( ) {
//             console.log(vova)
//         }
//
//         lll();
//
//     }
//
//     function showMe() {
//         console.log(vova)
//     }
//
//     displayName();
//     // showMe()
// }
// init();



// Closure

// После выполнения функция удаляется, а значит удаляются и все
// переменные(агрументы) которые в ней существовали на момент вызова

// На самом деле это так, но не всегда

// function makeFunc() {
//     let ex = "Mozilla";
//     let q = 123;
//
//     function displayName() {
//         alert(ex);
//     }
//
//     return displayName;
// }
//
//
// let myFunc = makeFunc();
// myFunc();


// console.log(myFunc)

// В примере выше мы можем видеть что функция makeFunc была вызвана и выполнена
// но в качестве результата ее выполнения вернулсь функция displayName которая
// в данный момент была записана в переменную myFunc

// Функция displayName содержит в себе переменную которая
// объявлена в родительской функции и в таком случае после выполнения функции myFunc
// у нас все еще остается доступ к ее переменным даже после ее завершения, а это
// значит что Лексическое окружение не было удалено если переменные которые
// в нем объявлены гдето используются


// Example

// Пишем функцию которая будет возвращать
// нам новую функцию на основе аргументов


// function makeSizer(size) {
//     return function() {
//         document.body.style.fontSize = size + 'px';
//     };
// }
//
// let size12 = makeSizer(12);
// let size14 = makeSizer(14);
// let size16 = makeSizer(16);
//
// size16()

// document.getElementById('size-12').onclick = size12;
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16;


const themeToogler = () => {
    let defaultState = 'light';

    const makeDark = () => {
        defaultState = 'dark';
    }

    const makeLight = () => {
        defaultState = 'light';
    }

    const getThemeMode = () => {
        return defaultState;
    }

    return {
        makeDark,
        makeLight,
        getThemeMode
    }

}

const themeControls = themeToogler();

console.log( themeControls.getThemeMode() )

themeControls.makeDark();
console.log(themeControls.getThemeMode());

