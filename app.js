'use strict'
const user = {}
const setterGenerator = function (prop) {
    return function (val) {

        this[prop] = val;

        return this
    }
}

const nameSetter = setterGenerator('name')
nameSetter.call(user, 'farhad')
console.log(user)
