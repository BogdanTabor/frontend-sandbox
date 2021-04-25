function sum(a) {
  let currentSum = a;//currentSum
  function next(b) {//function accumulator
    currentSum += b;
    return next;
  }
  next.toString = function() {
    return currentSum;
  }
  return next;
}

alert(( sum(1)(2) ).toString()); // 3
alert(( sum(5)(-1)(2).toString()) ); // 6
alert(( sum(6)(-1)(-2)(-3).toString()) ); // 0
alert(( sum(0)(1)(2)(3)(4)(5).toString()) ); // 15