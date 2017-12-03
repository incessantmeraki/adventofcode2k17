//input value
var n = 10000000

//find dimension of matrix
var x = Math.ceil(Math.sqrt(n))
if (x % 2 === 0)
  x++
var y = x

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
for (let i = 0; i < x; i++) {
  list.push([])
  for (let j = 0; j < y; j++)
    list[i][j] = 0
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
      if (c > n) return
      list[i][++j] = c++
    }
    r += 2

    //move up
    for (let k = 0; k < u; k++) {
      if (c > n) return
      list[--i][j] = c++
    }
    u += 2

    //move left
    for (let k = 0; k < l; k++) {
      if (c > n) return
      list[i][--j] = c++
    }
    l += 2

    //move down
    for (let k = 0; k < d; k++) {
      if (c > n) return
      list[++i][j] = c++
    }
    d += 2

  }
}

//Run simulation
simulate()


var result = Math.abs(a - i) + Math.abs(b - j)
console.log("Result", result)
console.log(list)