var fs = require('fs')
var split = require('split2')

var file = fs.createReadStream('./test.1')

var result = 0

file
  .pipe(split())
  .on('data', function (line) {
    var row = line.split(/\s+/)

    row = row.map(function (val) {
      return parseInt(val, 10)
    })

    row.sort(function (a, b) {
      return a - b
    })
    row.reverse()

    for (let i = 0; i < row.length; i++) {
      let found = false
      for (let j = i + 1; j < row.length; j++) {
        if (row[i] % row[j] === 0) {
          result += row[i] / row[j]
          found = true
          break
        }
      }
      if (found) break
    }
  })
  .on('end', function (err) {
    console.log(result)
  })