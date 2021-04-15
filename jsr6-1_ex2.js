function factorial(n) { // function
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

function factorial(n) { // ternary
  return n ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120
