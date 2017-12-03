//input value
var n = 5

//set dimension of matrix to some large number
var x, y
x = 100
y = 100

//find initial position 
var i = Math.ceil(x / 2)
var j = i
i--
j--

//store initial position for calculation
var a = i
var b = j

//initialize matrix
list = []
for (let i = 0; i < x + 4; i++) {
  list.push([])
  for (let j = 0; j < y + 4; j++)
    list[i][j] = 0
}

//Find sum of neighbors in matrix
function findSum(i, j) {
  var r1, r2, c1, c2
  if (i === 0)
    r1 = i
  else
    r1 = i - 1

  if (i === x - 1)
    r2 = i
  else
    r2 = i + 1

  if (j === 0)
    c1 = j
  else
    c1 = j - 1

  if (j === x - 1)
    c2 = j
  else
    c2 = j + 1

  var sum = 0
  for (let m = r1; m <= r2; m++) {
    for (let n = c1; n <= c2; n++) {
      if (m !== i || n !== j)
        sum += list[m][n]
    }
  }
  return sum
}

//Fill the matrix in spiral pattern
var r = 1
var u = 1
var l = 2
var d = 2

var c = 1
list[i][j] = c++


function simulate() {
  while (c <= n) {
    //move right
    for (let k = 0; k < r; k++) {
      j++
      c = findSum(i, j)
      list[i][j] = c
      if (c > n) return c
    }
    r += 2

    //move up
    for (let k = 0; k < u; k++) {
      i--
      c = findSum(i, j)
      list[i][j] = c
      if (c > n) return c
    }
    u += 2

    //move left
    for (let k = 0; k < l; k++) {
      j--
      c = findSum(i, j)
      list[i][j] = c
      if (c > n) return c
    }
    l += 2

    //move down
    for (let k = 0; k < d; k++) {
      i++
      c = findSum(i, j)
      list[i][j] = c
      if (c > n) return c
    }
    d += 2

  }
}

//Run simulation
console.log('Output', simulate())
