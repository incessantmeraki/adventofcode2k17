var fs = require('fs')

var contents = fs.readFileSync('./input')
  .toString()
  .trim()

contents = contents.split(/\s+/)
contents = contents.map((val) => parseInt(val, 10))

function findMaxIndex(contents) {
  var max = 0 
  var maxIndex = 0
  for (let i=0; i<contents.length; i++) {
    if (contents[i] > max) {
      max = contents[i]
      maxIndex = i
    }
  }
  return maxIndex
}

function calculate(contents) {
  //console.log('Contents', contents)
  var repo = new Set()
  var output = []
  output[0] = 0
  output[1] = 0
  repo.add(contents.join('.'))
  
  while (true) {
    //console.log(output[0], contents, repo)
    var maxIndex = findMaxIndex(contents)
    var val = contents[maxIndex]
    contents[maxIndex] = 0

    while(val--) {
      contents[++maxIndex % contents.length]++
    }

    if (repo.has(contents.join('.'))) {
      break
    } else {
      output[0]++
      repo.add(contents.join('.'))
    }
  }
  output[0]++
  var repoArray = Array.from(repo)
  //console.log(repoArray)
  output[1] = output[0] - repoArray.indexOf(contents.join('.'))
  return output
}


var result = calculate(contents)
console.log('part1', result[0])
console.log('part2', result[1])
