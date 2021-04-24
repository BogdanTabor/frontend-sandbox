function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = val => count = val;

  counter.decrease = () => count--;

  return counter
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

counter.set(10); // set new counter value
alert( counter() ); // 10

counter.decrease(); // reduce counter value for 1
alert( counter() ); // 10 (instead 11)