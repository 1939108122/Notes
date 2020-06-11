var fibonacci = function (n) {
  let n1 = 1; n2 = 1;
  for (var i = 2; i < n; i++)
  {
    [ n1, n2 ] = [ n2, n1 + n2 ]

  }
  return n2
}

console.log(fibonacci(6))

// 使用非递归写出菲波那切数列