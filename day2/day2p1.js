var fs = require('fs')
var split = require('split2')

var file = fs.createReadStream('./test')

var checksum = 0

file
  .pipe(split())
  .on('data', function (line) {
    var row = line.split(/\s+/)

    var max = row.reduce(function (a, b) {
      return Math.max(a, b)
    })

    var min = row.reduce(function (a, b) {
      return Math.min(a, b)
    })

    checksum += max - min
  })
  .on('end', function (err) {
    console.log(checksum)
  })