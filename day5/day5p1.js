var fs = require('fs')

var input = fs.readFileSync('./input').toString()
input = input.trim()

var input = input.split('\n')
var input = input.map(function (item) {
  return parseInt(item, 10)
})

var steps = 0
var i = 0
while (i < input.length) {
  steps++
  var t = input[i]
  input[i]++
  i = i + t
}

console.log('stps ', steps)