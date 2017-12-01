function sum(num) {
  num = num.concat(num[0])
  var length = num.length
  var sum = 0
  for (let i = 0; i < length - 1; i++) {
    if (num[i] === num[i + 1]) sum += parseInt(num[i], 10)
  }
  return sum
}

