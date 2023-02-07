'use strict'
let counter = 0;
const counterMaker = function () {
    return function (stepUp) {
        counter += stepUp ?? 0
        return counter
    }
}

const counterFunc = counterMaker()
console.log(counterFunc())
console.log(counterFunc())
console.log(counterFunc(1))
console.log(counterFunc())
console.log(counterFunc(3))
console.log(counterFunc(7))
console.log(counterFunc(-5))