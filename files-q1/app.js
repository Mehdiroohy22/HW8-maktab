'use strict'
const user = {}
const setterGenerator = function (prop) {
    return function (val) {

        this[prop] = val;

        return this
    }.bind(user)
}

const nameSetter = setterGenerator('name')
nameSetter('farhad')
console.log(user)
