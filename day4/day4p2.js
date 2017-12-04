var fs = require('fs')
var split = require('split2')

var output = 0

var file = fs.createReadStream('./input')
  .pipe(split())
  .on('data', function (phrase) {
    var phrase = phrase.trim()
    phrase = phrase.split(/\s+/)
    var result = new Set()
    for (let i = 0; i < phrase.length; i++) {
      result.add(phrase[i].split('').sort().join(''))
    }
    if (result.size === phrase.length)
      output++
  })
  .on('end', function (err) {
    console.log(output)
  })

