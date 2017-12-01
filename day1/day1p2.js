function sum(num) {
  var len = num.length
  var hlength = num.length / 2
  var sstring = num.substr(0, hlength)
  num = num.concat(sstring)
  var sum = 0
  for (let i = 0; i < len; i++) {
    if (num[i] === num[i + hlength]) sum += parseInt(num[i], 10)
  }
  return sum
}