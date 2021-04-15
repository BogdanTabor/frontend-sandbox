function sumTo(n) { //loop
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumTo(n) { //recursion
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

function sumTo(n) { //arithmetic progression
  return n * (n + 1) / 2;
}

alert(sumTo(1)) // 1
alert(sumTo(2)) // 2 + 1 = 3
alert(sumTo(3)) // 3 + 2 + 1 = 6
alert(sumTo(4)) // 4 + 3 + 2 + 1 = 10
alert(sumTo(100)) // 100 + 99 + ... + 2 + 1 = 5050
alert(sumTo(10000)) // = 50005000