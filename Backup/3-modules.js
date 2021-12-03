// CommonJS, every file is module

const names = require('./4-names')
const { john } = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative')

console.log(data)
console.log(data.singlePerson)

sayHi(names.peter)
sayHi(john)

require('./7-mind-grenade')
