'use strict'


const editFunc = function (elem) {
    elem.textContent = 'Hello'
    elem.style.height = '45px'
    elem.style.backgroundColor = 'red'
}
const elemCreator = function (elem, callback) {
    let newElem = document.createElement(elem)
    editFunc(newElem)
    document.body.appendChild(newElem)
}

elemCreator('div', editFunc)